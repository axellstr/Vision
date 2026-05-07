import type { Product } from '../types';
import { getAllTalismanProducts } from './talisman';
import { getAllKaleidoscopeProducts } from './kaleidoscope';
import { getAllHeritageProducts } from './heritage';
import { getAllForeverProducts } from './forever';
import { getAllBespokeProducts } from './bespoke';

// Use getter functions to ensure products are sorted by category
const collections: Record<string, () => Product[]> = {
  talisman: getAllTalismanProducts,
  kaleidoscope: getAllKaleidoscopeProducts,
  heritage: getAllHeritageProducts,
  forever: getAllForeverProducts,
  bespoke: getAllBespokeProducts,
};

export function getAllProducts(): Product[] {
  return Object.values(collections).flatMap(getProducts => getProducts());
}

export function getProductById(id: string): Product | undefined {
  return getAllProducts().find(p => p.id === id);
}

export function getAllCollections(): string[] {
  return Object.keys(collections);
}

export function getAllCategories(): string[] {
  const categories = new Set<string>();
  for (const p of getAllProducts()) categories.add(p.category);
  return Array.from(categories);
}

export function getProductsByCollection(collection: string): Product[] {
  const getProducts = collections[collection];
  return getProducts ? getProducts() : [];
}

export function getProductsByCategory(category: string): Product[] {
  return getAllProducts().filter(p => p.category === category);
}
