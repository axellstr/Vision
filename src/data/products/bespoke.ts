import type { Product } from '../types';

// Import images for Sapphires Earrings
import kaleidoscope5 from '../../assets/images/bespoke/5.png';
import kaleidoscope5a from '../../assets/images/bespoke/5a.png';
import kaleidoscope5b from '../../assets/images/bespoke/5b.png';

// Import images for Kaleidoscope Emerald Cut Diamond (BES-NECK-018)
import kaleidoscope23 from '../../assets/images/bespoke/23.png';
import kaleidoscope23a from '../../assets/images/bespoke/23a.png';
import kaleidoscope23b from '../../assets/images/bespoke/23b.png';


// Import images for Bespoke Collection
import bespoke25 from '../../assets/images/bespoke/25.png';
import bespoke25a from '../../assets/images/bespoke/25a.png';
import bespoke25b from '../../assets/images/bespoke/25b.png';
import bespoke26 from '../../assets/images/bespoke/26.jpg';
import bespoke26a from '../../assets/images/bespoke/26a.png';
import bespoke26b from '../../assets/images/bespoke/26b.png';
import bespoke27 from '../../assets/images/bespoke/27.jpg';
import bespoke27a from '../../assets/images/bespoke/27a.png';
import bespoke27b from '../../assets/images/bespoke/27b.png';
import bespoke28 from '../../assets/images/bespoke/28.png';
import bespoke28a from '../../assets/images/bespoke/28a.png';
import bespoke28b from '../../assets/images/bespoke/28b.png';
import bespoke29 from '../../assets/images/bespoke/29.png';
import bespoke29a from '../../assets/images/bespoke/29a.png';
import bespoke29b from '../../assets/images/bespoke/29b.jpg';

export const bespokeProducts: Product[] = [
  {
    id: "bespoke-001",
    sku: "BES-RING-001",
    name: "Emeralds and Marquise Diamonds Earrings",
    slug: "bespoke-emeralds-marquise-diamonds-earrings",
    description: {
      short: "Emeralds and Marquise diamonds Earrings",
      long: "Create a truly unique piece with our Bespoke Custom Ring. This handcrafted masterpiece is designed entirely according to your specifications, incorporating your chosen metals, gemstones, and design elements. Our skilled artisans work closely with you to bring your vision to life, ensuring every detail reflects your personal style and story. This is more than jewelry - it's a personalized work of art that tells your unique narrative."
    },
    price: {
      current: 750,
      original: 950,
      currency: "GBP",
      formatted: "£750"
    },
    category: "rings",
    collection: "bespoke",
    images: {
      main: bespoke25,
      gallery: [
        bespoke25b,
        bespoke25a
      ],
      thumbnail: bespoke25b
    },
    specifications: {
      metalType: "Custom (Gold, Platinum, Silver)",
      metalColor: "Custom Choice",
      stoneType: "Custom Gemstones",
      dimensions: {
        width: "Custom",
        height: "Custom",
        weight: "Custom"
      },
      care: "Custom care instructions provided"
    },
    inventory: {
      inStock: false,
      quantity: 0,
      stockStatus: "pre-order",
      leadTime: "Ships within 3 weeks. Holidays may affect this time"
    },
    features: [
      "Fully customizable design",
      "Choice of metals and gemstones",
      "Handcrafted by artisans",
      "Personal consultation included",
      "Unique one-of-a-kind piece",
      "Custom sizing and engraving"
    ],
    tags: ["rings", "custom", "bespoke", "handcrafted", "unique", "personalized"],
    badges: {
      isNew: false,
      isBestseller: false,
      isLimitedEdition: false,
      isCustomizable: false
    },
    seo: {
      title: "Bespoke Custom Ring - Handcrafted Personalized Jewelry | Parisa London",
      description: "Create your dream ring with our Bespoke Custom Ring service. Fully personalized design with choice of metals and gemstones. 8-12 week lead time.",
      keywords: ["custom ring", "bespoke jewelry", "personalized ring", "handcrafted ring", "custom design"]
    },
    shipping: {
      freeShipping: true,
      weight: 0,
      dimensions: {
        length: 0,
        width: 0,
        height: 0
      }
    },
    relatedProducts: ["bespoke-002", "bespoke-003"],
    createdAt: "2024-01-28T10:00:00Z",
    updatedAt: "2024-01-28T14:30:00Z"
  },
  {
    id: "bespoke-002",
    sku: "BES-NECK-002",
    name: "Riviera Blue Sapphire and Diamond Ring",
    slug: "riviera-blue-sapphire-diamond-ring",
    description: {
      short: "Signature ring designed exclusively for you",
      long: "Make a statement with our Bespoke Signature Ring. This exclusive piece is designed specifically for your style and personality, incorporating meaningful symbols, birthstones, or elements that represent your journey. Our design team works with you to create a ring that becomes your signature piece - a reflection of who you are and what matters most to you."
    },
    price: {
      current: 1200,
      original: 1500,
      currency: "GBP",
      formatted: "£1,200"
    },
    category: "rings",
    collection: "bespoke",
    images: {
      main: bespoke26,
      gallery: [
        bespoke26b,
        bespoke26a
      ],
      thumbnail: bespoke26a
    },
    specifications: {
      metalType: "Custom (Gold, Platinum, Silver)",
      metalColor: "Custom Choice",
      stoneType: "Custom Gemstones",
      dimensions: {
        width: "Custom",
        height: "Custom",
        weight: "Custom"
      },
      care: "Custom care instructions provided"
    },
    inventory: {
      inStock: false,
      quantity: 0,
      stockStatus: "pre-order",
      leadTime: "Ships within 3 weeks. Holidays may affect this time"
    },
    features: [
      "Signature design process",
      "Personal consultation",
      "Custom metal and stone selection",
      "Meaningful symbolism incorporated",
      "One-of-a-kind creation",
      "Premium craftsmanship"
    ],
    tags: ["necklaces", "signature", "bespoke", "custom", "personalized", "premium"],
    badges: {
      isNew: false,
      isLimitedEdition: false,
      isBestseller: false,
      isCustomizable: false
    },
    seo: {
      title: "Bespoke Signature Necklace - Custom Personalized Jewelry | Parisa London",
      description: "Create your signature necklace with our Bespoke service. Custom design with personal consultation. 10-14 week lead time.",
      keywords: ["signature necklace", "custom necklace", "bespoke jewelry", "personalized necklace", "custom design"]
    },
    shipping: {
      freeShipping: true,
      weight: 0,
      dimensions: {
        length: 0,
        width: 0,
        height: 0
      }
    },
    relatedProducts: ["bespoke-001", "bespoke-003"],
    createdAt: "2024-01-28T11:00:00Z",
    updatedAt: "2024-01-28T15:45:00Z"
  },
  {
    id: "bespoke-018",
    sku: "BES-RING-018",
    name: "Emerald Cut Engagement Ring",
    slug: "emerald-cut-engagement-ring",
    description: {
      short: "Sophisticated emerald cut diamond engagement ring in 18K yellow gold",
      long: "Experience the ultimate in sophistication with our Emerald Cut Engagement Ring. This exquisite piece features a magnificent emerald-cut diamond centerpiece set in luxurious 18K yellow gold. The emerald cut showcases the diamond's clarity and brilliance with its clean lines and geometric facets, creating a timeless and elegant piece. Perfect for those who appreciate the classic beauty of emerald-cut diamonds and want to make a statement with their jewelry."
    },
    price: {
      current: 0,
      currency: "GBP",
      formatted: "Price upon request"
    },
    category: "rings",
    collection: "bespoke",
    images: {
      main: kaleidoscope23,
      gallery: [
        kaleidoscope23b,
        kaleidoscope23a
      ],
      thumbnail: kaleidoscope23b
    },
    specifications: {
      metalType: "18K Yellow Gold",
      metalColor: "Yellow Gold",
      stoneType: "Emerald Cut Diamond",
      dimensions: {
        width: "50mm",
        height: "35mm",
        weight: "32.1g"
      },
      care: "Clean with soft cloth and mild soap, avoid harsh chemicals"
    },
    inventory: {
      inStock: true,
      quantity: 1,
      stockStatus: "low-stock",
      leadTime: "Ships within 3 weeks. Holidays may affect this time"
    },
    features: [
      "18K yellow gold construction",
      "Emerald-cut diamond centerpiece",
      "Sophisticated geometric design",
      "Ultimate luxury",
      "Timeless elegance"
    ],
    tags: ["rings", "yellow-gold", "diamond", "emerald-cut", "luxury", "sophisticated", "engagement"],
    badges: {
      isNew: false,
      isBestseller: false,
      isLimitedEdition: false,
      isCustomizable: false
    },
    seo: {
      title: "Emerald Cut Engagement Ring - 18K Yellow Gold | Parisa London",
      description: "Experience sophistication with our Emerald Cut Engagement Ring. 18K yellow gold with emerald-cut diamond. Free UK shipping.",
      keywords: ["emerald cut diamond", "engagement ring", "yellow gold ring", "luxury ring", "sophisticated jewelry"]
    },
    shipping: {
      freeShipping: true,
      weight: 32.1,
      dimensions: {
        length: 6,
        width: 5,
        height: 3
      }
    },
    relatedProducts: ["bespoke-001", "bespoke-002", "bespoke-003"],
    createdAt: "2024-01-25T22:00:00Z",
    updatedAt: "2024-01-25T23:00:00Z"
  },
  {
    id: "bespoke-003",
    sku: "BES-EARR-003",
    name: "Riviera Blue Sapphire and Diamonds Drop Earrings",
    slug: "riviera-blue-sapphire-diamonds-drop-earrings",
    description: {
      short: "Earrings blending tradition and personal style",
      long: "Blend your style with modern elegance through our Bespoke Earrings. These custom pieces incorporate traditional motifs, family symbols, or cultural elements that are meaningful to you, reimagined in contemporary designs. Whether drawing from your family's cultural background or creating new traditions, these earrings become a bridge between past and present."
    },
    price: {
      current: 650,
      original: 850,
      currency: "GBP",
      formatted: "£650"
    },
    category: "earrings",
    collection: "bespoke",
    images: {
      main: bespoke27,
      gallery: [
        bespoke27b,
        bespoke27a
      ],
      thumbnail: bespoke27b
    },
    specifications: {
      metalType: "Custom Precious Metals",
      metalColor: "Custom Choice",
      stoneType: "Custom Gemstones",
      dimensions: {
        width: "Custom",
        height: "Custom",
        weight: "Custom"
      },
      care: "Custom care instructions provided"
    },
    inventory: {
      inStock: false,
      quantity: 0,
      stockStatus: "pre-order",
      leadTime: "Ships within 3 weeks. Holidays may affect this time"
    },
    features: [
      "Heritage-inspired design",
      "Cultural symbolism incorporated",
      "Custom metal and stone selection",
      "Personal consultation process",
      "Unique family heirloom",
      "Blending tradition and modernity"
    ],
    tags: ["earrings", "heritage", "bespoke", "custom", "cultural", "traditional"],
    badges: {
      isNew: false,
      isLimitedEdition: false,
      isBestseller: false,
      isCustomizable: false
    },
    seo: {
      title: "Bespoke Heritage Earrings - Custom Cultural Jewelry | Parisa London",
      description: "Create heritage-inspired earrings with our Bespoke service. Custom design blending tradition and modern style. 6-10 week lead time.",
      keywords: ["heritage earrings", "cultural jewelry", "custom earrings", "bespoke jewelry", "traditional design"]
    },
    shipping: {
      freeShipping: true,
      weight: 0,
      dimensions: {
        length: 0,
        width: 0,
        height: 0
      }
    },
    relatedProducts: ["bespoke-001", "bespoke-002"],
    createdAt: "2024-01-28T12:00:00Z",
    updatedAt: "2024-01-28T16:30:00Z"
  },
  {
    id: "bespoke-004",
    sku: "BES-EARR-004",
    name: "Sapphire and Diamond Studs",
    slug: "sapphire-diamond-studs",
    description: {
      short: "Elegant sapphire earrings in 18K white gold with diamonds",
      long: "Illuminate your style with our Sapphires Earrings. These stunning pieces feature brilliant sapphires set in luxurious 18K white gold, accented with sparkling diamonds that enhance the sapphires' natural beauty. The geometric design creates a modern interpretation of classic elegance, while the sapphires' deep blue color adds a touch of sophistication to any ensemble. Perfect for those who want to add vibrant color and timeless beauty to their jewelry collection."
    },
    price: {
      current: 2450,
      currency: "GBP",
      formatted: "£2,450"
    },
    category: "earrings",
    collection: "bespoke",
    images: {
      main: kaleidoscope5,
      gallery: [
        kaleidoscope5a,
        kaleidoscope5b
      ],
      thumbnail: kaleidoscope5a
    },
    specifications: {
      metalType: "18K White Gold",
      metalColor: "White Gold",
      stoneType: "Sapphires & Diamonds",
      dimensions: {
        width: "14mm",
        height: "28mm",
        weight: "8.5g"
      },
      care: "Clean with soft cloth and mild soap, avoid harsh chemicals"
    },
    inventory: {
      inStock: true,
      quantity: 4,
      stockStatus: "in-stock",
      leadTime: "Ships within 3 weeks. Holidays may affect this time"
    },
    features: [
      "18K white gold construction",
      "Sapphire gemstones",
      "Diamond accents",
      "Sophisticated geometric design",
      "Secure post backing",
      "Timeless elegance"
    ],
    tags: ["earrings", "white-gold", "sapphires", "diamonds", "sophisticated", "elegant"],
    badges: {
      isNew: false,
      isBestseller: false,
      isLimitedEdition: false,
      isCustomizable: false
    },
    seo: {
      title: "Sapphires Earrings - 18K White Gold Diamonds | Parisa London",
      description: "Illuminate your style with our Sapphires Earrings. 18K white gold with sapphires and diamonds. Free UK shipping.",
      keywords: ["sapphire earrings", "white gold earrings", "diamond earrings", "sophisticated jewelry", "elegant earrings"]
    },
    shipping: {
      freeShipping: true,
      weight: 8.5,
      dimensions: {
        length: 4,
        width: 3,
        height: 1
      }
    },
    relatedProducts: ["bespoke-001", "bespoke-002"],
    createdAt: "2024-01-26T10:00:00Z",
    updatedAt: "2024-01-28T17:00:00Z"
  },
  {
    id: "bespoke-005",
    sku: "BES-NECK-005",
    name: "Riviera Emerald Necklace with Blue Sapphire and Diamond",
    slug: "riviera-emerald-necklace-blue-sapphire-diamond",
    description: {
      short: "Exquisite emerald necklace with blue sapphire and diamond accents",
      long: "Discover the captivating beauty of our Riviera Emerald Necklace. This stunning piece features vibrant emeralds complemented by deep blue sapphires and brilliant diamonds, all masterfully set in precious metal. The harmonious blend of these three precious gemstones creates a breathtaking display of color and light, making this necklace a true statement piece for any occasion."
    },
    price: {
      current: 0,
      currency: "GBP",
      formatted: "Price upon request"
    },
    category: "necklaces",
    collection: "bespoke",
    images: {
      main: bespoke28,
      gallery: [
        bespoke28a,
        bespoke28b
      ],
      thumbnail: bespoke28a
    },
    specifications: {
      metalType: "18K Gold",
      metalColor: "Custom Choice",
      stoneType: "Emerald, Blue Sapphire & Diamonds",
      dimensions: {
        width: "Custom",
        height: "Custom",
        weight: "Custom"
      },
      care: "Clean with soft cloth and mild soap, avoid harsh chemicals"
    },
    inventory: {
      inStock: false,
      quantity: 0,
      stockStatus: "pre-order",
      leadTime: "Ships within 3 weeks. Holidays may affect this time"
    },
    features: [
      "Vibrant emerald gemstones",
      "Blue sapphire accents",
      "Brilliant diamond highlights",
      "Premium craftsmanship",
      "Unique statement piece",
      "Personal consultation included"
    ],
    tags: ["necklaces", "emerald", "sapphire", "diamond", "bespoke", "luxury"],
    badges: {
      isNew: false,
      isBestseller: false,
      isLimitedEdition: false,
      isCustomizable: false
    },
    seo: {
      title: "Riviera Emerald Necklace with Blue Sapphire and Diamond | Parisa London",
      description: "Discover our Riviera Emerald Necklace featuring emeralds, blue sapphires and diamonds. Price upon request. Free UK shipping.",
      keywords: ["emerald necklace", "sapphire necklace", "diamond necklace", "luxury jewelry", "bespoke necklace"]
    },
    shipping: {
      freeShipping: true,
      weight: 0,
      dimensions: {
        length: 0,
        width: 0,
        height: 0
      }
    },
    relatedProducts: ["bespoke-001", "bespoke-002", "bespoke-003"],
    createdAt: "2024-12-01T10:00:00Z",
    updatedAt: "2024-12-01T10:00:00Z"
  },
  {
    id: "bespoke-006",
    sku: "BES-NECK-006",
    name: "Diamond Riviera Necklace",
    slug: "diamond-riviera-necklace",
    description: {
      short: "Exquisite Diamond Riviera necklace",
      long: "Experience timeless elegance with our Diamond Riviera Necklace. This stunning piece features a continuous line of brilliant diamonds, each meticulously selected for their exceptional quality and fire. Set in precious metal, this classic Riviera design creates an unbroken flow of light and sparkle that gracefully adorns the neckline. A true statement of luxury and sophistication, perfect for special occasions or as a cherished heirloom piece."
    },
    price: {
      current: 0,
      currency: "GBP",
      formatted: "Price upon request"
    },
    category: "necklaces",
    collection: "bespoke",
    images: {
      main: bespoke29,
      gallery: [
        bespoke29a,
        bespoke29b
      ],
      thumbnail: bespoke29a
    },
    specifications: {
      metalType: "18K Gold",
      metalColor: "Custom Choice",
      stoneType: "Diamonds",
      dimensions: {
        width: "Custom",
        height: "Custom",
        weight: "Custom"
      },
      care: "Clean with soft cloth and mild soap, avoid harsh chemicals"
    },
    inventory: {
      inStock: false,
      quantity: 0,
      stockStatus: "pre-order",
      leadTime: "Ships within 3 weeks. Holidays may affect this time"
    },
    features: [
      "Brilliant diamond design",
      "Classic Riviera style",
      "Premium craftsmanship",
      "Exceptional diamond quality",
      "Unique statement piece",
      "Personal consultation included"
    ],
    tags: ["necklaces", "diamond", "riviera", "bespoke", "luxury"],
    badges: {
      isNew: false,
      isBestseller: false,
      isLimitedEdition: false,
      isCustomizable: false
    },
    seo: {
      title: "Diamond Riviera Necklace | Parisa London",
      description: "Discover our exquisite Diamond Riviera Necklace featuring brilliant diamonds. Price upon request. Free UK shipping.",
      keywords: ["diamond necklace", "riviera necklace", "luxury jewelry", "bespoke necklace", "diamond jewelry"]
    },
    shipping: {
      freeShipping: true,
      weight: 0,
      dimensions: {
        length: 0,
        width: 0,
        height: 0
      }
    },
    relatedProducts: ["bespoke-001", "bespoke-002", "bespoke-005"],
    createdAt: "2024-12-03T10:00:00Z",
    updatedAt: "2024-12-03T10:00:00Z"
  }
];

// Sort products by category for proper grouping on the shop page
const categoryOrder = ['necklaces', 'earrings', 'rings', 'bracelets'];
const sortedBespokeProducts = [...bespokeProducts].sort((a, b) => {
  const aIndex = categoryOrder.indexOf(a.category);
  const bIndex = categoryOrder.indexOf(b.category);
  return aIndex - bIndex;
});

export function getBespokeProductById(id: string): Product | undefined {
  return sortedBespokeProducts.find(product => product.id === id);
}

export function getAllBespokeProducts(): Product[] {
  return sortedBespokeProducts;
}
