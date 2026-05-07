## Products and Collections Guide

This document explains how products work today, how to add new collections, and an optional "master list" setup to make future additions automatic.

### ELI5 overview
- Think of each collection as a box of toys.
- Right now the site only opens the Talisman box.
- If you add another box, you must teach the shop to open all the boxes.

---

## Current setup

- Types live in `src/data/types.ts` and define the `Product` shape.
- Talisman data lives in `src/data/products/talisman.ts` and exports:
  - `talismanProducts: Product[]`
  - `getTalismanProductById(id)`
  - `getAllTalismanProducts()`
- The Shop page (`src/pages/shop.astro`) imports only talisman products and renders the grid.
- The Product page (`src/pages/shop/product/[id].astro`) generates static pages for talisman IDs only and fetches talisman products by ID.

Result: The site works perfectly for Talisman, but does not see other collections yet.

---

## Product data model (what each product needs)

Minimal fields used across the site/cart:
- `id` (globally unique)
- `name`
- `sku`
- `price.current` (number)
- `price.formatted` (e.g., `£550`)
- `images.main` (public URL starting with `/`)
- `category` (e.g., `rings`, `necklaces`)
- `collection` (e.g., `talisman`)

Additional recommended fields (already present in the type): description, badges, seo, gallery, inventory, etc.

---

## Images

- Place images under `public/products/{collection}/...` (e.g., `public/products/talisman/Talisman_0.jpg`).
- Reference them with public-rooted paths (e.g., `/products/talisman/Talisman_0.jpg`).

---

## Adding a new collection (quick path)

1) Create data file
- Copy the pattern from Talisman and create a new file, for example:
  - `src/data/products/signature.ts`
  - Export `signatureProducts: Product[]`
  - Export helpers `getSignatureProductById(id)` and `getAllSignatureProducts()`

2) Update the Shop page to include your new collection
- In `src/pages/shop.astro`, import your collection and merge the arrays before mapping to the simplified `sampleProducts` used by the grid.
- Update the filter lists to include any new categories/collections (or generate them from the data).

3) Update the Product page to generate paths and fetch by ID across all collections
- In `src/pages/shop/product/[id].astro`, update `getStaticPaths()` to concatenate IDs from all collections.
- Update the product lookup to try each collection’s `get...ById` until it finds a match.

This keeps the current pattern and scales as long as you remember to add each new collection to both pages.

---

## Optional (recommended): Master product registry

Create a single registry to avoid touching pages every time you add a collection.

1) Create `src/data/products/index.ts` that aggregates all collections:

```ts
// src/data/products/index.ts
import type { Product } from '../types';
import { talismanProducts } from './talisman';
// import { signatureProducts } from './signature'; // add as you create collections

const collections: Record<string, Product[]> = {
  talisman: talismanProducts,
  // signature: signatureProducts,
};

export function getAllProducts(): Product[] {
  return Object.values(collections).flat();
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
```

2) Update the Shop page (`src/pages/shop.astro`) to use the registry:

```ts
// Before: getAllTalismanProducts()
import { getAllProducts, getAllCollections, getAllCategories } from '../data/products';

const products = getAllProducts();
const sampleProducts = products.map(p => ({
  id: p.id,
  name: p.name,
  price: p.price.current,
  category: p.category,
  collection: p.collection,
  image: p.images.main,
  isNew: p.badges.isNew,
}));

const categories = ['all', ...getAllCategories()];
const collections = ['all', ...getAllCollections()];
```

3) Update the Product page (`src/pages/shop/product/[id].astro`) to use the registry:

```ts
// Before: getAllTalismanProducts(), getTalismanProductById()
import { getAllProducts, getProductById } from '../../../data/products';

export async function getStaticPaths() {
  const products = getAllProducts();
  return products.map(product => ({ params: { id: product.id } }));
}

const { id } = Astro.params;
const product = getProductById(id as string);
if (!product) return Astro.redirect('/shop');
```

With this in place:
- Adding a new collection is just creating `src/data/products/{collection}.ts` and adding it to the registry map. The shop and product pages automatically include it.

---

## Cart integration (what the add-to-cart buttons expect)

When you click “ADD TO BAG” on the grid or product page, the site constructs a cart item using fields from the product:
- `id`, `name`, `price.current`, `images.main`, `category`, `collection`, `sku`
- Optional: `size` if your product has sizes

As long as each product obeys the `Product` type and the fields above are present, the cart will work with no extra changes.

---

## Naming and IDs
- `id` must be unique across ALL products and collections (e.g., `talisman-001`).
- `slug` is currently not used for routing, but keep it accurate for SEO/future use.

---

## Quick checklist when adding products
- [ ] Images placed under `public/products/{collection}/...`
- [ ] Data file created at `src/data/products/{collection}.ts`
- [ ] `Product` fields filled (see minimal and recommended lists above)
- [ ] If not using the registry: added to `shop.astro` and `[id].astro`
- [ ] If using the registry: imported and added to the `collections` map
- [ ] Filters updated or generated (categories, collections)

---

## Troubleshooting
- Broken images: confirm the path starts with `/` and the file exists in `public/...`.
- Product not on shop grid: ensure it’s included in the array the shop uses (or in the registry), and that `collection` matches your filters.
- PDP 404/redirect: ensure the product’s `id` is included in `getStaticPaths()` (via your merged arrays or registry).
- Cart item shows £0: confirm `price.current` is a number and `price.formatted` is a string like `£550`.

---

## FAQ

**Is the current setup correct?**
- Yes, it’s correct for a single collection (Talisman). To support more, either merge arrays in both pages or switch to the registry.

**What’s the easiest long-term setup?**
- Use the master registry. Then adding a new collection is a single data file plus one import+entry in the registry map.


display:none on shop ,drawer , product page and collection pages