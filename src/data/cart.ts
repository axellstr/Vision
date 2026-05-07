export interface CartItem {
  id: string;
  name: string;
  price: number;
  formattedPrice: string;
  image: string;
  category: string;
  collection: string;
  quantity: number;
  size?: string;
  sku: string;
}

export interface CartState {
  items: CartItem[];
  total: number;
  formattedTotal: string;
  itemCount: number;
  isOpen: boolean;
}

// Cart store with localStorage persistence
class CartStore {
  private state: CartState = {
    items: [],
    total: 0,
    formattedTotal: '£0.00',
    itemCount: 0,
    isOpen: false
  };

  private listeners: Array<(state: CartState) => void> = [];

  constructor() {
    // Load cart from localStorage on initialization
    this.loadFromStorage();
  }

  // Subscribe to cart changes
  subscribe(listener: (state: CartState) => void) {
    this.listeners.push(listener);
    // Immediately call with current state
    listener(this.state);
    
    // Return unsubscribe function
    return () => {
      const index = this.listeners.indexOf(listener);
      if (index > -1) {
        this.listeners.splice(index, 1);
      }
    };
  }

  // Notify all listeners of state change
  private notify() {
    this.listeners.forEach(listener => listener(this.state));
    // Also emit a global event so non-subscribers (e.g., navbar fallback) can react
    try {
      if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') {
        const detail = this.getState();
        window.dispatchEvent(new CustomEvent('cart:updated', { detail }));
      }
    } catch {
      // no-op
    }
  }

  // Get current state
  getState(): CartState {
    return { ...this.state };
  }

  // Add item to cart
  addItem(item: Omit<CartItem, 'quantity'>, quantity = 1) {
    // Prevent bespoke items from being added to cart
    if (item.collection === 'bespoke') {
      if (typeof window !== 'undefined') {
        window.location.href = '/contact';
      }
      return;
    }
    
    const existingItemIndex = this.state.items.findIndex(
      cartItem => cartItem.id === item.id && cartItem.size === item.size
    );

    if (existingItemIndex > -1) {
      // Update quantity if item already exists
      this.state.items[existingItemIndex].quantity += quantity;
    } else {
      // Add new item
      this.state.items.push({
        ...item,
        quantity
      });
    }

    this.updateTotals();
    this.saveToStorage();
    this.notify();
  }

  // Remove item from cart
  removeItem(id: string, size?: string) {
    const targetSize = size ?? undefined;
    const sizeEquals = (a?: string, b?: string) => {
      const na = a ?? undefined;
      const nb = b ?? undefined;
      return na === nb;
    };

    const beforeLength = this.state.items.length;
    this.state.items = this.state.items.filter(
      item => !(item.id === id && sizeEquals(item.size, targetSize))
    );

    // If no item removed and size not provided, fallback to removing by id
    if (beforeLength === this.state.items.length && targetSize === undefined) {
      this.state.items = this.state.items.filter(item => item.id !== id);
    }

    this.updateTotals();
    this.saveToStorage();
    this.notify();
  }

  // Update item quantity
  updateQuantity(id: string, quantity: number, size?: string) {
    const targetSize = size ?? undefined;
    const sizeEquals = (a?: string, b?: string) => {
      const na = a ?? undefined;
      const nb = b ?? undefined;
      return na === nb;
    };

    let itemIndex = this.state.items.findIndex(
      item => item.id === id && sizeEquals(item.size, targetSize)
    );

    // Fallback: if no exact match and size not provided, match first by id only
    if (itemIndex === -1 && targetSize === undefined) {
      itemIndex = this.state.items.findIndex(item => item.id === id);
    }

    if (itemIndex > -1) {
      if (quantity <= 0) {
        // Remove item if quantity is 0 or negative
        this.removeItem(id, targetSize);
      } else {
        this.state.items[itemIndex].quantity = quantity;
        this.updateTotals();
        this.saveToStorage();
        this.notify();
      }
    }
  }

  // Clear all items from cart
  clearCart() {
    this.state.items = [];
    this.updateTotals();
    this.saveToStorage();
    this.notify();
  }

  // Open/close cart drawer
  setCartOpen(isOpen: boolean) {
    this.state.isOpen = isOpen;
    this.notify();
  }

  // Toggle cart drawer
  toggleCart() {
    this.setCartOpen(!this.state.isOpen);
  }

  // Calculate totals
  private updateTotals() {
    this.state.total = this.state.items.reduce(
      (sum, item) => sum + (item.price * item.quantity), 
      0
    );
    this.state.formattedTotal = `£${this.state.total.toLocaleString('en-GB', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    this.state.itemCount = this.state.items.reduce(
      (sum, item) => sum + item.quantity, 
      0
    );
  }

  // Save to localStorage
  private saveToStorage() {
    try {
      const cartData = {
        items: this.state.items,
        total: this.state.total,
        formattedTotal: this.state.formattedTotal,
        itemCount: this.state.itemCount
      };
      localStorage.setItem('cart', JSON.stringify(cartData));
    } catch (error) {
      console.warn('Failed to save cart to localStorage:', error);
    }
  }

  // Load from localStorage
  private loadFromStorage() {
    try {
      const saved = localStorage.getItem('cart');
      if (saved) {
        const cartData = JSON.parse(saved);
        // Purge removed products (e.g., talisman-002)
        this.state.items = (cartData.items || []).filter((item: CartItem) => item && item.id !== 'talisman-002');
        this.updateTotals(); // Recalculate totals to ensure consistency
        // Persist purge
        this.saveToStorage();
      }
    } catch (error) {
      console.warn('Failed to load cart from localStorage:', error);
      this.state.items = [];
      this.updateTotals();
    }
  }
}

// Create singleton instance
export const cartStore = new CartStore();

// Helper functions for easy use in components
export const addToCart = (item: Omit<CartItem, 'quantity'>, quantity = 1) => {
  cartStore.addItem(item, quantity);
};

export const removeFromCart = (id: string, size?: string) => {
  cartStore.removeItem(id, size);
};

export const updateCartQuantity = (id: string, quantity: number, size?: string) => {
  cartStore.updateQuantity(id, quantity, size);
};

export const clearCart = () => {
  cartStore.clearCart();
};

export const toggleCartDrawer = () => {
  cartStore.toggleCart();
};

export const openCartDrawer = () => {
  cartStore.setCartOpen(true);
};

export const closeCartDrawer = () => {
  cartStore.setCartOpen(false);
};

// Subscribe to cart changes
export const subscribeToCart = (listener: (state: CartState) => void) => {
  return cartStore.subscribe(listener);
};

// Get current cart state
export const getCartState = () => {
  return cartStore.getState();
};
