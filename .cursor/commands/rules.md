# Vision (Parisa London) - Development Rules & Guidelines

## Overview
This document establishes the coding standards, architectural patterns, and development approaches for the Parisa London jewelry e-commerce website. **AI models and developers must review this file before making any code changes.**

---

## Technology Stack

### Core Technologies
- **Framework**: Astro 5.13.3+ (Static Site Generation)
- **Language**: TypeScript (Strict mode)
- **Runtime**: Node.js (ES Modules)
- **Styling**: CSS (No framework, custom CSS with CSS variables)
- **Image Processing**: Sharp (Astro's integrated service)
- **Interactive Components**: Swiper.js for carousels

### Build & Development
- **Package Manager**: npm
- **Dev Server**: `npm run dev` (localhost:4321)

---

## Architecture & File Organization

### Directory Structure Rules
```
src/
├── assets/images/          # Static image assets (optimized via Astro)
├── components/             # Reusable Astro components
│   ├── common/            # Shared utilities (ScrollToTop, etc.)
│   ├── layout/            # Layout components (Footer, etc.)
│   ├── navigation/        # Navigation-specific components
│   ├── sections/          # Page section components
│   └── ui/                # UI primitives (FAQ, Marquee, etc.)
├── data/                  # Static data and type definitions
├── pages/                 # Astro pages (file-based routing)
└── styles/                # Global styles and CSS
```

### Component Organization
- **One component per file** - Each `.astro` file should contain a single component
- **Co-located styles** - Each component should have its own `.css` file
- **Index file exports** - Use `components/index.ts` for centralized imports
- **Typed data** - All data structures must follow TypeScript interfaces

---

## Coding Standards

### TypeScript Rules
- **Strict mode enabled** - All TypeScript must pass strict type checking
- **Interface-first** - Define interfaces before implementation
- **Explicit types** - Avoid `any`, prefer specific types
- **Type imports** - Use `import type` for type-only imports

### CSS Standards
- **CSS Variables** - Use CSS custom properties defined in `:root`
- **No CSS-in-JS** - All styles in separate `.css` files
- **BEM-inspired naming** - Use component__element--modifier pattern
- **Mobile-first** - Write mobile styles first, then desktop breakpoints
- **Custom properties for theming**:
  ```css
  --primary: #0D1716
  --secondary: #368f8b
  --background: #f3f3f3
  --text-dark: #0D1716
  --radius: 0
  --font-primary: 'Montserrat', sans-serif
  ```

### Image Optimization Rules
- **Always use Astro's Image component** - Never use plain `<img>` tags
- **Required attributes**: `src`, `alt`, `width`, `height`
- **Performance attributes**:
  - `format="webp"` for modern browsers
  - `quality={85}` for balance of size/quality
  - `loading="lazy"` except for hero images
  - `loading="eager"` + `priority={true}` for above-fold images
  - `densities={[1, 1.5, 2]}` for responsive images
  - Appropriate `sizes` attribute for responsive behavior

```astro
<Image
  src={heroImage}
  alt="Descriptive alt text"
  width={1920}
  height={1080}
  format="webp"
  quality={95}
  loading="eager"
  priority={true}
  sizes="100vw"
  densities={[1, 1.5, 2]}
/>
```

---

## Component Development Rules

### Astro Component Structure
```astro
---
// 1. Type imports first
import type { Product } from '../data/types';

// 2. Component imports
import { Image } from 'astro:assets';

// 3. Asset imports
import heroImage from '../assets/images/ui/hero.jpg';

// 4. Component logic
const products = await getProducts();
---

<!-- 5. HTML with semantic markup -->
<section class="component-name" aria-label="Descriptive label">
  <!-- Component content -->
</section>

<!-- 6. Component-specific styles (if inline) -->
<style>
  .component-name {
    /* Component styles */
  }
</style>

<!-- 7. Component-specific JavaScript (if needed) -->
<script>
  // Component behavior
</script>
```

### Component Naming
- **PascalCase** for component names and files
- **kebab-case** for CSS classes
- **camelCase** for JavaScript variables
- **SCREAMING_SNAKE_CASE** for constants

### Accessibility Requirements
- **Semantic HTML** - Use appropriate HTML5 elements
- **ARIA attributes** - Include necessary ARIA labels and roles
- **Keyboard navigation** - Ensure all interactive elements are keyboard accessible
- **Focus management** - Proper focus trapping in modals/drawers
- **Alt text** - Descriptive alt text for all images

---

## Data Management

### Product Data Structure
- **Follow the Product interface** in `src/data/types.ts`
- **Complete data** - All required fields must be populated
- **Consistent formatting** - Price formatting, image paths, etc.
- **SEO optimization** - Include proper meta data

### Type Safety Rules
- **Export interfaces** from `types.ts`
- **Type all functions** - Include return types and parameter types
- **Validate data** - Runtime checks for external data
- **No implicit any** - All data must be explicitly typed

---

## Performance & Optimization

### Image Performance
- **Optimize all images** - Use Sharp service for processing
- **Responsive images** - Multiple sizes and formats
- **Lazy loading** - Default for below-fold images
- **Preload critical images** - Hero and above-fold images

### JavaScript Performance
- **Minimal client-side JS** - Prefer server-side rendering
- **Progressive enhancement** - Core functionality works without JS
- **Efficient event handling** - Use event delegation where appropriate
- **Clean up resources** - Remove event listeners, clear timeouts

### CSS Performance
- **Critical CSS inline** - Essential styles in `<head>`
- **Minimize reflows** - Avoid layout-triggering properties
- **Use CSS containment** - Where appropriate for isolation
- **Efficient selectors** - Avoid deeply nested selectors

---

## E-commerce Specific Rules

### Product Display
- **Consistent pricing format** - Use `price.formatted` field
- **Stock status indicators** - Clear inventory status
- **Image galleries** - Multiple product views
- **Product variations** - Size, color options where applicable

### User Experience
- **Mobile-first design** - Primary experience on mobile
- **Fast navigation** - Instant feedback on interactions
- **Clear CTAs** - Obvious buy/add to cart buttons
- **Search functionality** - Easy product discovery

### SEO Requirements
- **Structured data** - Product schema markup
- **Meta tags** - Title, description, keywords
- **URL structure** - Clean, descriptive URLs
- **Sitemap generation** - Automatic sitemap creation

---

## State Management

### Client-Side State
- **Minimal client state** - Prefer server-side data
- **Local storage** - For cart and user preferences
- **Event-driven updates** - Custom events for state changes
- **No external state libraries** - Use native DOM and localStorage

### Cart Management
```javascript
// Cart should be managed via localStorage
const cart = {
  items: [],
  total: 0,
  currency: 'GBP'
};
```

---

## Error Handling

### Development
- **TypeScript errors** - Must resolve all TS errors before commit
- **Console warnings** - Address all warnings in dev mode
- **Accessibility violations** - Fix a11y issues immediately
- **Performance issues** - Monitor build times and bundle size

### Runtime
- **Graceful fallbacks** - Handle missing images, data
- **User feedback** - Clear error messages
- **Retry mechanisms** - For network requests
- **Offline support** - Basic offline functionality

---

## Testing & Quality

### Code Quality
- **TypeScript strict mode** - Zero tolerance for type errors
- **Consistent formatting** - Use consistent code style
- **Semantic markup** - Validate HTML structure
- **Performance budgets** - Monitor Core Web Vitals

### Browser Support
- **Modern browsers** - Support last 2 versions
- **Progressive enhancement** - Core functionality for all browsers
- **Polyfills** - Only when necessary
- **Responsive design** - All devices and screen sizes

---

## Deployment & Build

### Build Process
- **Static generation** - All pages pre-rendered
- **Asset optimization** - Automatic image and CSS optimization
- **Bundle analysis** - Monitor build output sizes
- **Environment variables** - Separate dev/prod configs

### Performance Targets
- **Core Web Vitals**:
  - LCP < 2.5s
  - FID < 100ms
  - CLS < 0.1
- **Bundle size** - Keep JavaScript minimal
- **Image optimization** - WebP format, appropriate sizing

---

## Security

### Content Security
- **Image sources** - Validate all image imports
- **External resources** - Minimize third-party dependencies
- **User input** - Sanitize any user-generated content
- **Environment secrets** - Never commit sensitive data

---

## Git & Collaboration

### Commit Standards
- **Conventional commits** - Use clear, descriptive commit messages
- **Feature branches** - One feature per branch
- **Code review** - All changes require review
- **Documentation** - Update docs with code changes

### Branch Naming
- `feature/component-name` - New features
- `fix/issue-description` - Bug fixes
- `chore/maintenance-task` - Maintenance tasks

---

## AI Development Guidelines

### Before Making Changes
1. **Read this rules.md file completely**
2. **Understand the existing code patterns**
3. **Check TypeScript interfaces and types**
4. **Review component structure and naming**
5. **Ensure changes follow established patterns**

### Code Generation Rules
- **Follow existing patterns** - Don't introduce new architectures
- **Maintain type safety** - All code must be properly typed
- **Preserve accessibility** - Maintain or improve a11y
- **Test thoroughly** - Verify changes work as expected
- **Update documentation** - Keep docs in sync with code

### What NOT to Do
- **Don't change the core architecture** without discussion
- **Don't introduce new dependencies** without justification
- **Don't break existing TypeScript types**
- **Don't ignore accessibility requirements**
- **Don't skip image optimization**
- **Don't use external CSS frameworks**

---

## Final Notes

This codebase prioritizes:
1. **Performance** - Fast loading, optimized images
2. **Accessibility** - Inclusive design for all users
3. **Type Safety** - Robust TypeScript implementation
4. **Maintainability** - Clear patterns and organization
5. **User Experience** - Smooth, intuitive interactions

**Remember**: Always check this file before making changes. When in doubt, follow existing patterns rather than introducing new approaches.
