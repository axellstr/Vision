import type { Product } from '../types';

// Import talisman images
import talisman0 from '../../assets/images/talisman/Talisman_0.jpg';
import talisman1 from '../../assets/images/talisman/Talisman_1.jpg';
import talisman1a from '../../assets/images/talisman/Talisman_01.jpg';
import talisman2 from '../../assets/images/talisman/Talisman_2.jpg';  
import talisman3 from '../../assets/images/talisman/Talisman_3.jpg';
import talisman3a from '../../assets/images/talisman/Talisman_03.jpg';
import talisman4 from '../../assets/images/talisman/Talisman_4.jpg';
import talisman4a from '../../assets/images/talisman/Talisman_04.jpg';
import talisman4b from '../../assets/images/talisman/Talisman_04a.png';
import talisman4c from '../../assets/images/talisman/Talisman_04c.png';
import talisman5 from '../../assets/images/talisman/Talisman_5.jpg';
import talisman5a from '../../assets/images/talisman/Talisman_5a.png';
import talisman5b from '../../assets/images/talisman/Talisman_5b.jpg';
import talisman6 from '../../assets/images/talisman/Talisman_6.jpg';
import talisman6a from '../../assets/images/talisman/Talisman_6a.png';
import talisman6b from '../../assets/images/talisman/Talisman_6b.jpg';
import talisman7 from '../../assets/images/talisman/Talisman_7.jpg';
import talisman7a from '../../assets/images/talisman/Talisman_7a.png';
import talisman7b from '../../assets/images/talisman/Talisman_7b.png';
import talisman8 from '../../assets/images/talisman/Talisman_8.jpg';
import talisman8a from '../../assets/images/talisman/Talisman_8a.png';
import talisman8b from '../../assets/images/talisman/Talisman_8b.png';
import talisman9 from '../../assets/images/talisman/Talisman_9.jpg';
import talisman9a from '../../assets/images/talisman/Talisman_9a.png';
import talisman9b from '../../assets/images/talisman/Talisman_9b.png';
import talisman10 from '../../assets/images/talisman/Talisman_10.jpg';
import talisman10a from '../../assets/images/talisman/Talisman_10a.png';
import talisman10b from '../../assets/images/talisman/Talisman_10b.png';

export const talismanProducts: Product[] = [
  {
    id: "talisman-001",
    sku: "TAL-RING-001",
    name: "Talisman Calligraphy Ring",
    slug: "talisman-calligraphy-ring",
    description: {
      short: "Elegant calligraphy-inspired ring with 0.32cts diamonds and mystical engravings",
      long: "This exquisite piece from our Talisman collection features intricate calligraphy-inspired engravings that tell a story of ancient wisdom and modern elegance. Handcrafted with precision in 18K yellow and white gold, adorned with 0.32cts diamonds, each curve and line represents the harmony between tradition and contemporary design. The mystical symbols are carefully etched to create a meaningful piece that connects the wearer to centuries of spiritual tradition."
    },
    price: {
      current: 4850,
      currency: "GBP",
      formatted: "£4,850"
    },
    category: "rings",
    collection: "talisman",
    images: {
      main: talisman1,
      gallery: [
        talisman0,
        talisman2,
        talisman1a
      ],
      thumbnail: talisman1
    },
    specifications: {
      metalType: "18K Yellow and White Gold",
      metalColor: "Yellow Gold",
      dimensions: {
        width: "2.7mm",
        height: "2mm",
        weight: "8.5g"
      },
      stoneType: "Diamonds 0.32cts",
      care: "Clean with soft cloth, avoid harsh chemicals"
    },
    inventory: {
      inStock: true,
      quantity: 5,
      stockStatus: "in-stock",
      leadTime: "Ships within 3 weeks. Holidays may affect this time"
    },
    features: [
      "Handcrafted calligraphy engravings",
      "18K yellow and white gold construction",
      "Diamonds 0.32cts",
      "2.7mm band width",
      "Comfortable everyday wear",
      "Unique mystical symbols",
      "Made to order available"
    ],
    tags: ["rings", "gold", "calligraphy", "mystical", "handcrafted"],
    badges: {
      isNew: false,
      isBestseller: false,
      isCustomizable: false
    },
    seo: {
      title: "Talisman Calligraphy Ring - 18K Gold with Diamonds 0.32cts | Parisa London",
      description: "Discover the mystical beauty of our Talisman Calligraphy Ring. Handcrafted in 18K yellow and white gold with 0.32cts diamonds and intricate engravings. Free UK shipping.",
      keywords: ["talisman ring", "calligraphy jewelry", "18k gold ring", "mystical jewelry", "diamond ring"]
    },
    shipping: {
      freeShipping: true,
      weight: 8.5,
      dimensions: {
        length: 5,
        width: 5,
        height: 2
      }
    },
    relatedProducts: ["talisman-003"],
    createdAt: "2024-01-15T10:00:00Z",
    updatedAt: "2024-01-20T14:30:00Z"
  },
  {
    id: "talisman-002",
    sku: "TAL-RING-002",
    name: "Talisman Ring",
    slug: "talisman-ring",
    description: {
      short: "Elegant 18K white gold ring with 0.21cts premium diamonds",
      long: "This stunning Talisman Ring combines the finest 18K white gold craftsmanship with brilliant diamonds (0.21cts). The 2.7mm band features a perfect balance of luxury and sophistication, making it an ideal piece for everyday elegance or special occasions."
    },
    price: {
      current: 3200,
      currency: "GBP",
      formatted: "£3,200"
    },
    category: "rings",
    collection: "talisman",
    images: {
      main: talisman3,
      gallery: [
        talisman2,
        talisman3a
      ],
      thumbnail: talisman3
    },
    specifications: {
      metalType: "18K White Gold",
      metalColor: "White Gold",
      dimensions: {
        width: "2.7mm",
        height: "2mm",
        weight: "6.2g"
      },
      stoneType: "Diamonds 0.21cts",
      care: "Clean with soft cloth, avoid harsh chemicals"
    },
    inventory: {
      inStock: true,
      quantity: 8,
      stockStatus: "in-stock",
      leadTime: "Ships within 3 weeks. Holidays may affect this time"
    },
    features: [
      "Premium diamond setting (0.21cts)",
      "18K white gold construction",
      "2.7mm comfortable band width",
      "Luxury elegant design",
      "Perfect for everyday wear"
    ],
    tags: ["rings", "gold", "diamonds", "luxury", "white gold"],
    badges: {
      isNew: false,
      isBestseller: false,
      isCustomizable: false
    },
    seo: {
      title: "Talisman Ring - 18K White Gold with Diamonds 0.21cts | Parisa London",
      description: "Discover luxury with our Talisman Ring featuring 18K white gold with premium diamonds (0.21cts). 2.7mm band width. Free UK shipping.",
      keywords: ["talisman ring", "diamond ring", "18k white gold ring", "luxury jewelry"]
    },
    shipping: {
      freeShipping: true,
      weight: 6.2,
      dimensions: {
        length: 4,
        width: 4,
        height: 2
      }
    },
    relatedProducts: ["talisman-001"],
    createdAt: "2024-01-25T10:00:00Z",
    updatedAt: "2024-01-25T10:00:00Z"
  },
  {
    id: "talisman-003",
    sku: "TAL-RING-003",
    name: "Talisman Ring",
    slug: "talisman-ring-white-gold",
    description: {
      short: "Elegant 18K white gold ring with 0.21cts brilliant diamonds",
      long: "This sophisticated Talisman Ring showcases the finest 18K white gold craftsmanship with stunning diamond settings (0.21cts). The 2.7mm band offers a perfect balance of luxury and refined elegance, ideal for those who appreciate minimalist sophistication."
    },
    price: {
      current: 3200,
      currency: "GBP",
      formatted: "£3,200"
    },
    category: "rings",
    collection: "talisman",
    images: {
      main: talisman4,
      gallery: [
        talisman4c,
        talisman4b,
        talisman4a
      ],
      thumbnail: talisman4
    },
    specifications: {
      metalType: "18K White Gold",
      metalColor: "White Gold",
      dimensions: {
        width: "2.7mm",
        height: "2mm",
        weight: "5.8g"
      },
      stoneType: "Diamonds 0.21cts",
      care: "Clean with soft cloth, avoid harsh chemicals"
    },
    inventory: {
      inStock: true,
      quantity: 12,
      stockStatus: "in-stock",
      leadTime: "Ships within 3 weeks. Holidays may affect this time"
    },
    features: [
      "Premium diamond settings (0.21cts)",
      "18K white gold construction",
      "2.7mm comfortable band width",
      "Minimalist sophisticated design",
      "Perfect for everyday luxury"
    ],
    tags: ["rings", "white gold", "diamond", "minimalist", "luxury"],
    badges: {
      isNew: false,
      isBestseller: false,
      isCustomizable: false
    },
    seo: {
      title: "Talisman Ring - 18K White Gold with Diamonds 0.21cts | Parisa London",
      description: "Discover refined elegance with our Talisman Ring featuring 18K white gold with brilliant diamonds (0.21cts). 2.7mm band width. Free UK shipping.",
      keywords: ["talisman ring", "white gold ring", "diamond ring", "minimalist jewelry"]
    },
    shipping: {
      freeShipping: true,
      weight: 5.8,
      dimensions: {
        length: 4,
        width: 4,
        height: 2
      }
    },
    relatedProducts: ["talisman-001", "talisman-002"],
    createdAt: "2024-01-26T10:00:00Z",
    updatedAt: "2024-01-26T10:00:00Z"
  },
  {
    id: "talisman-004",
    sku: "TAL-NECK-001",
    name: "Talisman Necklace",
    slug: "talisman-necklace-diamonds",
    description: {
      short: "Elegant 18K yellow and white gold necklace with 0.56cts diamonds",
      long: "This exquisite Talisman Necklace features a delicate 5mm chain crafted from 18K yellow and white gold, adorned with brilliant diamonds (0.56cts). The perfect balance of luxury and sophistication, this piece combines ancient talisman symbolism with modern elegance."
    },
    price: {
      current: 11800,
      currency: "GBP",
      formatted: "£11,800"
    },
    category: "necklaces",
    collection: "talisman",
    images: {
      main: talisman8,
      gallery: [
        talisman8a,
        talisman8b
      ],
      thumbnail: talisman8
    },
    specifications: {
      metalType: "18K Yellow and White Gold",
      metalColor: "Two-Tone Gold",
      dimensions: {
        width: "5mm",
        height: "45cm",
        weight: "12.5g"
      },
      stoneType: "Diamonds 0.56cts",
      care: "Clean with soft cloth, avoid harsh chemicals"
    },
    inventory: {
      inStock: true,
      quantity: 6,
      stockStatus: "in-stock",
      leadTime: "Ships within 3 weeks. Holidays may affect this time"
    },
    features: [
      "Premium diamond settings (0.56cts)",
      "18K two-tone gold construction",
      "5mm chain width",
      "45cm necklace length",
      "Ancient talisman symbolism",
      "Luxury everyday wear"
    ],
    tags: ["necklaces", "gold", "diamonds", "talisman", "two-tone"],
    badges: {
      isNew: false,
      isBestseller: false,
      isCustomizable: false
    },
    seo: {
      title: "Talisman Necklace - 18K Gold with Diamonds | Parisa London",
      description: "Discover mystical elegance with our Talisman Necklace featuring 18K yellow and white gold with premium diamonds. 6mm chain width. Free UK shipping.",
      keywords: ["talisman necklace", "diamond necklace", "18k gold necklace", "mystical jewelry"]
    },
    shipping: {
      freeShipping: true,
      weight: 12.5,
      dimensions: {
        length: 8,
        width: 6,
        height: 3
      }
    },
    relatedProducts: ["talisman-001", "talisman-002", "talisman-003"],
    createdAt: "2024-01-27T10:00:00Z",
    updatedAt: "2024-01-27T10:00:00Z"
  },
  {
    id: "talisman-005",
    sku: "TAL-NECK-002",
    name: "Talisman Necklace",
    slug: "talisman-necklace-rubies",
    description: {
      short: "Elegant 18KT yellow gold necklace with 0.78cts vibrant rubies",
      long: "This stunning Talisman Necklace showcases the finest 18KT yellow gold craftsmanship with brilliant ruby settings (0.78cts). The 6mm chain width and rich red rubies create a perfect harmony of luxury and passion, embodying the mystical energy of ancient talismans."
    },
    price: {
      current: 9850,
      currency: "GBP",
      formatted: "£9,850"
    },
    category: "necklaces",
    collection: "talisman",
    images: {
      main: talisman7,
      gallery: [
        talisman7a,
        talisman7b
      ],
      thumbnail: talisman7
    },
    specifications: {
      metalType: "18KT Yellow Gold",
      metalColor: "Yellow Gold",
      dimensions: {
        width: "6mm",
        height: "45cm",
        weight: "11.8g"
      },
      stoneType: "Rubies 0.78cts",
      care: "Clean with soft cloth, avoid harsh chemicals"
    },
    inventory: {
      inStock: true,
      quantity: 4,
      stockStatus: "low-stock",
      leadTime: "Ships within 3 weeks. Holidays may affect this time"
    },
    features: [
      "Premium ruby settings (0.78cts)",
      "18KT yellow gold construction",
      "6mm chain width",
      "45cm necklace length",
      "Vibrant red gemstones",
      "Passionate mystical energy"
    ],
    tags: ["necklaces", "yellow gold", "rubies", "talisman", "gemstone"],
    badges: {
      isNew: false,
      isBestseller: false,
      isCustomizable: false
    },
    seo: {
      title: "Talisman Necklace - 18KT Yellow Gold with Rubies 0.78cts | Parisa London",
      description: "Embrace passion with our Talisman Necklace featuring 18KT yellow gold with vibrant rubies (0.78cts). 6mm chain width. Free UK shipping.",
      keywords: ["talisman necklace", "ruby necklace", "yellow gold necklace", "gemstone jewelry"]
    },
    shipping: {
      freeShipping: true,
      weight: 11.8,
      dimensions: {
        length: 8,
        width: 6,
        height: 3
      }
    },
    relatedProducts: ["talisman-001", "talisman-002", "talisman-003", "talisman-004"],
    createdAt: "2024-01-28T10:00:00Z",
    updatedAt: "2024-01-28T10:00:00Z"
  },
  {
    id: "talisman-006",
    sku: "TAL-EAR-001",
    name: "Talisman Earrings",
    slug: "talisman-earrings-two-tone-diamonds",
    description: {
      short: "Elegant 18K yellow and white gold earrings with 0.74cts premium diamonds",
      long: "These exquisite Talisman Earrings feature a delicate 3.5mm design crafted from 18K yellow and white gold, adorned with brilliant diamonds (0.74cts). The perfect fusion of ancient mysticism and contemporary luxury, these earrings capture the essence of talisman energy in wearable art."
    },
    price: {
      current: 12780,
      currency: "GBP",
      formatted: "£12,780"
    },
    category: "earrings",
    collection: "talisman",
    images: {
      main: talisman5,
      gallery: [
        talisman5a,
        talisman5b
      ],
      thumbnail: talisman5
    },
    specifications: {
      metalType: "18K Yellow and White Gold",
      metalColor: "Two-Tone Gold",
      dimensions: {
        width: "3.5mm",
        height: "15mm",
        weight: "4.2g"
      },
      stoneType: "Diamonds 0.74cts",
      care: "Clean with soft cloth, avoid harsh chemicals"
    },
    inventory: {
      inStock: true,
      quantity: 8,
      stockStatus: "in-stock",
      leadTime: "Ships within 3 weeks. Holidays may affect this time"
    },
    features: [
      "Premium diamond settings (0.74cts)",
      "18K two-tone gold construction",
      "3.5mm delicate width",
      "15mm drop length",
      "Mystical talisman design",
      "Comfortable for everyday wear"
    ],
    tags: ["earrings", "gold", "diamonds", "talisman", "two-tone"],
    badges: {
      isNew: false,
      isBestseller: false,
      isCustomizable: false
    },
    seo: {
      title: "Talisman Earrings - 18K Two-Tone Gold with Diamonds 0.74cts | Parisa London",
      description: "Discover mystical elegance with our Talisman Earrings featuring 18K yellow and white gold with premium diamonds (0.74cts). 3.5mm width. Free UK shipping.",
      keywords: ["talisman earrings", "diamond earrings", "two-tone gold earrings", "mystical jewelry"]
    },
    shipping: {
      freeShipping: true,
      weight: 4.2,
      dimensions: {
        length: 6,
        width: 4,
        height: 2
      }
    },
    relatedProducts: ["talisman-001", "talisman-002", "talisman-003", "talisman-004", "talisman-005"],
    createdAt: "2024-01-29T10:00:00Z",
    updatedAt: "2024-01-29T10:00:00Z"
  },
  {
    id: "talisman-007",
    sku: "TAL-EAR-002",
    name: "Talisman Earrings",
    slug: "talisman-earrings-yellow-gold-rubies",
    description: {
      short: "Elegant 18K yellow gold earrings with 0.48cts vibrant rubies",
      long: "These stunning Talisman Earrings showcase the finest 18K yellow gold craftsmanship with brilliant ruby settings (0.48cts). The 3.5mm design captures the passionate energy of ancient talismans, creating a perfect harmony of luxury and mystical symbolism."
    },
    price: {
      current: 9450,
      currency: "GBP",
      formatted: "£9,450"
    },
    category: "earrings",
    collection: "talisman",
    images: {
      main: talisman6,
      gallery: [
        talisman6a,
        talisman6b
      ],
      thumbnail: talisman6
    },
    specifications: {
      metalType: "18K Yellow Gold",
      metalColor: "Yellow Gold",
      dimensions: {
        width: "3.5mm",
        height: "15mm",
        weight: "3.8g"
      },
      stoneType: "Rubies 0.48cts",
      care: "Clean with soft cloth, avoid harsh chemicals"
    },
    inventory: {
      inStock: true,
      quantity: 6,
      stockStatus: "in-stock",
      leadTime: "Ships within 3 weeks. Holidays may affect this time"
    },
    features: [
      "Premium ruby settings (0.48cts)",
      "18K yellow gold construction",
      "3.5mm delicate width",
      "15mm drop length",
      "Passionate red gemstones",
      "Mystical talisman energy"
    ],
    tags: ["earrings", "yellow gold", "rubies", "talisman", "gemstone"],
    badges: {
      isNew: false,
      isBestseller: false,
      isCustomizable: false
    },
    seo: {
      title: "Talisman Earrings - 18K Yellow Gold with Rubies 0.48cts | Parisa London",
      description: "Embrace passion with our Talisman Earrings featuring 18K yellow gold with vibrant rubies (0.48cts). 3.5mm width. Free UK shipping.",
      keywords: ["talisman earrings", "ruby earrings", "yellow gold earrings", "gemstone jewelry"]
    },
    shipping: {
      freeShipping: true,
      weight: 3.8,
      dimensions: {
        length: 6,
        width: 4,
        height: 2
      }
    },
    relatedProducts: ["talisman-001", "talisman-002", "talisman-003", "talisman-004", "talisman-005", "talisman-006"],
    createdAt: "2024-01-30T10:00:00Z",
    updatedAt: "2024-01-30T10:00:00Z"
  },
  {
    id: "talisman-008",
    sku: "TAL-EAR-003",
    name: "Talisman Earrings",
    slug: "talisman-earrings-white-gold-diamonds",
    description: {
      short: "Elegant 18K white-yellow gold earrings with 0.19cts brilliant diamonds",
      long: "These sophisticated Talisman Earrings feature the finest 18K white-yellow gold craftsmanship with stunning diamond settings (0.19cts). The 3.5mm minimalist design embodies refined elegance and ancient mystical wisdom, perfect for those who appreciate subtle luxury."
    },
    price: {
      current: 6500,
      currency: "GBP",
      formatted: "£6,500"
    },
    category: "earrings",
    collection: "talisman",
    images: {
      main: talisman9,
      gallery: [
        talisman9a,
        talisman9b
      ],
      thumbnail: talisman9
    },
    specifications: {
      metalType: "18K White-Yellow Gold",
      metalColor: "White-Yellow Gold",
      dimensions: {
        width: "3.5mm",
        height: "15mm",
        weight: "3.9g"
      },
      stoneType: "Diamonds 0.19cts",
      care: "Clean with soft cloth, avoid harsh chemicals"
    },
    inventory: {
      inStock: true,
      quantity: 10,
      stockStatus: "in-stock",
      leadTime: "Ships within 3 weeks. Holidays may affect this time"
    },
    features: [
      "Premium diamond settings (0.19cts)",
      "18K white-yellow gold construction",
      "3.5mm delicate width",
      "15mm drop length",
      "Minimalist sophisticated design",
      "Ancient talisman wisdom"
    ],
    tags: ["earrings", "white gold", "diamonds", "talisman", "minimalist"],
    badges: {
      isNew: false,
      isBestseller: false,
      isCustomizable: false
    },
    seo: {
      title: "Talisman Earrings - 18K White-Yellow Gold with Diamonds 0.19cts | Parisa London",
      description: "Discover refined elegance with our Talisman Earrings featuring 18K white-yellow gold with brilliant diamonds (0.19cts). 3.5mm width. Free UK shipping.",
      keywords: ["talisman earrings", "white gold earrings", "diamond earrings", "minimalist jewelry"]
    },
    shipping: {
      freeShipping: true,
      weight: 3.9,
      dimensions: {
        length: 6,
        width: 4,
        height: 2
      }
    },
    relatedProducts: ["talisman-001", "talisman-002", "talisman-003", "talisman-004", "talisman-005", "talisman-006", "talisman-007"],
    createdAt: "2024-01-31T10:00:00Z",
    updatedAt: "2024-01-31T10:00:00Z"
  },
  {
    id: "talisman-009",
    sku: "TAL-BRAC-001",
    name: "Talisman Bracelet",
    slug: "talisman-bracelet-diamond-ruby",
    description: {
      short: "Elegant 18K yellow-white gold bracelet with diamonds and rubies",
      long: "This exquisite Talisman Bracelet combines the finest 18K yellow-white gold craftsmanship with brilliant diamonds and vibrant rubies. The delicate 2mm chain width creates a perfect balance of luxury and mystical symbolism, featuring both precious gemstones in harmonious talisman design."
    },
    price: {
      current: 2500,
      currency: "GBP",
      formatted: "£2,500"
    },
    category: "bracelets",
    collection: "talisman",
    images: {
      main: talisman10,
      gallery: [
        talisman10a,
        talisman10b
      ],
      thumbnail: talisman10
    },
    specifications: {
      metalType: "18K Yellow-White Gold",
      metalColor: "Two-Tone Gold",
      dimensions: {
        width: "2mm",
        height: "18cm",
        weight: "8.5g"
      },
      stoneType: "Premium diamonds and rubies set in 18K gold",
      care: "Clean with soft cloth, avoid harsh chemicals"
    },
    inventory: {
      inStock: true,
      quantity: 5,
      stockStatus: "low-stock",
      leadTime: "Ships within 3 weeks. Holidays may affect this time"
    },
    features: [
      "Premium diamond and ruby settings",
      "18K yellow-white gold construction",
      "2mm delicate chain width",
      "18cm bracelet length",
      "Dual gemstone talisman design",
      "Luxury mystical symbolism"
    ],
    tags: ["bracelets", "gold", "diamonds", "rubies", "talisman", "two-tone"],
    badges: {
      isNew: false,
      isBestseller: false,
      isCustomizable: false
    },
    seo: {
      title: "Talisman Bracelet - 18K Two-Tone Gold with Diamonds & Rubies | Parisa London",
      description: "Discover dual-gemstone elegance with our Talisman Bracelet featuring 18K yellow-white gold with diamonds and rubies. 2mm chain width. Free UK shipping.",
      keywords: ["talisman bracelet", "diamond ruby bracelet", "two-tone gold bracelet", "luxury gemstone jewelry"]
    },
    shipping: {
      freeShipping: true,
      weight: 8.5,
      dimensions: {
        length: 10,
        width: 8,
        height: 3
      }
    },
    relatedProducts: ["talisman-001", "talisman-002", "talisman-003", "talisman-004", "talisman-005", "talisman-006", "talisman-007", "talisman-008"],
    createdAt: "2024-02-01T10:00:00Z",
    updatedAt: "2024-02-01T10:00:00Z"
  },
];

// Sort products by category for proper grouping on the shop page
const categoryOrder = ['necklaces', 'earrings', 'rings', 'bracelets'];
const sortedTalismanProducts = [...talismanProducts].sort((a, b) => {
  const aIndex = categoryOrder.indexOf(a.category);
  const bIndex = categoryOrder.indexOf(b.category);
  return aIndex - bIndex;
});

export function getTalismanProductById(id: string): Product | undefined {
  return sortedTalismanProducts.find(product => product.id === id);
}

export function getAllTalismanProducts(): Product[] {
  return sortedTalismanProducts;
}
