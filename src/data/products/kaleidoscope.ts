import type { Product } from '../types';

// Import kaleidoscope images
import kaleidoscope1 from '../../assets/images/kaleidoscope/1.png';
import kaleidoscope1a from '../../assets/images/kaleidoscope/1a.png';
import kaleidoscope1b from '../../assets/images/kaleidoscope/1b.png';
import kaleidoscope2 from '../../assets/images/kaleidoscope/2.png';
import kaleidoscope2a from '../../assets/images/kaleidoscope/2a.png';
import kaleidoscope2b from '../../assets/images/kaleidoscope/2b.png';
import kaleidoscope3 from '../../assets/images/kaleidoscope/3.png';
import kaleidoscope3a from '../../assets/images/kaleidoscope/3a.png';
import kaleidoscope3b from '../../assets/images/kaleidoscope/3b.png';
import kaleidoscope4 from '../../assets/images/kaleidoscope/4.png';
import kaleidoscope4a from '../../assets/images/kaleidoscope/4a.png';
import kaleidoscope4b from '../../assets/images/kaleidoscope/4b.png';
import kaleidoscope5 from '../../assets/images/kaleidoscope/5.png';
import kaleidoscope6 from '../../assets/images/kaleidoscope/6.png';
import kaleidoscope6a from '../../assets/images/kaleidoscope/6a.png';
import kaleidoscope6b from '../../assets/images/kaleidoscope/6b.png';
import kaleidoscope7 from '../../assets/images/kaleidoscope/7.png';
import kaleidoscope7a from '../../assets/images/kaleidoscope/7a.png';
import kaleidoscope7b from '../../assets/images/kaleidoscope/7b.png';
import kaleidoscope8 from '../../assets/images/kaleidoscope/8.png';
import kaleidoscope8a from '../../assets/images/kaleidoscope/8a.png';
import kaleidoscope8b from '../../assets/images/kaleidoscope/8b.png';
import kaleidoscope8_1 from '../../assets/images/kaleidoscope/8_1.png';
import kaleidoscope8_1a from '../../assets/images/kaleidoscope/8_1a.png';
import kaleidoscope8_1b from '../../assets/images/kaleidoscope/8_1b.png';
import kaleidoscope9 from '../../assets/images/kaleidoscope/9.png';
import kaleidoscope9a from '../../assets/images/kaleidoscope/9a.png';
import kaleidoscope9b from '../../assets/images/kaleidoscope/9b.png';
import kaleidoscope11 from '../../assets/images/kaleidoscope/11.png';
import kaleidoscope11a from '../../assets/images/kaleidoscope/11a.png';
import kaleidoscope11b from '../../assets/images/kaleidoscope/11b.png';
import kaleidoscope12 from '../../assets/images/kaleidoscope/12.png';
import kaleidoscope12a from '../../assets/images/kaleidoscope/12a.png';
import kaleidoscope12b from '../../assets/images/kaleidoscope/12b.png';
import kaleidoscope13 from '../../assets/images/kaleidoscope/13.png';
import kaleidoscope13a from '../../assets/images/kaleidoscope/13a.png';
import kaleidoscope13b from '../../assets/images/kaleidoscope/13b.png';
import kaleidoscope14 from '../../assets/images/kaleidoscope/14.png';
import kaleidoscope14a from '../../assets/images/kaleidoscope/14a.png';
import kaleidoscope14b from '../../assets/images/kaleidoscope/14b.png';
import kaleidoscope15 from '../../assets/images/kaleidoscope/15.png';
import kaleidoscope15a from '../../assets/images/kaleidoscope/15a.png';
import kaleidoscope15b from '../../assets/images/kaleidoscope/15b.png';
import kaleidoscope16 from '../../assets/images/kaleidoscope/16.png';
import kaleidoscope16a from '../../assets/images/kaleidoscope/16a.png';
import kaleidoscope16b from '../../assets/images/kaleidoscope/16b.webp';
import kaleidoscope17 from '../../assets/images/kaleidoscope/17.png';
import kaleidoscope17a from '../../assets/images/kaleidoscope/17a.png';
import kaleidoscope17b from '../../assets/images/kaleidoscope/17b.png';
import kaleidoscope18 from '../../assets/images/kaleidoscope/18.png';
import kaleidoscope18a from '../../assets/images/kaleidoscope/18a.png';
import kaleidoscope18b from '../../assets/images/kaleidoscope/18b.png';
import kaleidoscope19 from '../../assets/images/kaleidoscope/19.png';
import kaleidoscope19a from '../../assets/images/kaleidoscope/19a.png';
import kaleidoscope19b from '../../assets/images/kaleidoscope/19b.png';
import kaleidoscope20 from '../../assets/images/kaleidoscope/20.png';
import kaleidoscope20a from '../../assets/images/kaleidoscope/20a.png';
import kaleidoscope20b from '../../assets/images/kaleidoscope/20b.png';
import kaleidoscope21 from '../../assets/images/kaleidoscope/21.png';
import kaleidoscope21a from '../../assets/images/kaleidoscope/21a.png';
import kaleidoscope21b from '../../assets/images/kaleidoscope/21b.png';
import kaleidoscope22 from '../../assets/images/kaleidoscope/22.png';
import kaleidoscope22a from '../../assets/images/kaleidoscope/22a.png';
import kaleidoscope22b from '../../assets/images/kaleidoscope/22b.png';
import kaleidoscope23 from '../../assets/images/kaleidoscope/23.png';
import kaleidoscope23a from '../../assets/images/kaleidoscope/23a.png';
import kaleidoscope23b from '../../assets/images/kaleidoscope/23b.png';
import kaleidoscope24 from '../../assets/images/kaleidoscope/24.png';
import kaleidoscope24a from '../../assets/images/kaleidoscope/24a.png';
import kaleidoscope24b from '../../assets/images/kaleidoscope/24b.png';
import kaleidoscope25 from '../../assets/images/kaleidoscope/25.jpg';
import kaleidoscope25a from '../../assets/images/kaleidoscope/25a.png';
import kaleidoscope25b from '../../assets/images/kaleidoscope/25b.png';
import kaleidoscope26 from '../../assets/images/kaleidoscope/26.png';
import kaleidoscope26a from '../../assets/images/kaleidoscope/26a.jpg';
import kaleidoscope26b from '../../assets/images/kaleidoscope/26b.png';
import kaleidoscope27 from '../../assets/images/kaleidoscope/27.png';
import kaleidoscope27a from '../../assets/images/kaleidoscope/27a.png';
import kaleidoscope27b from '../../assets/images/kaleidoscope/27b.png';
import kaleidoscope28 from '../../assets/images/kaleidoscope/28.png';
import kaleidoscope28a from '../../assets/images/kaleidoscope/28a.png';
import kaleidoscope28b from '../../assets/images/kaleidoscope/28b.png';
import kaleidoscope29 from '../../assets/images/kaleidoscope/29.png';
import kaleidoscope29a from '../../assets/images/kaleidoscope/29a.png';
import kaleidoscope29b from '../../assets/images/kaleidoscope/29b.png';
import kaleidoscope30 from '../../assets/images/kaleidoscope/31.png';
import kaleidoscope30a from '../../assets/images/kaleidoscope/31a.png';
import kaleidoscope30b from '../../assets/images/kaleidoscope/31b.png';

export const kaleidoscopeProducts: Product[] = [
  {
    id: "kaleidoscope-001",
    sku: "KAL-NECK-001",
    name: "Kaleidoscope Diamond Necklace",
    slug: "kaleidoscope-diamond-necklace",
    description: {
      short: "Elegant diamond necklace in 18K yellow gold with marquise diamonds",
      long: "Experience timeless elegance with our Kaleidoscope Diamond Necklace. Crafted in luxurious 18K yellow gold, this stunning piece features brilliant marquise-cut diamonds that catch and reflect light in mesmerizing patterns. The sophisticated design combines classic beauty with modern geometric elements, creating a piece that transitions seamlessly from day to evening wear. Each diamond is carefully selected for its exceptional clarity and brilliance, ensuring a dazzling display that will captivate for generations."
    },
    price: {
      current: 18600,
      currency: "GBP",
      formatted: "£18,600"
    },
    category: "necklaces",
    collection: "kaleidoscope",
    images: {
      main: kaleidoscope1,
      gallery: [
        kaleidoscope1b,
        kaleidoscope1a
      ],
      thumbnail: kaleidoscope1b
    },
    specifications: {
      metalType: "18K Yellow Gold",
      metalColor: "Yellow Gold",
      stoneType: "Marquise Diamonds",
      dimensions: {
        width: "45mm",
        height: "25mm",
        weight: "18.7g"
      },
      care: "Clean with soft cloth and mild soap, avoid harsh chemicals"
    },
    inventory: {
      inStock: true,
      quantity: 3,
      stockStatus: "in-stock",
      leadTime: "Ships within 3 weeks. Holidays may affect this time"
    },
    features: [
      "18K yellow gold construction",
      "Marquise-cut diamonds",
      "Sophisticated geometric design",
      "Delicate chain included",
      "Light-refracting patterns",
      "Timeless elegance"
    ],
    tags: ["necklaces", "yellow-gold", "diamonds", "marquise", "elegant", "luxury"],
    badges: {
      isNew: false,
      isBestseller: false,
      isLimitedEdition: false,
      isCustomizable: false
    },
    seo: {
      title: "Kaleidoscope Diamond Necklace - 18K Yellow Gold Marquise Diamonds | Parisa London",
      description: "Discover timeless elegance with our Kaleidoscope Diamond Necklace. 18K yellow gold with marquise diamonds. Free UK shipping.",
      keywords: ["diamond necklace", "yellow gold necklace", "marquise diamonds", "luxury necklace", "elegant jewelry"]
    },
    shipping: {
      freeShipping: true,
      weight: 18.7,
      dimensions: {
        length: 5,
        width: 4,
        height: 2
      }
    },
    relatedProducts: ["kaleidoscope-002", "kaleidoscope-003"],
    createdAt: "2024-01-25T10:00:00Z",
    updatedAt: "2024-01-25T14:30:00Z"
  },
  {
    id: "kaleidoscope-002",
    sku: "KAL-NECK-002",
    name: "Kaleidoscope Heart Emerald Necklace",
    slug: "kaleidoscope-heart-emerald-necklace-baguette",
    description: {
      short: "Romantic heart emerald necklace in 18K yellow gold with baguette diamonds",
      long: "Express your love with our Kaleidoscope Heart Emerald Necklace. This romantic piece features a stunning heart-shaped emerald set in luxurious 18K yellow gold, accented with brilliant baguette-cut diamonds. The geometric design creates a modern interpretation of classic romance, while the emerald's natural beauty and the diamonds' sparkle combine to create a truly mesmerizing piece. Perfect for special occasions or as a meaningful gift for someone special."
    },
    price: {
      current: 6450,
      currency: "GBP",
      formatted: "£6,450"
    },
    category: "necklaces",
    collection: "kaleidoscope",
    images: {
      main: kaleidoscope2,
      gallery: [
        kaleidoscope2b,
        kaleidoscope2a
      ],
      thumbnail: kaleidoscope2
    },
    specifications: {
      metalType: "18K Yellow Gold",
      metalColor: "Yellow Gold",
      stoneType: "Heart Emerald & Baguette Diamonds",
      dimensions: {
        width: "40mm",
        height: "35mm",
        weight: "22.1g"
      },
      care: "Clean with soft cloth and mild soap, avoid harsh chemicals"
    },
    inventory: {
      inStock: true,
      quantity: 2,
      stockStatus: "low-stock",
      leadTime: "Ships within 3 weeks. Holidays may affect this time"
    },
    features: [
      "18K yellow gold construction",
      "Heart-shaped emerald centerpiece",
      "Baguette-cut diamond accents",
      "Romantic geometric design",
      "Delicate chain included",
      "Perfect for special occasions"
    ],
    tags: ["necklaces", "yellow-gold", "emerald", "heart", "romantic", "diamonds"],
    badges: {
      isNew: false,
      isLimitedEdition: false,
      isCustomizable: false
    },
    seo: {
      title: "Kaleidoscope Heart Emerald Necklace - 18K Yellow Gold Baguette Diamonds | Parisa London",
      description: "Express love with our Kaleidoscope Heart Emerald Necklace. 18K yellow gold with heart emerald and baguette diamonds. Free UK shipping.",
      keywords: ["emerald necklace", "heart necklace", "yellow gold necklace", "baguette diamonds", "romantic jewelry"]
    },
    shipping: {
      freeShipping: true,
      weight: 22.1,
      dimensions: {
        length: 5,
        width: 4,
        height: 2
      }
    },
    relatedProducts: ["kaleidoscope-001", "kaleidoscope-003"],
    createdAt: "2024-01-25T11:00:00Z",
    updatedAt: "2024-01-25T15:45:00Z"
  },
  {
    id: "kaleidoscope-003",
    sku: "KAL-NECK-003",
    name: "Kaleidoscope Heart Emerald Necklace",
    slug: "kaleidoscope-heart-emerald-necklace-baguette-emeralds",
    description: {
      short: "Romantic heart emerald necklace in 18K yellow gold with baguette emeralds",
      long: "Celebrate love with our Kaleidoscope Heart Emerald Necklace featuring baguette emeralds. This exquisite piece showcases a stunning heart-shaped emerald centerpiece set in luxurious 18K yellow gold, surrounded by brilliant baguette-cut emeralds that enhance the natural beauty of the center stone. The geometric design creates a modern interpretation of classic romance, while the emerald's rich green color and the baguette accents create a truly captivating piece that symbolizes eternal love and commitment."
    },
    price: {
      current: 6000,
      currency: "GBP",
      formatted: "£6,000"
    },
    category: "necklaces",
    collection: "kaleidoscope",
    images: {
      main: kaleidoscope3,
      gallery: [
        kaleidoscope3a,
        kaleidoscope3b
      ],
      thumbnail: kaleidoscope3
    },
    specifications: {
      metalType: "18K Yellow Gold",
      metalColor: "Yellow Gold",
      stoneType: "Heart Emerald & Baguette Emeralds",
      dimensions: {
        width: "42mm",
        height: "38mm",
        weight: "24.3g"
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
      "Heart-shaped emerald centerpiece",
      "Baguette-cut emerald accents",
      "Romantic geometric design",
      "Delicate chain included",
      "Symbol of eternal love"
    ],
    tags: ["necklaces", "yellow-gold", "emerald", "heart", "romantic", "baguette"],
    badges: {
      isNew: false,
      isLimitedEdition: false,
      isCustomizable: false
    },
    seo: {
      title: "Kaleidoscope Heart Emerald Necklace - 18K Yellow Gold Baguette Emeralds | Parisa London",
      description: "Celebrate love with our Kaleidoscope Heart Emerald Necklace. 18K yellow gold with heart emerald and baguette emeralds. Free UK shipping.",
      keywords: ["emerald necklace", "heart necklace", "yellow gold necklace", "baguette emeralds", "romantic jewelry"]
    },
    shipping: {
      freeShipping: true,
      weight: 24.3,
      dimensions: {
        length: 5,
        width: 4,
        height: 2
      }
    },
    relatedProducts: ["kaleidoscope-001", "kaleidoscope-002"],
    createdAt: "2024-01-25T12:00:00Z",
    updatedAt: "2024-01-25T16:30:00Z"
  },
  {
    id: "kaleidoscope-004",
    sku: "KAL-NECK-004",
    name: "Kaleidoscope Emerald Necklace",
    slug: "kaleidoscope-emerald-necklace",
    description: {
      short: "Elegant emerald necklace in 18K yellow gold with emerald cut emerald and baguette emeralds",
      long: "Discover timeless sophistication with our Kaleidoscope Emerald Necklace. This stunning piece features a magnificent emerald-cut emerald centerpiece set in luxurious 18K yellow gold, surrounded by brilliant baguette-cut emeralds that create a mesmerizing geometric pattern. The classic emerald cut showcases the stone's natural beauty and clarity, while the baguette accents add modern elegance and sparkle. Perfect for those who appreciate the rich green beauty of emeralds combined with contemporary design elements."
    },
    price: {
      current: 5500,
      currency: "GBP",
      formatted: "£5,500"
    },
    category: "necklaces",
    collection: "kaleidoscope",
    images: {
      main: kaleidoscope4,
      gallery: [
        kaleidoscope4b,
        kaleidoscope4a
      ],
      thumbnail: kaleidoscope4b
    },
    specifications: {
      metalType: "18K Yellow Gold",
      metalColor: "Yellow Gold",
      stoneType: "Emerald Cut Emerald & Baguette Emeralds",
      dimensions: {
        width: "48mm",
        height: "30mm",
        weight: "26.8g"
      },
      care: "Clean with soft cloth and mild soap, avoid harsh chemicals"
    },
    inventory: {
      inStock: true,
      quantity: 2,
      stockStatus: "in-stock",
      leadTime: "Ships within 3 weeks. Holidays may affect this time"
    },
    features: [
      "18K yellow gold construction",
      "Emerald-cut emerald centerpiece",
      "Baguette-cut emerald accents",
      "Sophisticated geometric design",
      "Delicate chain included",
      "Timeless elegance"
    ],
    tags: ["necklaces", "yellow-gold", "emerald", "emerald-cut", "sophisticated", "luxury"],
    badges: {
      isNew: false,
      isBestseller: false,
      isLimitedEdition: false,
      isCustomizable: false
    },
    seo: {
      title: "Kaleidoscope Emerald Necklace - 18K Yellow Gold Emerald Cut | Parisa London",
      description: "Discover sophistication with our Kaleidoscope Emerald Necklace. 18K yellow gold with emerald cut emerald and baguette emeralds. Free UK shipping.",
      keywords: ["emerald necklace", "emerald cut", "yellow gold necklace", "baguette emeralds", "luxury jewelry"]
    },
    shipping: {
      freeShipping: true,
      weight: 26.8,
      dimensions: {
        length: 5,
        width: 4,
        height: 2
      }
    },
    relatedProducts: ["kaleidoscope-001", "kaleidoscope-002"],
    createdAt: "2024-01-25T12:00:00Z",
    updatedAt: "2024-01-25T16:30:00Z"
  },
  {
    id: "kaleidoscope-005",
    sku: "KAL-NECK-005",
    name: "Kaleidoscope Iolite Necklace",
    slug: "kaleidoscope-iolite-necklace",
    description: {
      short: "Stunning iolite necklace in 18K white gold with trillion iolite and baguette iolite",
      long: "Embrace the mystical beauty of iolite with our Kaleidoscope Iolite Necklace. This enchanting piece features a magnificent trillion-cut iolite centerpiece set in elegant 18K white gold, surrounded by brilliant baguette-cut iolite stones that create a mesmerizing geometric pattern. The iolite's unique color-changing properties create a captivating display that shifts from deep violet to blue depending on the light, making this piece truly magical. Perfect for those who appreciate unique gemstones and contemporary design."
    },
    price: {
      current: 3250,
      currency: "GBP",
      formatted: "£3,250"
    },
    category: "necklaces",
    collection: "kaleidoscope",
    images: {
      main: kaleidoscope6,
      gallery: [
        kaleidoscope6b,
        kaleidoscope6a
      ],
      thumbnail: kaleidoscope6
    },
    specifications: {
      metalType: "18K White Gold",
      metalColor: "White Gold",
      stoneType: "Trillion Iolite & Baguette Iolite",
      dimensions: {
        width: "45mm",
        height: "28mm",
        weight: "19.4g"
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
      "Trillion-cut iolite centerpiece",
      "Baguette-cut iolite accents",
      "Color-changing properties",
      "Geometric design",
      "Mystical beauty"
    ],
    tags: ["necklaces", "white-gold", "iolite", "trillion", "mystical", "unique"],
    badges: {
      isNew: false,
      isBestseller: false,
      isLimitedEdition: false,
      isCustomizable: false
    },
    seo: {
      title: "Kaleidoscope Iolite Necklace - 18K White Gold Trillion Iolite | Parisa London",
      description: "Embrace mystical beauty with our Kaleidoscope Iolite Necklace. 18K white gold with trillion iolite and baguette iolite. Free UK shipping.",
      keywords: ["iolite necklace", "trillion iolite", "white gold necklace", "color changing", "mystical jewelry"]
    },
    shipping: {
      freeShipping: true,
      weight: 19.4,
      dimensions: {
        length: 5,
        width: 4,
        height: 2
      }
    },
    relatedProducts: ["kaleidoscope-001", "kaleidoscope-002"],
    createdAt: "2024-01-25T13:00:00Z",
    updatedAt: "2024-01-25T17:00:00Z"
  },
  {
    id: "kaleidoscope-006",
    sku: "KAL-EARR-006",
    name: "Kaleidoscope Yellow Sapphire Earrings",
    slug: "kaleidoscope-yellow-sapphire-earrings",
    description: {
      short: "Radiant yellow sapphire earrings in 18K yellow gold with diamonds",
      long: "Illuminate your style with our Kaleidoscope Yellow Sapphire Earrings. These stunning pieces feature brilliant yellow sapphires set in luxurious 18K yellow gold, accented with sparkling diamonds that enhance the sapphires' natural radiance. The geometric design creates a modern interpretation of classic elegance, while the yellow sapphires' warm glow adds a touch of sunshine to any ensemble. Perfect for those who want to add vibrant color and sophistication to their jewelry collection."
    },
    price: {
      current: 6625,
      currency: "GBP",
      formatted: "£6,625"
    },
    category: "earrings",
    collection: "kaleidoscope",
    images: {
      main: kaleidoscope7,
      gallery: [
        kaleidoscope7b,
        kaleidoscope7a
      ],
      thumbnail: kaleidoscope7a
    },
    specifications: {
      metalType: "18K Yellow Gold",
      metalColor: "Yellow Gold",
      stoneType: "Yellow Sapphires & Diamonds",
      dimensions: {
        width: "12mm",
        height: "25mm",
        weight: "7.2g"
      },
      care: "Clean with soft cloth and mild soap, avoid harsh chemicals"
    },
    inventory: {
      inStock: true,
      quantity: 5,
      stockStatus: "in-stock",
      leadTime: "Ships within 3 weeks. Holidays may affect this time"
    },
    features: [
      "18K yellow gold construction",
      "Yellow sapphire gemstones",
      "Diamond accents",
      "Geometric design",
      "Secure post backing",
      "Radiant beauty"
    ],
    tags: ["earrings", "yellow-gold", "yellow-sapphire", "diamonds", "radiant", "elegant"],
    badges: {
      isNew: false,
      isBestseller: false,
      isCustomizable: false
    },
    seo: {
      title: "Kaleidoscope Yellow Sapphire Earrings - 18K Yellow Gold Diamonds | Parisa London",
      description: "Illuminate your style with our Kaleidoscope Yellow Sapphire Earrings. 18K yellow gold with yellow sapphires and diamonds. Free UK shipping.",
      keywords: ["yellow sapphire earrings", "yellow gold earrings", "diamond earrings", "radiant jewelry", "elegant earrings"]
    },
    shipping: {
      freeShipping: true,
      weight: 7.2,
      dimensions: {
        length: 4,
        width: 3,
        height: 1
      }
    },
    relatedProducts: ["kaleidoscope-001", "kaleidoscope-002"],
    createdAt: "2024-01-25T13:30:00Z",
    updatedAt: "2024-01-25T17:30:00Z"
  },
  {
    id: "kaleidoscope-007",
    sku: "KAL-EARR-007",
    name: "Kaleidoscope Emerald Earrings",
    slug: "kaleidoscope-emerald-earrings",
    description: {
      short: "Elegant emerald earrings in 18K yellow gold with diamonds",
      long: "Add sophisticated elegance to your collection with our Kaleidoscope Emerald Earrings. These beautiful pieces feature stunning emeralds set in luxurious 18K yellow gold, accented with brilliant diamonds that enhance the emeralds' natural green beauty. The geometric design creates a modern interpretation of classic sophistication, while the emeralds' rich color adds a touch of luxury to any outfit. Perfect for those who appreciate the timeless beauty of emeralds combined with contemporary design elements."
    },
    price: {
      current: 9625,
      currency: "GBP",
      formatted: "£9,625"
    },
    category: "earrings",
    collection: "kaleidoscope",
    images: {
      main: kaleidoscope8,
      gallery: [
        kaleidoscope8b,
        kaleidoscope8a
      ],
      thumbnail: kaleidoscope8
    },
    specifications: {
      metalType: "18K Yellow Gold",
      metalColor: "Yellow Gold",
      stoneType: "Emeralds & Diamonds",
      dimensions: {
        width: "14mm",
        height: "28mm",
        weight: "8.1g"
      },
      care: "Clean with soft cloth and mild soap, avoid harsh chemicals"
    },
    inventory: {
      inStock: true,
      quantity: 3,
      stockStatus: "in-stock",
      leadTime: "Ships within 3 weeks. Holidays may affect this time"
    },
    features: [
      "18K yellow gold construction",
      "Emerald gemstones",
      "Diamond accents",
      "Sophisticated geometric design",
      "Secure post backing",
      "Timeless elegance"
    ],
    tags: ["earrings", "yellow-gold", "emerald", "diamonds", "sophisticated", "luxury"],
    badges: {
      isNew: false,
      isBestseller: false,
      isCustomizable: false
    },
    seo: {
      title: "Kaleidoscope Emerald Earrings - 18K Yellow Gold Diamonds | Parisa London",
      description: "Add sophistication with our Kaleidoscope Emerald Earrings. 18K yellow gold with emeralds and diamonds. Free UK shipping.",
      keywords: ["emerald earrings", "yellow gold earrings", "diamond earrings", "sophisticated jewelry", "luxury earrings"]
    },
    shipping: {
      freeShipping: true,
      weight: 8.1,
      dimensions: {
        length: 4,
        width: 3,
        height: 1
      }
    },
    relatedProducts: ["kaleidoscope-001", "kaleidoscope-002"],
    createdAt: "2024-01-25T14:00:00Z",
    updatedAt: "2024-01-25T18:00:00Z"
  },
  {
    id: "kaleidoscope-032",
    sku: "KAL-EARR-032",
    name: "Kaleidoscope Ruby Marquise Diamond Earrings",
    slug: "kaleidoscope-ruby-marquise-diamond-earrings",
    description: {
      short: "Elegant marquise diamond earrings in 18K yellow gold with ruby accents",
      long: "Elevate your style with our Kaleidoscope Ruby Marquise Diamond Earrings. These stunning pieces feature brilliant marquise-cut diamonds and vibrant rubies set in luxurious 18K yellow gold. The unique ear jacket design allows for versatile wearing options, creating a sophisticated geometric pattern that catches and reflects light beautifully. The passionate red rubies combined with the sparkling diamonds create a captivating display of luxury and elegance. Perfect for making a statement at special occasions or adding glamorous luxury to your everyday wear."
    },
    price: {
      current: 8250,
      currency: "GBP",
      formatted: "£8,250"
    },
    category: "earrings",
    collection: "kaleidoscope",
    images: {
      main: kaleidoscope8_1,
      gallery: [
        kaleidoscope8_1b,
        kaleidoscope8_1a
      ],
      thumbnail: kaleidoscope8_1
    },
    specifications: {
      metalType: "18K Yellow Gold",
      metalColor: "Yellow Gold",
      stoneType: "Rubies & Marquise Diamonds",
      dimensions: {
        width: "13mm",
        height: "30mm",
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
      "18K yellow gold construction",
      "Marquise-cut diamond gemstones",
      "Ruby accents",
      "Ear jacket design",
      "Versatile wearing options",
      "Sophisticated geometric pattern",
      "Secure post backing",
      "Glamorous luxury"
    ],
    tags: ["earrings", "yellow-gold", "ruby", "diamonds", "marquise", "luxury", "elegant"],
    badges: {
      isNew: false,
      isBestseller: false,
      isLimitedEdition: false,
      isCustomizable: false
    },
    seo: {
      title: "Kaleidoscope Ruby Marquise Diamond Earrings - 18K Yellow Gold | Parisa London",
      description: "Elevate your style with our Kaleidoscope Ruby Marquise Diamond Earrings. 18K yellow gold with marquise diamonds and rubies. Free UK shipping.",
      keywords: ["ruby earrings", "marquise diamond earrings", "yellow gold earrings", "luxury earrings", "elegant jewelry"]
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
    relatedProducts: ["kaleidoscope-007", "kaleidoscope-006"],
    createdAt: "2024-11-28T10:00:00Z",
    updatedAt: "2024-11-28T10:00:00Z"
  },
  {
    id: "kaleidoscope-008",
    sku: "KAL-EARR-008",
    name: "Kaleidoscope Drop Diamond Earrings",
    slug: "kaleidoscope-drop-diamond-earrings",
    description: {
      short: "Stunning drop diamond earrings in 18K yellow gold with blue topaz",
      long: "Make a statement with our Kaleidoscope Drop Diamond Earrings. These elegant pieces feature brilliant diamonds set in luxurious 18K yellow gold, accented with beautiful blue topaz that creates a stunning contrast. The drop design creates movement and elegance, while the diamonds' sparkle and the topaz's blue beauty combine to create a truly mesmerizing effect. Perfect for special occasions or when you want to add a touch of glamour to your everyday style."
    },
    price: {
      current: 5800,
      currency: "GBP",
      formatted: "£5,800"
    },
    category: "earrings",
    collection: "kaleidoscope",
    images: {
      main: kaleidoscope11,
      gallery: [
        kaleidoscope11b,
        kaleidoscope11a
      ],
      thumbnail: kaleidoscope11
    },
    specifications: {
      metalType: "18K Yellow Gold",
      metalColor: "Yellow Gold",
      stoneType: "Diamonds & Blue Topaz",
      dimensions: {
        width: "16mm",
        height: "35mm",
        weight: "9.8g"
      },
      care: "Clean with soft cloth and mild soap, avoid harsh chemicals"
    },
    inventory: {
      inStock: true,
      quantity: 2,
      stockStatus: "low-stock",
      leadTime: "Ships within 3 weeks. Holidays may affect this time"
    },
    features: [
      "18K yellow gold construction",
      "Brilliant diamonds",
      "Blue topaz accents",
      "Elegant drop design",
      "Secure post backing",
      "Glamorous appeal"
    ],
    tags: ["earrings", "yellow-gold", "diamonds", "blue-topaz", "drop", "glamorous"],
    badges: {
      isNew: false,
      isLimitedEdition: false,
      isCustomizable: false
    },
    seo: {
      title: "Kaleidoscope Drop Diamond Earrings - 18K Yellow Gold Blue Topaz | Parisa London",
      description: "Make a statement with our Kaleidoscope Drop Diamond Earrings. 18K yellow gold with diamonds and blue topaz. Free UK shipping.",
      keywords: ["drop diamond earrings", "yellow gold earrings", "blue topaz earrings", "glamorous jewelry", "statement earrings"]
    },
    shipping: {
      freeShipping: true,
      weight: 9.8,
      dimensions: {
        length: 4,
        width: 3,
        height: 1
      }
    },
    relatedProducts: ["kaleidoscope-001", "kaleidoscope-002"],
    createdAt: "2024-01-25T14:30:00Z",
    updatedAt: "2024-01-25T18:30:00Z"
  },
  {
    id: "kaleidoscope-009",
    sku: "KAL-RING-009",
    name: "Kaleidoscope Emerald Ring",
    slug: "kaleidoscope-emerald-ring",
    description: {
      short: "Exquisite emerald ring in 18K yellow gold with diamond accents",
      long: "Experience the beauty of nature with our Kaleidoscope Emerald Ring. This stunning piece features a magnificent emerald centerpiece set in luxurious 18K yellow gold, surrounded by brilliant diamonds that enhance the emerald's natural green beauty. The geometric design creates a modern interpretation of classic elegance, while the emerald's rich color and the diamonds' sparkle combine to create a truly captivating piece. Perfect for those who appreciate the timeless beauty of emeralds and want to make a statement with their jewelry."
    },
    price: {
      current: 9000,
      currency: "GBP",
      formatted: "£9,000"
    },
    category: "rings",
    collection: "kaleidoscope",
    images: {
      main: kaleidoscope12,
      gallery: [
        kaleidoscope12b,
        kaleidoscope12a
      ],
      thumbnail: kaleidoscope12
    },
    specifications: {
      metalType: "18K Yellow Gold",
      metalColor: "Yellow Gold",
      stoneType: "Emerald & Diamonds",
      dimensions: {
        width: "10mm",
        height: "4mm",
        weight: "14.6g"
      },
      care: "Clean with soft cloth and mild soap, avoid harsh chemicals"
    },
    inventory: {
      inStock: true,
      quantity: 3,
      stockStatus: "in-stock",
      leadTime: "Ships within 3 weeks. Holidays may affect this time"
    },
    features: [
      "18K yellow gold construction",
      "Emerald centerpiece",
      "Diamond accents",
      "Sophisticated geometric design",
      "Comfortable band design",
      "Timeless elegance"
    ],
    tags: ["rings", "yellow-gold", "emerald", "diamonds", "sophisticated", "luxury"],
    badges: {
      isNew: false,
      isBestseller: false,
      isLimitedEdition: false,
      isCustomizable: false
    },
    seo: {
      title: "Kaleidoscope Emerald Ring - 18K Yellow Gold Diamonds | Parisa London",
      description: "Experience beauty with our Kaleidoscope Emerald Ring. 18K yellow gold with emerald and diamonds. Free UK shipping.",
      keywords: ["emerald ring", "yellow gold ring", "diamond ring", "sophisticated jewelry", "luxury ring"]
    },
    shipping: {
      freeShipping: true,
      weight: 14.6,
      dimensions: {
        length: 6,
        width: 6,
        height: 2
      }
    },
    relatedProducts: ["kaleidoscope-001", "kaleidoscope-002"],
    createdAt: "2024-01-25T15:00:00Z",
    updatedAt: "2024-01-25T19:00:00Z"
  },
  {
    id: "kaleidoscope-010",
    sku: "KAL-RING-010",
    name: "Kaleidoscope Iolite Ring",
    slug: "kaleidoscope-iolite-ring",
    description: {
      short: "Mystical iolite ring in 18K yellow gold",
      long: "Embrace the mystical beauty of iolite with our Kaleidoscope Iolite Ring. This enchanting piece features a stunning iolite centerpiece set in luxurious 18K yellow gold. The iolite's unique color-changing properties create a captivating display that shifts from deep violet to blue depending on the light, making this ring truly magical. Perfect for those who appreciate unique gemstones and want to add a touch of mystical elegance to their jewelry collection."
    },
    price: {
      current: 4060,
      currency: "GBP",
      formatted: "£4,060"
    },
    category: "rings",
    collection: "kaleidoscope",
    images: {
      main: kaleidoscope13,
      gallery: [
        kaleidoscope13b,
        kaleidoscope13a
      ],
      thumbnail: kaleidoscope13a
    },
    specifications: {
      metalType: "18K Yellow Gold",
      metalColor: "Yellow Gold",
      stoneType: "Iolite",
      dimensions: {
        width: "8mm",
        height: "3mm",
        weight: "11.2g"
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
      "18K yellow gold construction",
      "Iolite centerpiece",
      "Color-changing properties",
      "Geometric design",
      "Comfortable band design",
      "Mystical beauty"
    ],
    tags: ["rings", "yellow-gold", "iolite", "mystical", "unique", "color-changing"],
    badges: {
      isNew: false,
      isBestseller: false,
      isLimitedEdition: false,
      isCustomizable: false
    },
    seo: {
      title: "Kaleidoscope Iolite Ring - 18K Yellow Gold | Parisa London",
      description: "Embrace mystical beauty with our Kaleidoscope Iolite Ring. 18K yellow gold with color-changing iolite. Free UK shipping.",
      keywords: ["iolite ring", "yellow gold ring", "color changing", "mystical jewelry", "unique ring"]
    },
    shipping: {
      freeShipping: true,
      weight: 11.2,
      dimensions: {
        length: 6,
        width: 6,
        height: 2
      }
    },
    relatedProducts: ["kaleidoscope-001", "kaleidoscope-002"],
    createdAt: "2024-01-25T15:30:00Z",
    updatedAt: "2024-01-25T19:30:00Z"
  },
  {
    id: "kaleidoscope-011",
    sku: "KAL-RING-011",
    name: "Kaleidoscope Amethyst Ring",
    slug: "kaleidoscope-amethyst-ring",
    description: {
      short: "Vibrant amethyst ring in 18K yellow gold with citrine accents",
      long: "Celebrate the beauty of purple and gold with our Kaleidoscope Amethyst Ring. This stunning piece features a magnificent amethyst centerpiece set in luxurious 18K yellow gold, accented with brilliant citrine stones that create a beautiful contrast. The amethyst's deep purple color combined with the citrine's golden hues creates a mesmerizing display of complementary colors. Perfect for those who appreciate vibrant gemstones and want to add a touch of regal elegance to their collection."
    },
    price: {
      current: 3250,
      currency: "GBP",
      formatted: "£3,250"
    },
    category: "rings",
    collection: "kaleidoscope",
    images: {
      main: kaleidoscope14,
      gallery: [
        kaleidoscope14b,
        kaleidoscope14a
      ],
      thumbnail: kaleidoscope14
    },
    specifications: {
      metalType: "18K Yellow Gold",
      metalColor: "Yellow Gold",
      stoneType: "Amethyst & Citrine",
      dimensions: {
        width: "9mm",
        height: "4mm",
        weight: "12.8g"
      },
      care: "Clean with soft cloth and mild soap, avoid harsh chemicals"
    },
    inventory: {
      inStock: true,
      quantity: 3,
      stockStatus: "in-stock",
      leadTime: "Ships within 3 weeks. Holidays may affect this time"
    },
    features: [
      "18K yellow gold construction",
      "Amethyst centerpiece",
      "Citrine accents",
      "Vibrant color combination",
      "Comfortable band design",
      "Regal elegance"
    ],
    tags: ["rings", "yellow-gold", "amethyst", "citrine", "vibrant", "regal"],
    badges: {
      isNew: false,
      isBestseller: false,
      isCustomizable: false
    },
    seo: {
      title: "Kaleidoscope Amethyst Ring - 18K Yellow Gold Citrine | Parisa London",
      description: "Celebrate vibrant beauty with our Kaleidoscope Amethyst Ring. 18K yellow gold with amethyst and citrine. Free UK shipping.",
      keywords: ["amethyst ring", "yellow gold ring", "citrine ring", "vibrant jewelry", "regal ring"]
    },
    shipping: {
      freeShipping: true,
      weight: 12.8,
      dimensions: {
        length: 6,
        width: 6,
        height: 2
      }
    },
    relatedProducts: ["kaleidoscope-001", "kaleidoscope-002"],
    createdAt: "2024-01-25T16:00:00Z",
    updatedAt: "2024-01-25T20:00:00Z"
  },
  {
    id: "kaleidoscope-012",
    sku: "KAL-RING-012",
    name: "Kaleidoscope Ruby Ring",
    slug: "kaleidoscope-ruby-ring",
    description: {
      short: "Passionate ruby ring in 18K yellow gold with diamond accents",
      long: "Express your passion with our Kaleidoscope Ruby Ring. This stunning piece features a magnificent ruby centerpiece set in luxurious 18K yellow gold, surrounded by brilliant diamonds that enhance the ruby's natural red beauty. The ruby's deep red color symbolizes love and passion, while the diamonds add sparkle and elegance. Perfect for those who want to make a bold statement and celebrate the timeless beauty of rubies combined with contemporary design elements."
    },
    price: {
      current: 8750,
      currency: "GBP",
      formatted: "£8,750"
    },
    category: "rings",
    collection: "kaleidoscope",
    images: {
      main: kaleidoscope15,
      gallery: [
        kaleidoscope15b,
        kaleidoscope15a
      ],
      thumbnail: kaleidoscope15a
    },
    specifications: {
      metalType: "18K Yellow Gold",
      metalColor: "Yellow Gold",
      stoneType: "Ruby & Diamonds",
      dimensions: {
        width: "10mm",
        height: "4mm",
        weight: "15.3g"
      },
      care: "Clean with soft cloth and mild soap, avoid harsh chemicals"
    },
    inventory: {
      inStock: true,
      quantity: 2,
      stockStatus: "low-stock",
      leadTime: "Ships within 3 weeks. Holidays may affect this time"
    },
    features: [
      "18K yellow gold construction",
      "Ruby centerpiece",
      "Diamond accents",
      "Passionate red color",
      "Comfortable band design",
      "Bold statement piece"
    ],
    tags: ["rings", "yellow-gold", "ruby", "diamonds", "passionate", "bold"],
    badges: {
      isNew: false,
      isBestseller: false,
      isLimitedEdition: false,
      isCustomizable: false
    },
    seo: {
      title: "Kaleidoscope Ruby Ring - 18K Yellow Gold Diamonds | Parisa London",
      description: "Express passion with our Kaleidoscope Ruby Ring. 18K yellow gold with ruby and diamonds. Free UK shipping.",
      keywords: ["ruby ring", "yellow gold ring", "diamond ring", "passionate jewelry", "bold ring"]
    },
    shipping: {
      freeShipping: true,
      weight: 15.3,
      dimensions: {
        length: 6,
        width: 6,
        height: 2
      }
    },
    relatedProducts: ["kaleidoscope-001", "kaleidoscope-002"],
    createdAt: "2024-01-25T16:30:00Z",
    updatedAt: "2024-01-25T20:30:00Z"
  },
  {
    id: "kaleidoscope-013",
    sku: "KAL-RING-013",
    name: "Kaleidoscope Emerald Ring",
    slug: "kaleidoscope-emerald-ring-alt",
    description: {
      short: "Luxurious emerald ring in 18K yellow gold with diamond accents",
      long: "Experience the luxury of emeralds with our Kaleidoscope Emerald Ring. This exquisite piece features a magnificent emerald centerpiece set in luxurious 18K yellow gold, surrounded by brilliant diamonds that enhance the emerald's natural green beauty. The emerald's rich green color symbolizes growth and renewal, while the diamonds add sparkle and sophistication. Perfect for those who appreciate the timeless beauty of emeralds and want to add a touch of luxury to their jewelry collection."
    },
    price: {
      current: 5250,
      currency: "GBP",
      formatted: "£5,250"
    },
    category: "rings",
    collection: "kaleidoscope",
    images: {
      main: kaleidoscope16a,
      gallery: [
        kaleidoscope16b,
        kaleidoscope16a
      ],
      thumbnail: kaleidoscope16b
    },
    specifications: {
      metalType: "18K Yellow Gold",
      metalColor: "Yellow Gold",
      stoneType: "Emerald & Diamonds",
      dimensions: {
        width: "11mm",
        height: "4mm",
        weight: "16.7g"
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
      "Emerald centerpiece",
      "Diamond accents",
      "Rich green color",
      "Comfortable band design",
      "Luxurious elegance"
    ],
    tags: ["rings", "yellow-gold", "emerald", "diamonds", "luxurious", "elegant"],
    badges: {
      isNew: false,
      isBestseller: false,
      isLimitedEdition: false,
      isCustomizable: false
    },
    seo: {
      title: "Kaleidoscope Emerald Ring - 18K Yellow Gold Diamonds | Parisa London",
      description: "Experience luxury with our Kaleidoscope Emerald Ring. 18K yellow gold with emerald and diamonds. Free UK shipping.",
      keywords: ["emerald ring", "yellow gold ring", "diamond ring", "luxurious jewelry", "elegant ring"]
    },
    shipping: {
      freeShipping: true,
      weight: 16.7,
      dimensions: {
        length: 6,
        width: 6,
        height: 2
      }
    },
    relatedProducts: ["kaleidoscope-001", "kaleidoscope-002"],
    createdAt: "2024-01-25T17:00:00Z",
    updatedAt: "2024-01-25T21:00:00Z"
  },
  {
    id: "kaleidoscope-014",
    sku: "KAL-RING-014",
    name: "Kaleidoscope Pearl Ring",
    slug: "kaleidoscope-pearl-ring-yellow",
    description: {
      short: "Classic pearl ring in 18K yellow gold with diamond accents",
      long: "Embrace timeless elegance with our Kaleidoscope Pearl Ring in yellow gold. This classic piece features a stunning pearl centerpiece set in luxurious 18K yellow gold, surrounded by brilliant diamonds that enhance the pearl's natural luster. The pearl's soft glow combined with the diamonds' sparkle creates a perfect balance of classic and contemporary beauty. Perfect for those who appreciate the timeless elegance of pearls and want to add a touch of sophistication to their jewelry collection."
    },
    price: {
      current: 4750,
      currency: "GBP",
      formatted: "£4,750"
    },
    category: "rings",
    collection: "kaleidoscope",
    images: {
      main: kaleidoscope18,
      gallery: [
        kaleidoscope18b,
        kaleidoscope18a
      ],
      thumbnail: kaleidoscope18
    },
    specifications: {
      metalType: "18K Yellow Gold",
      metalColor: "Yellow Gold",
      stoneType: "Pearl & Diamonds",
      dimensions: {
        width: "9mm",
        height: "3mm",
        weight: "13.4g"
      },
      care: "Clean with soft cloth and mild soap, avoid harsh chemicals"
    },
    inventory: {
      inStock: true,
      quantity: 5,
      stockStatus: "in-stock",
      leadTime: "Ships within 3 weeks. Holidays may affect this time"
    },
    features: [
      "18K yellow gold construction",
      "Pearl centerpiece",
      "Diamond accents",
      "Classic elegance",
      "Comfortable band design",
      "Timeless beauty"
    ],
    tags: ["rings", "yellow-gold", "pearl", "diamonds", "classic", "elegant"],
    badges: {
      isNew: false,
      isBestseller: false,
      isCustomizable: false
    },
    seo: {
      title: "Kaleidoscope Pearl Ring - 18K Yellow Gold Diamonds | Parisa London",
      description: "Embrace elegance with our Kaleidoscope Pearl Ring. 18K yellow gold with pearl and diamonds. Free UK shipping.",
      keywords: ["pearl ring", "yellow gold ring", "diamond ring", "classic jewelry", "elegant ring"]
    },
    shipping: {
      freeShipping: true,
      weight: 13.4,
      dimensions: {
        length: 6,
        width: 6,
        height: 2
      }
    },
    relatedProducts: ["kaleidoscope-001", "kaleidoscope-002"],
    createdAt: "2024-01-25T17:30:00Z",
    updatedAt: "2024-01-25T21:30:00Z"
  },
  {
    id: "kaleidoscope-015",
    sku: "KAL-RING-015",
    name: "Kaleidoscope Pearl Ring",
    slug: "kaleidoscope-pearl-ring-white",
    description: {
      short: "Classic pearl ring in 18K white gold with diamond accents",
      long: "Embrace timeless elegance with our Kaleidoscope Pearl Ring in white gold. This classic piece features a stunning pearl centerpiece set in elegant 18K white gold, surrounded by brilliant diamonds that enhance the pearl's natural luster. The pearl's soft glow combined with the diamonds' sparkle creates a perfect balance of classic and contemporary beauty. Perfect for those who appreciate the timeless elegance of pearls and want to add a touch of sophistication to their jewelry collection."
    },
    price: {
      current: 4350,
      currency: "GBP",
      formatted: "£4,350"
    },
    category: "rings",
    collection: "kaleidoscope",
    images: {
      main: kaleidoscope19,
      gallery: [
        kaleidoscope19b,
        kaleidoscope19a
      ],
      thumbnail: kaleidoscope19
    },
    specifications: {
      metalType: "18K White Gold",
      metalColor: "White Gold",
      stoneType: "Pearl & Diamonds",
      dimensions: {
        width: "9mm",
        height: "3mm",
        weight: "13.6g"
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
      "Pearl centerpiece",
      "Diamond accents",
      "Classic elegance",
      "Comfortable band design",
      "Timeless beauty"
    ],
    tags: ["rings", "white-gold", "pearl", "diamonds", "classic", "elegant"],
    badges: {
      isNew: false,
      isBestseller: false,
      isCustomizable: false
    },
    seo: {
      title: "Kaleidoscope Pearl Ring - 18K White Gold Diamonds | Parisa London",
      description: "Embrace elegance with our Kaleidoscope Pearl Ring. 18K white gold with pearl and diamonds. Free UK shipping.",
      keywords: ["pearl ring", "white gold ring", "diamond ring", "classic jewelry", "elegant ring"]
    },
    shipping: {
      freeShipping: true,
      weight: 13.6,
      dimensions: {
        length: 6,
        width: 6,
        height: 2
      }
    },
    relatedProducts: ["kaleidoscope-001", "kaleidoscope-002"],
    createdAt: "2024-01-25T18:00:00Z",
    updatedAt: "2024-01-25T22:00:00Z"
  },
  {
    id: "kaleidoscope-016",
    sku: "KAL-BRAC-016",
    name: "Kaleidoscope Club Bracelet",
    slug: "kaleidoscope-club-bracelet",
    description: {
      short: "Elegant club bracelet in 18K yellow and rose gold with choice of diamonds or rubies",
      long: "Make a statement with our Kaleidoscope Club Bracelet. This elegant piece features a sophisticated design crafted in luxurious 18K yellow and rose gold, adorned with your choice of brilliant diamonds or vibrant rubies. The combination of two-tone gold creates visual interest, while the gemstones add sparkle and color. Perfect for those who want to add a touch of luxury and sophistication to their wrist and appreciate the beauty of mixed metals and gemstones."
    },
    price: {
      current: 2850,
      currency: "GBP",
      formatted: "£2,850"
    },
    category: "bracelets",
    collection: "kaleidoscope",
    images: {
      main: kaleidoscope20,
      gallery: [
        kaleidoscope20b,
        kaleidoscope20a
      ],
      thumbnail: kaleidoscope20
    },
    variants: {
      name: "Gemstone",
      options: [
        {
          id: "diamond",
          label: "Diamond",
          price: 2850,
          priceFormatted: "£2,850"
        },
        {
          id: "ruby",
          label: "Ruby",
          price: 2400,
          priceFormatted: "£2,400"
        }
      ],
      defaultOptionId: "diamond",
      affectsPrice: true
    },
    specifications: {
      metalType: "18K Yellow & Rose Gold",
      metalColor: "Yellow & Rose Gold",
      stoneType: "Diamonds or Rubies",
      dimensions: {
        width: "180mm",
        height: "8mm",
        weight: "22.5g"
      },
      care: "Clean with soft cloth and mild soap, avoid harsh chemicals"
    },
    inventory: {
      inStock: true,
      quantity: 3,
      stockStatus: "in-stock",
      leadTime: "Ships within 3 weeks. Holidays may affect this time"
    },
    features: [
      "18K yellow and rose gold construction",
      "Diamond accents",
      "Ruby gemstones",
      "Two-tone design",
      "Elegant club style",
      "Sophisticated appeal"
    ],
    tags: ["bracelets", "yellow-gold", "rose-gold", "diamonds", "rubies", "two-tone"],
    badges: {
      isNew: false,
      isBestseller: false,
      isLimitedEdition: false,
      isCustomizable: false
    },
    seo: {
      title: "Kaleidoscope Club Bracelet - 18K Yellow Rose Gold Diamonds Rubies | Parisa London",
      description: "Make a statement with our Kaleidoscope Club Bracelet. 18K yellow and rose gold with diamonds and rubies. Free UK shipping.",
      keywords: ["club bracelet", "yellow gold bracelet", "rose gold bracelet", "diamond bracelet", "ruby bracelet"]
    },
    shipping: {
      freeShipping: true,
      weight: 22.5,
      dimensions: {
        length: 7,
        width: 6,
        height: 2
      }
    },
    relatedProducts: ["kaleidoscope-001", "kaleidoscope-002"],
    createdAt: "2024-01-25T18:30:00Z",
    updatedAt: "2024-01-25T22:30:00Z"
  },
  {
    id: "kaleidoscope-017",
    sku: "KAL-BRAC-017",
    name: "Kaleidoscope Talisman Bracelet",
    slug: "kaleidoscope-talisman-bracelet",
    description: {
      short: "Protective talisman bracelet in 18K yellow gold with mixed gemstones",
      long: "Embrace the power of protection with our Kaleidoscope Talisman Bracelet. This mystical piece features a sophisticated design crafted in luxurious 18K yellow gold, adorned with brilliant diamonds and a beautiful array of gemstones including sapphires, citrine, tourmaline, and topaz. Each stone carries its own meaning and energy, creating a powerful talisman that not only looks beautiful but also provides spiritual protection. Perfect for those who appreciate the mystical properties of gemstones and want to wear their intentions."
    },
    price: {
      current: 4800,
      currency: "GBP",
      formatted: "£4,800"
    },
    category: "bracelets",
    collection: "kaleidoscope",
    images: {
      main: kaleidoscope21,
      gallery: [
        kaleidoscope21b,
        kaleidoscope21a
      ],
      thumbnail: kaleidoscope21a
    },
    specifications: {
      metalType: "18K Yellow Gold",
      metalColor: "Yellow Gold",
      stoneType: "Diamonds, Sapphires, Citrine, Tourmaline, Topaz",
      dimensions: {
        width: "190mm",
        height: "10mm",
        weight: "28.3g"
      },
      care: "Clean with soft cloth and mild soap, avoid harsh chemicals"
    },
    inventory: {
      inStock: false,
      quantity: 0,
      stockStatus: "out-of-stock",
      leadTime: "Ships within 3 weeks. Holidays may affect this time"
    },
    features: [
      "18K yellow gold construction",
      "Diamond accents",
      "Mixed gemstone array",
      "Talisman design",
      "Spiritual protection",
      "Mystical beauty"
    ],
    tags: ["bracelets", "yellow-gold", "diamonds", "sapphires", "citrine", "tourmaline", "topaz", "talisman"],
    badges: {
      isNew: false,
      isBestseller: false,
      isLimitedEdition: false,
      isCustomizable: false
    },
    seo: {
      title: "Kaleidoscope Talisman Bracelet - 18K Yellow Gold Mixed Gemstones | Parisa London",
      description: "Embrace protection with our Kaleidoscope Talisman Bracelet. 18K yellow gold with diamonds and mixed gemstones. Free UK shipping.",
      keywords: ["talisman bracelet", "yellow gold bracelet", "diamond bracelet", "mixed gemstones", "spiritual jewelry"]
    },
    shipping: {
      freeShipping: true,
      weight: 28.3,
      dimensions: {
        length: 8,
        width: 7,
        height: 2
      }
    },
    relatedProducts: ["kaleidoscope-001", "kaleidoscope-002"],
    createdAt: "2024-01-25T19:00:00Z",
    updatedAt: "2024-01-25T23:00:00Z"
  },
  {
    id: "kaleidoscope-018",
    sku: "KAL-BRAC-018",
    name: "Kaleidoscope Friendship Bracelet",
    slug: "kaleidoscope-friendship-bracelet",
    description: {
      short: "Elegant friendship bracelet in 18K white and rose gold with choice of diamond, emerald, or ruby",
      long: "Celebrate the bonds of friendship with our Kaleidoscope Friendship Bracelet. This beautiful piece features a sophisticated design crafted in luxurious 18K white and rose gold, available with your choice of brilliant diamonds, vibrant emeralds, or passionate rubies. The harmonious blend of white and rose gold creates a captivating two-tone effect, while the gemstones add sparkle and color. Perfect for gifting to a cherished friend or treating yourself to a meaningful piece that symbolizes lasting connections."
    },
    price: {
      current: 1980,
      currency: "GBP",
      formatted: "£1,980"
    },
    category: "bracelets",
    collection: "kaleidoscope",
    images: {
      main: kaleidoscope17,
      gallery: [kaleidoscope17b, kaleidoscope17a],
      thumbnail: kaleidoscope17a
    },
    variants: {
      name: "Gemstone",
      options: [
        {
          id: "diamond",
          label: "Diamond",
          price: 1980,
          priceFormatted: "£1,980"
        },
        {
          id: "emerald",
          label: "Emerald",
          price: 1800,
          priceFormatted: "£1,800"
        },
        {
          id: "ruby",
          label: "Ruby",
          price: 1800,
          priceFormatted: "£1,800"
        }
      ],
      defaultOptionId: "diamond",
      affectsPrice: true
    },
    specifications: {
      metalType: "18K White & Rose Gold",
      metalColor: "White & Rose Gold",
      stoneType: "Diamonds, Emerald, or Ruby",
      dimensions: {
        width: "180mm",
        height: "6mm",
        weight: "18.5g"
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
      "18K white and rose gold construction",
      "Two-tone design",
      "Diamond, emerald, or ruby options",
      "Elegant friendship symbol",
      "Sophisticated style",
      "Perfect for gifting"
    ],
    tags: ["bracelets", "white-gold", "rose-gold", "diamonds", "emerald", "ruby", "two-tone", "friendship"],
    badges: {
      isNew: false,
      isBestseller: false,
      isLimitedEdition: false,
      isCustomizable: false
    },
    seo: {
      title: "Kaleidoscope Friendship Bracelet - 18K White Rose Gold Diamonds | Parisa London",
      description: "Celebrate friendship with our Kaleidoscope Friendship Bracelet. 18K white and rose gold with diamond, emerald, or ruby. Free UK shipping.",
      keywords: ["friendship bracelet", "white gold bracelet", "rose gold bracelet", "diamond bracelet", "emerald bracelet", "ruby bracelet", "two-tone bracelet"]
    },
    shipping: {
      freeShipping: true,
      weight: 18.5,
      dimensions: {
        length: 7,
        width: 6,
        height: 2
      }
    },
    relatedProducts: ["kaleidoscope-016", "kaleidoscope-017"],
    createdAt: "2024-12-01T10:00:00Z",
    updatedAt: "2024-12-01T10:00:00Z"
  },
  {
    id: "kaleidoscope-025",
    sku: "KAL-BRAC-025",
    name: "Kaleidoscope Evil Eye Bracelet",
    slug: "kaleidoscope-evil-eye-bracelet",
    description: {
      short: "Protective evil eye bracelet in 18K gold with choice of diamond, ruby, or emerald",
      long: "Embrace protection and style with our Kaleidoscope Evil Eye Bracelet. This captivating piece features the iconic evil eye motif crafted in luxurious 18K gold, available in your choice of yellow, rose, or white gold. Adorned with your selection of brilliant diamonds, vibrant emeralds, or passionate rubies, this bracelet combines ancient symbolism with contemporary elegance. The evil eye is believed to ward off negative energy and bring good fortune to its wearer, making this piece both beautiful and meaningful."
    },
    price: {
      current: 2800,
      currency: "GBP",
      formatted: "£2,800"
    },
    category: "bracelets",
    collection: "kaleidoscope",
    images: {
      main: kaleidoscope22,
      gallery: [kaleidoscope22b, kaleidoscope22a],
      thumbnail: kaleidoscope22a
    },
    variants: {
      name: "Gemstone",
      options: [
        {
          id: "diamond",
          label: "Diamond",
          price: 2800,
          priceFormatted: "£2,800"
        },
        {
          id: "ruby",
          label: "Ruby",
          price: 2800,
          priceFormatted: "£2,800"
        },
        {
          id: "emerald",
          label: "Emerald",
          price: 2800,
          priceFormatted: "£2,800"
        }
      ],
      defaultOptionId: "diamond",
      affectsPrice: false
    },
    specifications: {
      metalType: "18K Yellow, Rose, or White Gold",
      metalColor: "Yellow, Rose, or White Gold",
      stoneType: "Diamond, Ruby, or Emerald",
      dimensions: {
        width: "180mm",
        height: "8mm",
        weight: "16.5g"
      },
      care: "Clean with soft cloth and mild soap, avoid harsh chemicals"
    },
    inventory: {
      inStock: true,
      quantity: 5,
      stockStatus: "in-stock",
      leadTime: "Ships within 3 weeks. Holidays may affect this time"
    },
    features: [
      "18K gold construction",
      "Yellow, rose, or white gold options",
      "Diamond, ruby, or emerald options",
      "Evil eye motif",
      "Protective symbolism",
      "Contemporary elegance"
    ],
    tags: ["bracelets", "yellow-gold", "rose-gold", "white-gold", "diamonds", "ruby", "emerald", "evil-eye", "protection"],
    badges: {
      isNew: false,
      isBestseller: false,
      isLimitedEdition: false,
      isCustomizable: false
    },
    seo: {
      title: "Kaleidoscope Evil Eye Bracelet - 18K Gold Diamond Ruby Emerald | Parisa London",
      description: "Embrace protection with our Kaleidoscope Evil Eye Bracelet. 18K yellow, rose, or white gold with diamond, ruby, or emerald. Free UK shipping.",
      keywords: ["evil eye bracelet", "gold bracelet", "diamond bracelet", "ruby bracelet", "emerald bracelet", "protection jewelry"]
    },
    shipping: {
      freeShipping: true,
      weight: 16.5,
      dimensions: {
        length: 7,
        width: 6,
        height: 2
      }
    },
    relatedProducts: ["kaleidoscope-016", "kaleidoscope-018"],
    createdAt: "2024-12-01T11:00:00Z",
    updatedAt: "2024-12-01T11:00:00Z"
  },
  {
    id: "kaleidoscope-026",
    sku: "KAL-BRAC-026",
    name: "Kaleidoscope Evil Eye Bracelet",
    slug: "kaleidoscope-evil-eye-bracelet",
    description: {
      short: "Elegant evil eye bracelet in 18K white gold with emerald marquise and diamonds or ruby and diamonds",
      long: "Embrace protection and elegance with our Kaleidoscope Evil Eye Bracelet. This captivating piece features the iconic evil eye motif crafted in luxurious 18K white gold. Choose between a stunning 1ct emerald marquise accented with brilliant diamonds, or vibrant rubies paired with sparkling diamonds. The evil eye symbolizes protection against negative energy, making this bracelet both a beautiful fashion statement and a meaningful talisman."
    },
    price: {
      current: 3980,
      currency: "GBP",
      formatted: "£3,980"
    },
    category: "bracelets",
    collection: "kaleidoscope",
    images: {
      main: kaleidoscope23,
      gallery: [kaleidoscope23b, kaleidoscope23a],
      thumbnail: kaleidoscope23a
    },
    variants: {
      name: "Gemstone",
      options: [
        {
          id: "emerald-diamond",
          label: "Emerald",
          price: 3980,
          priceFormatted: "£3,980"
        },
        {
          id: "ruby-diamond",
          label: "Ruby",
          price: 2800,
          priceFormatted: "£2,800"
        }
      ],
      defaultOptionId: "emerald-diamond",
      affectsPrice: true
    },
    specifications: {
      metalType: "18K White Gold",
      metalColor: "White Gold",
      stoneType: "1ct Emerald Marquise & Diamonds or Ruby & Diamonds",
      dimensions: {
        width: "12mm",
        height: "20mm",
        weight: "8.2g"
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
      "Evil eye motif",
      "1ct emerald marquise or ruby options",
      "Diamond accents",
      "Protective symbolism",
      "Secure clasp closure"
    ],
    tags: ["bracelet", "white-gold", "emerald", "ruby", "diamonds", "evil-eye", "protection", "marquise"],
    badges: {
      isNew: false,
      isBestseller: false,
      isLimitedEdition: false,
      isCustomizable: false
    },
    seo: {
      title: "Kaleidoscope Evil Eye Bracelet - 18K White Gold Emerald Ruby Diamonds | Parisa London",
      description: "Embrace protection with our Kaleidoscope Evil Eye Bracelet. 18K white gold with emerald marquise or ruby and diamonds. Free UK shipping.",
      keywords: ["evil eye bracelet", "emerald bracelet", "ruby bracelet", "diamond bracelet", "white gold bracelet", "protection jewelry"]
    },
    shipping: {
      freeShipping: true,
      weight: 8.2,
      dimensions: {
        length: 4,
        width: 3,
        height: 1
      }
    },
    relatedProducts: ["kaleidoscope-025", "kaleidoscope-007"],
    createdAt: "2024-12-01T12:00:00Z",
    updatedAt: "2024-12-01T12:00:00Z"
  },
  {
    id: "kaleidoscope-027",
    sku: "KAL-NECK-027",
    name: "Kaleidoscope Evil Eye Necklace",
    slug: "kaleidoscope-evil-eye-necklace-emerald-marquise",
    description: {
      short: "Elegant evil eye necklace in 18K gold with emerald marquise and diamonds",
      long: "Embrace protection and sophistication with our Kaleidoscope Evil Eye Necklace featuring emerald marquise and diamonds. This captivating piece showcases the iconic evil eye motif crafted in luxurious 18K gold, adorned with a stunning emerald marquise centerpiece surrounded by brilliant diamonds. The evil eye symbolizes protection against negative energy and brings good fortune to its wearer. The combination of the rich green emerald with sparkling diamonds creates a mesmerizing display of color and light, making this necklace both a powerful talisman and an exquisite statement piece."
    },
    price: {
      current: 4200,
      currency: "GBP",
      formatted: "£4,200"
    },
    category: "necklaces",
    collection: "kaleidoscope",
    images: {
      main: kaleidoscope24,
      gallery: [kaleidoscope24a, kaleidoscope24b],
      thumbnail: kaleidoscope24a
    },
    specifications: {
      metalType: "18K Gold",
      metalColor: "Yellow Gold",
      stoneType: "Emerald Marquise & Diamonds",
      dimensions: {
        width: "180mm",
        height: "10mm",
        weight: "14.8g"
      },
      care: "Clean with soft cloth and mild soap, avoid harsh chemicals"
    },
    inventory: {
      inStock: true,
      quantity: 3,
      stockStatus: "in-stock",
      leadTime: "Ships within 3 weeks. Holidays may affect this time"
    },
    features: [
      "18K gold construction",
      "Evil eye motif",
      "Emerald marquise centerpiece",
      "Diamond accents",
      "Protective symbolism",
      "Sophisticated elegance"
    ],
    tags: ["necklaces", "gold", "emerald", "diamonds", "evil-eye", "protection", "marquise"],
    badges: {
      isNew: false,
      isBestseller: false,
      isLimitedEdition: false,
      isCustomizable: false
    },
    seo: {
      title: "Kaleidoscope Evil Eye Necklace - Emerald Marquise & Diamonds 18K Gold | Parisa London",
      description: "Embrace protection with our Kaleidoscope Evil Eye Necklace. 18K gold with emerald marquise and diamonds. Free UK shipping.",
      keywords: ["evil eye necklace", "emerald necklace", "diamond necklace", "gold necklace", "protection jewelry", "marquise emerald"]
    },
    shipping: {
      freeShipping: true,
      weight: 14.8,
      dimensions: {
        length: 7,
        width: 6,
        height: 2
      }
    },
    relatedProducts: ["kaleidoscope-025", "kaleidoscope-026"],
    createdAt: "2024-12-01T13:00:00Z",
    updatedAt: "2024-12-01T13:00:00Z"
  },
  {
    id: "kaleidoscope-019",
    sku: "KAL-EARR-019",
    name: "Kaleidoscope Marquise Diamond Earrings",
    slug: "kaleidoscope-marquise-diamond-earrings",
    description: {
      short: "Elegant marquise diamond earrings in 18K yellow gold",
      long: "Embrace timeless elegance with our Kaleidoscope Marquise Diamond Earrings. These exquisite earrings feature stunning marquise-cut diamonds set in luxurious 18K yellow gold, creating a sophisticated and eye-catching piece that elevates any outfit. The distinctive marquise shape maximizes brilliance while creating an elongated, elegant silhouette. Each diamond is carefully selected for its exceptional clarity and fire, ensuring a dazzling display. Perfect for special occasions or adding a touch of luxury to your everyday style."
    },
    price: {
      current: 5800,
      currency: "GBP",
      formatted: "£5,800"
    },
    category: "earrings",
    collection: "kaleidoscope",
    images: {
      main: kaleidoscope25,
      gallery: [
        kaleidoscope25b,
        kaleidoscope25a
      ],
      thumbnail: kaleidoscope25b
    },
    specifications: {
      metalType: "18K Yellow Gold",
      metalColor: "Yellow Gold",
      stoneType: "Marquise Diamonds",
      dimensions: {
        width: "6mm",
        height: "6mm",
        weight: "4.2g"
      },
      care: "Clean with soft cloth and mild soap, avoid harsh chemicals"
    },
    inventory: {
      inStock: true,
      quantity: 6,
      stockStatus: "in-stock",
      leadTime: "Ships within 3 weeks. Holidays may affect this time"
    },
    features: [
      "18K yellow gold construction",
      "Marquise-cut diamond gemstones",
      "Elegant elongated design",
      "Secure post backing",
      "Maximum brilliance and fire",
      "Sophisticated luxury"
    ],
    tags: ["earrings", "yellow-gold", "diamonds", "marquise", "luxury", "elegant"],
    badges: {
      isNew: false,
      isBestseller: false,
      isCustomizable: false
    },
    seo: {
      title: "Kaleidoscope Marquise Diamond Earrings - 18K Yellow Gold | Parisa London",
      description: "Embrace timeless elegance with our Kaleidoscope Marquise Diamond Earrings. 18K yellow gold with marquise-cut diamonds. Free UK shipping.",
      keywords: ["marquise diamond earrings", "yellow gold earrings", "luxury earrings", "elegant jewelry", "diamond earrings"]
    },
    shipping: {
      freeShipping: true,
      weight: 4.2,
      dimensions: {
        length: 3,
        width: 3,
        height: 1
      }
    },
    relatedProducts: ["kaleidoscope-006", "kaleidoscope-007"],
    createdAt: "2024-01-25T20:00:00Z",
    updatedAt: "2024-01-25T23:45:00Z"
  },
  {
    id: "kaleidoscope-020",
    sku: "KAL-NECK-020",
    name: "Kaleidoscope Aquamarine Earrings",
    slug: "kaleidoscope-aquamarine-earrings",
    description: {
      short: "Elegant aquamarine earrings with baguette diamonds in 18K yellow gold",
      long: "Embrace serene elegance with our Kaleidoscope Aquamarine Earrings. These exquisite earrings feature stunning aquamarine gemstones accented with brilliant baguette diamonds, all set in luxurious 18K yellow gold. The aquamarine's captivating blue-green hue evokes the tranquility of the ocean, while the baguette diamonds add sophisticated sparkle and geometric interest. Perfect for adding a touch of refined luxury to both special occasions and elegant everyday wear."
    },
    price: {
      current: 4850,
      currency: "GBP",
      formatted: "£4,850"
    },
    category: "earrings",
    collection: "kaleidoscope",
    images: {
      main: kaleidoscope26,
      gallery: [
        kaleidoscope26a,
        kaleidoscope26b
      ],
      thumbnail: kaleidoscope26b
    },
    specifications: {
      metalType: "18K Yellow Gold",
      metalColor: "Yellow Gold",
      stoneType: "Aquamarine & Baguette Diamonds",
      dimensions: {
        width: "8mm",
        height: "20mm",
        weight: "6.8g"
      },
      care: "Clean with soft cloth and mild soap, avoid harsh chemicals"
    },
    inventory: {
      inStock: true,
      quantity: 2,
      stockStatus: "in-stock",
      leadTime: "Ships within 3 weeks. Holidays may affect this time"
    },
    features: [
      "18K yellow gold construction",
      "Aquamarine gemstones",
      "Baguette diamond accents",
      "Serene blue-green color",
      "Secure post backing",
      "Sophisticated geometric design"
    ],
    tags: ["earrings", "yellow-gold", "aquamarine", "diamonds", "elegant", "luxury"],
    badges: {
      isNew: false,
      isBestseller: false,
      isLimitedEdition: false,
      isCustomizable: false
    },
    seo: {
      title: "Kaleidoscope Aquamarine Earrings - 18K Yellow Gold with Baguette Diamonds | Parisa London",
      description: "Embrace serene elegance with our Kaleidoscope Aquamarine Earrings. 18K yellow gold with aquamarine and baguette diamonds. Free UK shipping.",
      keywords: ["aquamarine earrings", "yellow gold earrings", "baguette diamond earrings", "elegant jewelry", "luxury earrings"]
    },
    shipping: {
      freeShipping: true,
      weight: 6.8,
      dimensions: {
        length: 3,
        width: 3,
        height: 1
      }
    },
    relatedProducts: ["kaleidoscope-002", "kaleidoscope-012"],
    createdAt: "2024-01-26T10:00:00Z",
    updatedAt: "2024-01-26T10:00:00Z"
  },
  {
    id: "kaleidoscope-021",
    sku: "KAL-NECK-021",
    name: "Kaleidoscope Emerald Tennis Necklace",
    slug: "kaleidoscope-emerald-tennis-necklace",
    description: {
      short: "Elegant emerald tennis necklace in 18K yellow gold",
      long: "Discover timeless sophistication with our Kaleidoscope Emerald Tennis Necklace. This stunning piece features magnificent emeralds set in luxurious 18K yellow gold in a classic tennis necklace design. The emeralds' rich green color symbolizes growth and renewal, while the continuous line of gemstones creates a mesmerizing display of elegance. Perfect for those who appreciate the timeless beauty of emeralds and want to make a statement with their jewelry collection."
    },
    price: {
      current: 10850,
      currency: "GBP",
      formatted: "£10,850"
    },
    category: "necklaces",
    collection: "kaleidoscope",
    images: {
      main: kaleidoscope27,
      gallery: [
        kaleidoscope27b,
        kaleidoscope27a
      ],
      thumbnail: kaleidoscope27a
    },
    specifications: {
      metalType: "18K Yellow Gold",
      metalColor: "Yellow Gold",
      stoneType: "Emerald",
      dimensions: {
        width: "42mm",
        height: "32mm",
        weight: "21.8g"
      },
      care: "Clean with soft cloth and mild soap, avoid harsh chemicals"
    },
    inventory: {
      inStock: true,
      quantity: 2,
      stockStatus: "in-stock",
      leadTime: "Ships within 3 weeks. Holidays may affect this time"
    },
    features: [
      "18K yellow gold construction",
      "Emerald centerpiece",
      "Rich green color",
      "Sophisticated geometric design",
      "Delicate chain included",
      "Timeless elegance"
    ],
    tags: ["necklaces", "yellow-gold", "emerald", "tennis-necklace", "sophisticated", "luxury", "elegant"],
    badges: {
      isNew: false,
      isBestseller: false,
      isLimitedEdition: false,
      isCustomizable: false
    },
    seo: {
      title: "Kaleidoscope Emerald Tennis Necklace - 18K Yellow Gold | Parisa London",
      description: "Discover sophistication with our Kaleidoscope Emerald Tennis Necklace. 18K yellow gold with emeralds. Free UK shipping.",
      keywords: ["emerald tennis necklace", "yellow gold necklace", "sophisticated jewelry", "luxury necklace", "tennis necklace"]
    },
    shipping: {
      freeShipping: true,
      weight: 21.8,
      dimensions: {
        length: 5,
        width: 4,
        height: 2
      }
    },
    relatedProducts: ["kaleidoscope-002", "kaleidoscope-004"],
    createdAt: "2024-01-26T10:30:00Z",
    updatedAt: "2024-01-26T10:30:00Z"
  },
  {
    id: "kaleidoscope-023",
    sku: "KAL-NECK-023",
    name: "Kaleidoscope Ruby Tennis Necklace",
    slug: "kaleidoscope-ruby-tennis-necklace",
    description: {
      short: "Luxurious ruby tennis necklace in 18K yellow gold",
      long: "Experience ultimate luxury with our Kaleidoscope Ruby Tennis Necklace. This exquisite piece features a continuous line of stunning rubies set in luxurious 18K yellow gold. The classic tennis necklace design offers timeless elegance and sophistication, with each ruby carefully selected for exceptional quality and vibrant red color. The passionate rubies symbolize love and vitality, making this piece perfect for making a bold statement at special occasions or adding glamorous luxury to your jewelry collection."
    },
    price: {
      current: 10850,
      currency: "GBP",
      formatted: "£10,850"
    },
    category: "necklaces",
    collection: "kaleidoscope",
    images: {
      main: kaleidoscope29,
      gallery: [
        kaleidoscope29b,
        kaleidoscope29a
      ],
      thumbnail: kaleidoscope29a
    },
    specifications: {
      metalType: "18K Yellow Gold",
      metalColor: "Yellow Gold",
      stoneType: "Rubies",
      dimensions: {
        width: "45mm",
        height: "5mm",
        weight: "28.5g"
      },
      care: "Clean with soft cloth and mild soap, avoid harsh chemicals"
    },
    inventory: {
      inStock: true,
      quantity: 3,
      stockStatus: "in-stock",
      leadTime: "Ships within 3 weeks. Holidays may affect this time"
    },
    features: [
      "18K yellow gold construction",
      "Ruby gemstones",
      "Classic tennis necklace design",
      "Continuous line of rubies",
      "Exceptional quality and vibrant color",
      "Timeless elegance",
      "Statement luxury piece"
    ],
    tags: ["necklaces", "yellow-gold", "ruby", "tennis-necklace", "luxury", "statement"],
    badges: {
      isNew: false,
      isBestseller: true,
      isLimitedEdition: false,
      isCustomizable: false
    },
    seo: {
      title: "Kaleidoscope Ruby Tennis Necklace - 18K Yellow Gold | Parisa London",
      description: "Experience ultimate luxury with our Kaleidoscope Ruby Tennis Necklace. 18K yellow gold with continuous line of rubies. Free UK shipping.",
      keywords: ["ruby tennis necklace", "ruby necklace", "yellow gold necklace", "luxury necklace", "statement jewelry", "tennis necklace"]
    },
    shipping: {
      freeShipping: true,
      weight: 28.5,
      dimensions: {
        length: 6,
        width: 5,
        height: 2
      }
    },
    relatedProducts: ["kaleidoscope-011", "kaleidoscope-020"],
    createdAt: "2024-01-26T11:30:00Z",
    updatedAt: "2024-01-26T11:30:00Z"
  },
  {
    id: "kaleidoscope-022",
    sku: "KAL-NECK-022",
    name: "Kaleidoscope Heart Sapphire Necklace",
    slug: "kaleidoscope-heart-sapphire-necklace-baguette",
    description: {
      short: "Romantic heart blue sapphire necklace in 18K white gold with baguette diamonds",
      long: "Express your love with our Kaleidoscope Heart Sapphire Necklace. This romantic piece features a stunning heart-shaped blue sapphire centerpiece set in elegant 18K white gold, accented with brilliant baguette-cut diamonds. The sapphire's rich blue hue symbolizes loyalty, wisdom, and devotion, creating a captivating display that catches the light beautifully. The geometric design creates a modern interpretation of classic romance, making this piece perfect for special occasions or as a meaningful gift for someone special."
    },
    price: {
      current: 7450,
      currency: "GBP",
      formatted: "£7,450"
    },
    category: "necklaces",
    collection: "kaleidoscope",
    images: {
      main: kaleidoscope28,
      gallery: [
        kaleidoscope28b,
        kaleidoscope28a
      ],
      thumbnail: kaleidoscope28a
    },
    specifications: {
      metalType: "18K White Gold",
      metalColor: "White Gold",
      stoneType: "Heart Blue Sapphire & Baguette Diamonds",
      dimensions: {
        width: "40mm",
        height: "38mm",
        weight: "23.2g"
      },
      care: "Clean with soft cloth and mild soap, avoid harsh chemicals"
    },
    inventory: {
      inStock: true,
      quantity: 2,
      stockStatus: "in-stock",
      leadTime: "Ships within 3 weeks. Holidays may affect this time"
    },
    features: [
      "18K white gold construction",
      "Heart-shaped blue sapphire centerpiece",
      "Baguette-cut diamond accents",
      "Rich blue color symbolizing loyalty",
      "Romantic geometric design",
      "Delicate chain included",
      "Perfect for special occasions"
    ],
    tags: ["necklaces", "white-gold", "sapphire", "blue-sapphire", "heart", "romantic", "diamonds", "baguette"],
    badges: {
      isNew: false,
      isLimitedEdition: false,
      isCustomizable: false
    },
    seo: {
      title: "Kaleidoscope Heart Sapphire Necklace - 18K White Gold Baguette Diamonds | Parisa London",
      description: "Express love with our Kaleidoscope Heart Sapphire Necklace. 18K white gold with heart-shaped blue sapphire and baguette diamonds. Free UK shipping.",
      keywords: ["sapphire necklace", "blue sapphire necklace", "heart necklace", "white gold necklace", "baguette diamonds", "romantic jewelry"]
    },
    shipping: {
      freeShipping: true,
      weight: 23.2,
      dimensions: {
        length: 5,
        width: 4,
        height: 2
      }
    },
    relatedProducts: ["kaleidoscope-002", "kaleidoscope-005"],
    createdAt: "2024-01-26T11:00:00Z",
    updatedAt: "2024-01-26T11:00:00Z"
  },
  {
    id: "kaleidoscope-024",
    sku: "KAL-NECK-024",
    name: "Kaleidoscope Ruby Necklace",
    slug: "kaleidoscope-ruby-necklace",
    description: {
      short: "Elegant ruby necklace in 18K yellow gold with geometric design",
      long: "Complete your look with our Kaleidoscope Ruby Necklace. This elegant piece features stunning rubies in a sophisticated geometric design crafted in luxurious 18K yellow gold. The necklace's unique pattern creates a mesmerizing display of light and color, perfectly complementing the Kaleidoscope collection's aesthetic. The rich red hues of the rubies combined with the warm gold create a captivating piece that adds a touch of luxury and sophistication to any ensemble."
    },
    price: {
      current: 6500,
      currency: "GBP",
      formatted: "£6,500"
    },
    category: "necklaces",
    collection: "kaleidoscope",
    images: {
      main: kaleidoscope30,
      gallery: [
        kaleidoscope30b,
        kaleidoscope30a
      ],
      thumbnail: kaleidoscope30a
    },
    specifications: {
      metalType: "18K Yellow Gold",
      metalColor: "Yellow Gold",
      stoneType: "Ruby",
      dimensions: {
        width: "180mm",
        height: "8mm",
        weight: "20.1g"
      },
      care: "Clean with soft cloth and mild soap, avoid harsh chemicals"
    },
    inventory: {
      inStock: true,
      quantity: 3,
      stockStatus: "in-stock",
      leadTime: "Ships within 3 weeks. Holidays may affect this time"
    },
    features: [
      "18K yellow gold construction",
      "Ruby gemstones",
      "Sophisticated geometric design",
      "Elegant style",
      "Luxury design",
      "Modern elegance"
    ],
    tags: ["necklaces", "yellow-gold", "ruby", "geometric", "elegant", "luxury"],
    badges: {
      isNew: false,
      isBestseller: false,
      isLimitedEdition: false,
      isCustomizable: false
    },
    seo: {
      title: "Kaleidoscope Ruby Necklace - 18K Yellow Gold | Parisa London",
      description: "Complete your look with our Kaleidoscope Ruby Necklace. 18K yellow gold with rubies in geometric design. Free UK shipping.",
      keywords: ["ruby necklace", "yellow gold necklace", "geometric necklace", "luxury jewelry", "ruby jewelry"]
    },
    shipping: {
      freeShipping: true,
      weight: 20.1,
      dimensions: {
        length: 7,
        width: 6,
        height: 2
      }
    },
    relatedProducts: ["kaleidoscope-016", "kaleidoscope-017"],
    createdAt: "2024-01-26T12:00:00Z",
    updatedAt: "2024-01-26T12:00:00Z"
  },
  {
    id: "kaleidoscope-031",
    sku: "KAL-EARR-031",
    name: "Kaleidoscope Morganite Earrings",
    slug: "kaleidoscope-morganite-earrings",
    description: {
      short: "Stunning morganite earrings in 18K yellow gold with baguette diamonds",
      long: "Discover the captivating beauty of our Kaleidoscope Morganite Earrings. These exquisite earrings feature lustrous morganite gemstones set in luxurious 18K yellow gold, beautifully accented with brilliant baguette-cut diamonds. The warm peachy-pink tones of the morganite create a sophisticated contrast with the yellow gold, while the baguette diamonds add a touch of sparkle and geometric elegance. Perfect for adding a pop of color and luxury to any ensemble."
    },
    price: {
      current: 5250,
      currency: "GBP",
      formatted: "£5,250"
    },
    category: "earrings",
    collection: "kaleidoscope",
    images: {
      main: kaleidoscope9,
      gallery: [
        kaleidoscope9b,
        kaleidoscope9a
      ],
      thumbnail: kaleidoscope9b
    },
    specifications: {
      metalType: "18K Yellow Gold",
      metalColor: "Yellow Gold",
      stoneType: "Morganite & Baguette Diamonds",
      dimensions: {
        width: "12mm",
        height: "25mm",
        weight: "7.8g"
      },
      care: "Clean with soft cloth and mild soap, avoid harsh chemicals"
    },
    inventory: {
      inStock: true,
      quantity: 5,
      stockStatus: "in-stock",
      leadTime: "Ships within 3 weeks. Holidays may affect this time"
    },
    features: [
      "18K yellow gold construction",
      "Morganite gemstones",
      "Baguette diamond accents",
      "Sophisticated design",
      "Secure post backing",
      "Elegant color palette"
    ],
    tags: ["earrings", "yellow-gold", "morganite", "diamonds", "sophisticated", "elegant"],
    badges: {
      isNew: false,
      isBestseller: false,
      isLimitedEdition: false,
      isCustomizable: false
    },
    seo: {
      title: "Kaleidoscope Morganite Earrings - 18K Yellow Gold | Parisa London",
      description: "Stunning morganite earrings with baguette diamonds in 18K yellow gold. Sophisticated elegance from the Kaleidoscope collection. Free UK shipping.",
      keywords: ["morganite earrings", "yellow gold earrings", "diamond earrings", "kaleidoscope jewelry", "elegant earrings"]
    },
    shipping: {
      freeShipping: true,
      weight: 7.8,
      dimensions: {
        length: 4,
        width: 3,
        height: 1
      }
    },
    relatedProducts: ["kaleidoscope-001", "kaleidoscope-016"],
    createdAt: "2024-11-14T10:00:00Z",
    updatedAt: "2024-11-14T10:00:00Z"
  }
];

// Sort products by category for proper grouping on the shop page
const categoryOrder = ['necklaces', 'earrings', 'rings', 'bracelets'];
const sortedKaleidoscopeProducts = [...kaleidoscopeProducts].sort((a, b) => {
  const aIndex = categoryOrder.indexOf(a.category);
  const bIndex = categoryOrder.indexOf(b.category);
  return aIndex - bIndex;
});

export function getKaleidoscopeProductById(id: string): Product | undefined {
  return sortedKaleidoscopeProducts.find(product => product.id === id);
}

export function getAllKaleidoscopeProducts(): Product[] {
  return sortedKaleidoscopeProducts;
}
