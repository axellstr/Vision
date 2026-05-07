/**
 * Global Cart Manager
 * Industry-standard cart management system that avoids module import issues
 * by exposing cart functionality globally on the window object.
 */

class GlobalCartManager {
  constructor() {
    this.cart = {
      items: [],
      total: 0,
      formattedTotal: '£0.00',
      itemCount: 0,
      isOpen: false
    };
    
    this.listeners = [];
    this.loadFromStorage();
    this.setupGlobalMethods();
  }

  /**
   * Load cart data from localStorage
   */
  loadFromStorage() {
    try {
      const saved = localStorage.getItem('cart');
      if (saved) {
        const cartData = JSON.parse(saved);
        this.cart.items = (cartData.items || []).filter(item => item && item.id !== 'talisman-002');
        
        // Note: Migration will happen after thumbnail map is loaded (see bottom of file)
        
        this.updateTotals();
      }
    } catch (error) {
      console.warn('Failed to load cart from localStorage:', error);
      this.cart.items = [];
      this.updateTotals();
    }
  }

  /**
   * Migrate existing cart items to use optimized thumbnails
   */
  migrateCartItemImages() {
    try {
      let updated = false;
      for (const item of this.cart.items) {
        const optimizedImage = this.getOptimizedThumbnail(item.id, item.image);
        if (optimizedImage !== item.image) {
          item.image = optimizedImage;
          updated = true;
        }
      }
      if (updated) {
        this.saveToStorage();
      }
    } catch (error) {
      console.warn('Failed to migrate cart item images:', error);
    }
  }

  /**
   * Save cart data to localStorage
   */
  saveToStorage() {
    try {
      const cartData = {
        items: this.cart.items,
        total: this.cart.total,
        formattedTotal: this.cart.formattedTotal,
        itemCount: this.cart.itemCount
      };
      localStorage.setItem('cart', JSON.stringify(cartData));
    } catch (error) {
      console.warn('Failed to save cart to localStorage:', error);
    }
  }

  /**
   * Update cart totals
   */
  updateTotals() {
    this.cart.total = this.cart.items.reduce(
      (sum, item) => sum + (item.price * item.quantity), 
      0
    );
    this.cart.formattedTotal = `£${this.cart.total.toLocaleString('en-GB', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    this.cart.itemCount = this.cart.items.reduce(
      (sum, item) => sum + item.quantity, 
      0
    );
  }

  /**
   * Get optimized thumbnail for product
   */
  getOptimizedThumbnail(productId, originalImage) {
    try {
      // Check if thumbnail map is available
      if (window.__CART_THUMBNAIL_MAP__) {
        // Handle variant products (format: productId::variantId)
        const baseProductId = productId.includes('::') ? productId.split('::')[0] : productId;
        const thumbnail = window.__CART_THUMBNAIL_MAP__[baseProductId];
        if (thumbnail) {
          return thumbnail;
        }
      }
    } catch (error) {
      console.warn('Failed to get optimized thumbnail:', error);
    }
    // Fallback to original image
    return originalImage;
  }

  /**
   * Add item to cart
   */
  addToCart(productData, quantity = 1) {
    try {
      // Prevent bespoke items from being added to cart
      if (productData.collection === 'bespoke') {
        window.location.href = '/contact';
        return false;
      }
      
      // Find existing item (considering size variations)
      const existingItemIndex = this.cart.items.findIndex(
        item => item.id === productData.id && item.size === productData.size
      );

      if (existingItemIndex > -1) {
        // Update quantity if item already exists
        this.cart.items[existingItemIndex].quantity += quantity;
      } else {
        // Get optimized thumbnail
        const optimizedImage = this.getOptimizedThumbnail(productData.id, productData.image);
        
        // Add new item
        const cartItem = {
          id: productData.id,
          name: productData.name,
          price: productData.price,
          formattedPrice: `£${productData.price.toLocaleString('en-GB')}`,
          image: optimizedImage,
          category: productData.category || 'unknown',
          collection: productData.collection || 'unknown',
          sku: productData.sku || `SKU-${productData.id.toUpperCase()}`,
          size: productData.size || undefined,
          variant: productData.variant || undefined,
          quantity: quantity
        };
        
        this.cart.items.push(cartItem);
      }

      this.updateTotals();
      this.saveToStorage();
      this.notifyListeners();
      
      return true;
    } catch (error) {
      console.error('Failed to add item to cart:', error);
      return false;
    }
  }

  /**
   * Remove item from cart
   */
  removeFromCart(id, size) {
    // Normalize size: treat undefined, null, and empty string as equivalent
    const targetSize = size ?? undefined;
    const sizeEquals = (a, b) => {
      const na = a ?? undefined;
      const nb = b ?? undefined;
      return na === nb;
    };

    // First try to remove exact match by id + size
    const beforeLength = this.cart.items.length;
    this.cart.items = this.cart.items.filter(
      item => !(item.id === id && sizeEquals(item.size, targetSize))
    );

    // If nothing was removed and no size provided, remove by id fallback
    if (beforeLength === this.cart.items.length && (targetSize === undefined)) {
      this.cart.items = this.cart.items.filter(item => item.id !== id);
    }
    this.updateTotals();
    this.saveToStorage();
    this.notifyListeners();
  }

  /**
   * Update item quantity
   */
  updateQuantity(id, quantity, size) {
    const targetSize = size ?? undefined;
    const sizeEquals = (a, b) => {
      const na = a ?? undefined;
      const nb = b ?? undefined;
      return na === nb;
    };

    let itemIndex = this.cart.items.findIndex(
      item => item.id === id && sizeEquals(item.size, targetSize)
    );

    // Fallback: if no exact match and no size provided, match first by id
    if (itemIndex === -1 && targetSize === undefined) {
      itemIndex = this.cart.items.findIndex(item => item.id === id);
    }

    if (itemIndex > -1) {
      if (quantity <= 0) {
        this.removeFromCart(id, targetSize);
      } else {
        this.cart.items[itemIndex].quantity = quantity;
        this.updateTotals();
        this.saveToStorage();
        this.notifyListeners();
      }
    }
  }

  /**
   * Clear cart
   */
  clearCart() {
    this.cart.items = [];
    this.updateTotals();
    this.saveToStorage();
    this.notifyListeners();
  }

  /**
   * Open cart drawer
   */
  openCartDrawer() {
    this.cart.isOpen = true;
    this.notifyListeners();
    
    // Trigger cart drawer open event
    const cartDrawer = document.querySelector('.cart-drawer');
    if (cartDrawer) {
      // Align with CartDrawer.astro which uses 'active' and body class 'cart-drawer-open'
      cartDrawer.classList.add('active');
      document.body.classList.add('cart-drawer-open');
    }
  }

  /**
   * Close cart drawer
   */
  closeCartDrawer() {
    this.cart.isOpen = false;
    this.notifyListeners();
    
    // Trigger cart drawer close event
    const cartDrawer = document.querySelector('.cart-drawer');
    if (cartDrawer) {
      cartDrawer.classList.remove('active');
      document.body.classList.remove('cart-drawer-open');
    }
  }

  /**
   * Toggle cart drawer
   */
  toggleCartDrawer() {
    if (this.cart.isOpen) {
      this.closeCartDrawer();
    } else {
      this.openCartDrawer();
    }
  }

  /**
   * Get current cart state
   */
  getCartState() {
    return { ...this.cart };
  }

  /**
   * Subscribe to cart changes
   */
  subscribe(listener) {
    this.listeners.push(listener);
    // Immediately call with current state
    listener(this.cart);
    
    // Return unsubscribe function
    return () => {
      const index = this.listeners.indexOf(listener);
      if (index > -1) {
        this.listeners.splice(index, 1);
      }
    };
  }

  /**
   * Notify all listeners of cart changes
   */
  notifyListeners() {
    this.listeners.forEach(listener => {
      try {
        listener(this.cart);
      } catch (error) {
        console.error('Error in cart listener:', error);
      }
    });
  }

  /**
   * Setup global methods on window object
   */
  setupGlobalMethods() {
    // Expose cart methods globally for easy access from any component
    window.CartManager = {
      addToCart: this.addToCart.bind(this),
      removeFromCart: this.removeFromCart.bind(this),
      updateQuantity: this.updateQuantity.bind(this),
      clearCart: this.clearCart.bind(this),
      openCartDrawer: this.openCartDrawer.bind(this),
      closeCartDrawer: this.closeCartDrawer.bind(this),
      toggleCartDrawer: this.toggleCartDrawer.bind(this),
      getCartState: this.getCartState.bind(this),
      subscribe: this.subscribe.bind(this)
    };
  }

  /**
   * Add product by ID - fetches product data and adds to cart
   * This is the main method for adding products from product pages
   */
  addProductById(productId, selectedSize = null) {
    try {
      // Get product data from the page or global product data
      let productData = null;
      
      // Try to get product data from global window object first
      if (window.currentProduct && window.currentProduct.id === productId) {
        productData = window.currentProduct;
      } else {
        // Fallback: try to extract from page elements
        productData = this.extractProductDataFromPage(productId);
      }

      if (!productData) {
        console.error('Product data not found for ID:', productId);
        return false;
      }

      // Add size if provided
      if (selectedSize) {
        productData.size = selectedSize;
      }

      return this.addToCart(productData, 1);
    } catch (error) {
      console.error('Failed to add product by ID:', error);
      return false;
    }
  }

  /**
   * Extract product data from page elements (fallback method)
   */
  extractProductDataFromPage(productId) {
    try {
      // Try to find product data in the page
      const productCard = document.querySelector(`[data-id="${productId}"]`);
      if (productCard) {
        return {
          id: productId,
          name: productCard.querySelector('.product-name')?.textContent?.trim(),
          price: parseFloat(productCard.getAttribute('data-price') || '0'),
          image: productCard.querySelector('.product-image img')?.src,
          category: productCard.getAttribute('data-category'),
          collection: productCard.getAttribute('data-collection')
        };
      }

      // Try to get from product page elements
      const titleElement = document.querySelector('.product-title, h1');
      const priceElement = document.querySelector('.current-price, .product-price');
      const imageElement = document.querySelector('.product-image img, .gallery-main img');

      if (titleElement && priceElement) {
        return {
          id: productId,
          name: titleElement.textContent?.trim(),
          price: parseFloat(priceElement.textContent?.replace(/[£$,]/g, '') || '0'),
          image: imageElement?.src || '',
          category: 'unknown',
          collection: 'unknown'
        };
      }

      return null;
    } catch (error) {
      console.error('Failed to extract product data from page:', error);
      return null;
    }
  }
}

// Initialize the global cart manager when the script loads
if (typeof window !== 'undefined') {
  window.globalCartManager = new GlobalCartManager();
  
  // Also expose the addProductById method directly for convenience
  window.addProductToCart = (productId, size) => {
    return window.globalCartManager.addProductById(productId, size);
  };
  
  // Migrate cart images when thumbnail map becomes available
  // Wait for DOM to be ready and thumbnail map to be injected
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      setTimeout(() => {
        window.globalCartManager.migrateCartItemImages();
      }, 100);
    });
  } else {
    // DOM already loaded
    setTimeout(() => {
      window.globalCartManager.migrateCartItemImages();
    }, 100);
  }
}
