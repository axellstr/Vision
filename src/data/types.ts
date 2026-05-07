import type { ImageMetadata } from 'astro';

export interface Product {
  id: string;
  sku: string;
  name: string;
  slug: string;
  description: {
    short: string;
    long: string;
  };
  price: {
    current: number;
    original?: number;
    currency: string;
    formatted: string;
  };
  category: string;
  collection: string;
  images: {
    main: string | ImageMetadata;
    gallery: (string | ImageMetadata)[];
    thumbnail: string | ImageMetadata;
  };
  // Optional variant support (e.g., A–Z initials, gemstone types) using Astro ImageMetadata
  variants?: {
    name: string; // e.g., "Initial" or "Gemstone"
    options: Array<{
      id: string; // e.g., 'a' or 'diamond'
      label: string; // e.g., 'A' or 'Diamond'
      image?: ImageMetadata; // optimized asset for this option (optional)
      price?: number; // optional price for this variant
      priceFormatted?: string; // optional formatted price for this variant
    }>;
    defaultOptionId?: string;
    affectsPrice?: boolean; // true if variants affect the price
  };
  specifications: {
    metalType: string;
    metalColor: string;
    stoneType?: string;
    diamondDetails?: string;
    dimensions: {
      width?: string;
      height?: string;
      weight?: string;
    };
    sizes?: string[];
    care: string;
  };
  inventory: {
    inStock: boolean;
    quantity: number;
    stockStatus: 'in-stock' | 'low-stock' | 'out-of-stock' | 'pre-order';
    leadTime: string;
  };
  features: string[];
  tags: string[];
  badges: {
    isNew: boolean;
    isBestseller?: boolean;
    isLimitedEdition?: boolean;
    isCustomizable?: boolean;
  };
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
  shipping: {
    freeShipping: boolean;
    weight: number;
    dimensions: {
      length: number;
      width: number;
      height: number;
    };
  };
  relatedProducts?: string[];
  createdAt: string;
  updatedAt: string;
}

export interface Collection {
  id: string;
  name: string;
  slug: string;
  description: {
    short: string;
    long: string;
  };
  hero: {
    image: string;
    title: string;
    subtitle: string;
  };
  images: {
    gallery: string[];
    thumbnail: string;
  };
  productCount: number;
  priceRange: {
    min: number;
    max: number;
    currency: string;
  };
  features: string[];
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
  isActive: boolean;
  sortOrder: number;
  createdAt: string;
}
