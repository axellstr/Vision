import type { Product } from '../types';

// Import heritage images
import heritage0 from '../../assets/images/heritage/0.png';
import heritage0a from '../../assets/images/heritage/0a.png';
import heritage0b from '../../assets/images/heritage/0b.png';
import heritage1 from '../../assets/images/heritage/1.png';
import heritage1a from '../../assets/images/heritage/1a.png';
import heritage1b from '../../assets/images/heritage/1b.png';
import heritage2 from '../../assets/images/heritage/2.png';
import heritage2a from '../../assets/images/heritage/2a.png';
import heritage2b from '../../assets/images/heritage/2b.png';
import heritage3 from '../../assets/images/heritage/3.png';
import heritage3a from '../../assets/images/heritage/3a.png';
import heritage3b from '../../assets/images/heritage/3b.png';
import heritage4 from '../../assets/images/heritage/4.png';
import heritage4a from '../../assets/images/heritage/4a.png';
import heritage4b from '../../assets/images/heritage/4b.png';
import heritage5 from '../../assets/images/heritage/5.png';
import heritage5a from '../../assets/images/heritage/5a.png';
import heritage5b from '../../assets/images/heritage/5b.png';
import heritage7 from '../../assets/images/heritage/7.png';
import heritage7a from '../../assets/images/heritage/7a.png';
import heritage7b from '../../assets/images/heritage/7b.png';
import heritage8 from '../../assets/images/heritage/8.png';
import heritage8a from '../../assets/images/heritage/8a.png';
import heritage8b from '../../assets/images/heritage/8b.jpg';
import heritage9 from '../../assets/images/heritage/9.png';
import heritage9a from '../../assets/images/heritage/9a.png';
import heritage9b from '../../assets/images/heritage/9b.png';
import heritage10 from '../../assets/images/heritage/10.png';
import heritage10a from '../../assets/images/heritage/10a.png';
import heritage10b from '../../assets/images/heritage/10b.png';
import heritage11 from '../../assets/images/heritage/11.png';
import heritage11a from '../../assets/images/heritage/11a.png';
import heritage11b from '../../assets/images/heritage/11b.png';
import heritage12 from '../../assets/images/heritage/12.png';
import heritage12a from '../../assets/images/heritage/12a.png';
import heritage12b from '../../assets/images/heritage/12b.png';
import heritage13 from '../../assets/images/heritage/13.png';
import heritage13a from '../../assets/images/heritage/13a.png';
import heritage13b from '../../assets/images/heritage/13b.png';
import heritage22 from '../../assets/images/heritage/22.png';
import heritage22a from '../../assets/images/heritage/22a.png';
import heritage22b from '../../assets/images/heritage/22b.png';
import heritage23 from '../../assets/images/heritage/23.png';
import heritage23a from '../../assets/images/heritage/23a.png';
import heritage23b from '../../assets/images/heritage/23b.png';
import heritage33 from '../../assets/images/heritage/33.jpeg';
import heritage34 from '../../assets/images/heritage/34.jpg';
import heritage34a from '../../assets/images/heritage/34a.jpeg';
import heritage34b from '../../assets/images/heritage/34b.jpeg';
import heritage34c from '../../assets/images/heritage/34c.jpeg';
import heritage34h from '../../assets/images/heritage/34h.png';
import heritage35 from '../../assets/images/heritage/35.png';
import heritage35a from '../../assets/images/heritage/35a.png';
import heritage35b from '../../assets/images/heritage/35b.png';

export const heritageProducts: Product[] = [
  {
    id: "heritage-000",
    sku: "HER-EAR-000",
    name: "Blue Sky Persian Turquoise with Diamonds Earrings",
    slug: "blue-sky-persian-turquoise-diamonds-earrings",
    description: {
      short: "Exquisite earrings featuring Persian Turquoise and diamonds in 18K yellow gold",
      long: "Discover the captivating beauty of our Blue Sky Persian Turquoise with Diamonds Earrings. These magnificent pieces showcase the stunning blue hues of authentic Persian Turquoise, elegantly complemented by brilliant diamonds, all set in luxurious 18K yellow gold. The harmonious combination of vibrant turquoise and sparkling diamonds creates a breathtaking statement piece that embodies timeless elegance and exceptional craftsmanship."
    },
    price: {
      current: 14200,
      currency: "GBP",
      formatted: "£14,200"
    },
    category: "earrings",
    collection: "heritage",
    images: {
      main: heritage0,
      gallery: [heritage0b, heritage0a],
      thumbnail: heritage0b
    },
    specifications: {
      metalType: "18K Yellow Gold",
      metalColor: "Yellow Gold",
      stoneType: "Persian Turquoise, Diamonds",
      dimensions: {
        width: "20mm",
        height: "35mm",
        weight: "18g"
      },
      care: "Clean with soft cloth, store in protective case"
    },
    inventory: {
      inStock: true,
      quantity: 1,
      stockStatus: "in-stock",
      leadTime: "Ships within 3 weeks. Holidays may affect this time"
    },
    features: [
      "18K yellow gold construction",
      "Authentic Persian Turquoise",
      "Brilliant diamond accents",
      "Exceptional craftsmanship",
      "Timeless design",
      "Luxurious finish"
    ],
    tags: ["earrings", "yellow-gold", "turquoise", "diamonds", "persian-turquoise", "luxury"],
    badges: {
      isNew: false,
      isBestseller: false,
      isLimitedEdition: false,
      isCustomizable: false
    },
    seo: {
      title: "Blue Sky Persian Turquoise with Diamonds Earrings - 18K Yellow Gold | Parisa London",
      description: "Exquisite Blue Sky Persian Turquoise with Diamonds Earrings in 18K yellow gold. A stunning combination of vibrant turquoise and brilliant diamonds.",
      keywords: ["turquoise earrings", "diamond earrings", "persian turquoise", "yellow gold earrings", "luxury jewelry"]
    },
    shipping: {
      freeShipping: true,
      weight: 18,
      dimensions: {
        length: 5,
        width: 4,
        height: 2
      }
    },
    relatedProducts: ["heritage-001", "heritage-004"],
    createdAt: "2024-12-01T10:00:00Z",
    updatedAt: "2024-12-01T10:00:00Z"
  },
  {
    id: "heritage-001",
    sku: "HER-NECK-001",
    name: "Detachable Blue-Sky Earrings",
    slug: "detachable-blue-sky-earrings",
    description: {
      short: "Elegant earrings featuring Persian Turquoise and Iolite in 18K white gold",
      long: "Experience the beauty of our Detachable Blue-Sky Earrings. These stunning pieces showcase the natural elegance of Persian Turquoise complemented by the deep violet hues of Iolite, all set in luxurious 18K white gold. The detachable feature adds versatility to your styling options, while the sophisticated design creates a timeless treasure perfect for any occasion. Each element is thoughtfully crafted to celebrate fine jewelry making with contemporary appeal."
    },
    price: {
      current: 4320,
      currency: "GBP",
      formatted: "£4,320"
    },
    category: "earrings",
    collection: "heritage",
    images: {
      main: heritage11,
      gallery: [heritage11a, heritage11b],
      thumbnail: heritage11b
    },
    specifications: {
      metalType: "18K White Gold",
      metalColor: "White Gold",
      stoneType: "Persian Turquoise, Iolite",
      dimensions: {
        width: "25mm",
        height: "40mm",
        weight: "22.5g"
      },
      care: "Clean with soft cloth, store in protective case"
    },
    inventory: {
      inStock: true,
      quantity: 4,
      stockStatus: "in-stock",
      leadTime: "Ships within 3 weeks. Holidays may affect this time"
    },
    features: [
      "18K white gold construction",
      "Persian Turquoise centerpiece",
      "Iolite accents",
      "Detachable feature",
      "Versatile styling",
      "Exceptional craftsmanship"
    ],
    tags: ["earrings", "white-gold", "turquoise", "iolite", "detachable", "elegant"],
    badges: {
      isNew: false,
      isBestseller: false,
      isLimitedEdition: false,
      isCustomizable: false
    },
    seo: {
      title: "Detachable Blue-Sky Earrings - 18K White Gold | Parisa London",
      description: "Elegant Detachable Blue-Sky Earrings featuring Persian Turquoise and Iolite in 18K white gold. Versatile luxury jewelry.",
      keywords: ["detachable earrings", "turquoise earrings", "iolite earrings", "white gold earrings", "luxury jewelry"]
    },
    shipping: {
      freeShipping: true,
      weight: 22.5,
      dimensions: {
        length: 5,
        width: 4,
        height: 2
      }
    },
    relatedProducts: ["heritage-004"],
    createdAt: "2024-01-26T10:00:00Z",
    updatedAt: "2024-01-26T14:00:00Z"
  },
  {
    id: "heritage-004",
    sku: "HER-NECK-004",
    name: "Lighting Blue-Sky Collection",
    slug: "lighting-blue-sky-collection",
    description: {
      short: "Elegant necklace featuring Persian Turquoise and Citrine in 18K yellow gold",
      long: "Illuminate your style with our Lighting Blue-Sky Collection necklace. This stunning piece showcases the natural beauty of Persian Turquoise complemented by warm Citrine stones, all set in luxurious 18K yellow gold. The intricate design captures the essence of sky and light, creating a piece that radiates elegance and sophistication. Perfect for special occasions or as a statement piece for everyday luxury."
    },
    price: {
      current: 1850,
      currency: "GBP",
      formatted: "£1,850"
    },
    category: "necklaces",
    collection: "heritage",
    images: {
      main: heritage1,
      gallery: [heritage1a, heritage1b],
      thumbnail: heritage1a
    },
    specifications: {
      metalType: "18K Yellow Gold",
      metalColor: "Yellow Gold",
      stoneType: "Persian Turquoise, Citrine",
      dimensions: {
        width: "35mm",
        height: "45mm",
        weight: "28.5g"
      },
      care: "Clean with soft cloth, avoid exposure to chemicals and perfumes"
    },
    inventory: {
      inStock: true,
      quantity: 3,
      stockStatus: "in-stock",
      leadTime: "Ships within 3 weeks. Holidays may affect this time"
    },
    features: [
      "18K yellow gold construction",
      "Persian Turquoise stones",
      "Citrine accents",
      "Handcrafted design",
      "Luxury finish",
      "Statement piece"
    ],
    tags: ["necklaces", "gold", "turquoise", "citrine", "luxury", "statement"],
    badges: {
      isNew: false,
      isBestseller: false,
      isLimitedEdition: false,
      isCustomizable: false
    },
    seo: {
      title: "Lighting Blue-Sky Collection - 18K Gold Necklace | Parisa London",
      description: "Elegant Lighting Blue-Sky Collection necklace featuring Persian Turquoise and Citrine in 18K yellow gold. Luxury statement piece.",
      keywords: ["gold necklace", "turquoise jewelry", "citrine necklace", "luxury jewelry", "statement necklace"]
    },
    shipping: {
      freeShipping: true,
      weight: 28.5,
      dimensions: {
        length: 6,
        width: 5,
        height: 3
      }
    },
    relatedProducts: ["heritage-005", "heritage-006"],
    createdAt: "2024-01-26T13:00:00Z",
    updatedAt: "2024-01-26T17:00:00Z"
  },
  {
    id: "heritage-005",
    sku: "HER-NECK-005",
    name: "Drop Blue-Sky Necklace",
    slug: "drop-blue-sky-necklace",
    description: {
      short: "Sophisticated drop necklace with Persian Turquoise, Peridots, and Pearl in 18K yellow gold",
      long: "Embrace timeless elegance with our Drop Blue-Sky Necklace. This exquisite piece features a cascading design with Persian Turquoise as the centerpiece, accented by vibrant Peridots and lustrous Pearl. Crafted in 18K yellow gold, this necklace embodies luxury and sophistication. The drop design creates a flattering silhouette that complements any neckline, making it perfect for both formal occasions and everyday elegance."
    },
    price: {
      current: 6850,
      currency: "GBP",
      formatted: "£6,850"
    },
    category: "necklaces",
    collection: "heritage",
    images: {
      main: heritage2,
      gallery: [heritage2a, heritage2b],
      thumbnail: heritage2a
    },
    specifications: {
      metalType: "18K Yellow Gold",
      metalColor: "Yellow Gold",
      stoneType: "Persian Turquoise, Peridots, Pearl",
      dimensions: {
        width: "25mm",
        height: "65mm",
        weight: "32.8g"
      },
      care: "Clean with soft cloth, store separately to avoid scratches"
    },
    inventory: {
      inStock: true,
      quantity: 2,
      stockStatus: "in-stock",
      leadTime: "Ships within 3 weeks. Holidays may affect this time"
    },
    features: [
      "18K yellow gold construction",
      "Persian Turquoise centerpiece",
      "Peridot accents",
      "Pearl detailing",
      "Drop design",
      "Luxury craftsmanship"
    ],
    tags: ["necklaces", "gold", "turquoise", "peridot", "pearl", "drop"],
    badges: {
      isNew: false,
      isBestseller: false,
      isLimitedEdition: false,
      isCustomizable: false
    },
    seo: {
      title: "Drop Blue-Sky Necklace - 18K Gold with Turquoise | Parisa London",
      description: "Sophisticated Drop Blue-Sky Necklace featuring Persian Turquoise, Peridots, and Pearl in 18K yellow gold. Elegant drop design.",
      keywords: ["drop necklace", "turquoise necklace", "peridot jewelry", "pearl necklace", "gold jewelry"]
    },
    shipping: {
      freeShipping: true,
      weight: 32.8,
      dimensions: {
        length: 7,
        width: 4,
        height: 2
      }
    },
    relatedProducts: ["heritage-004", "heritage-006"],
    createdAt: "2024-01-26T13:30:00Z",
    updatedAt: "2024-01-26T17:30:00Z"
  },
  {
    id: "heritage-006",
    sku: "HER-PEND-006",
    name: "Blue-Sky Pendant",
    slug: "blue-sky-pendant",
    description: {
      short: "Classic pendant featuring Persian Turquoise and Diamond in 18K yellow gold",
      long: "Discover the perfect balance of tradition and luxury with our Blue-Sky Pendant. This classic piece showcases the natural beauty of Persian Turquoise enhanced by brilliant Diamond accents, all set in premium 18K yellow gold. The timeless design makes it versatile for any occasion, from casual elegance to formal sophistication. A true investment piece that will be treasured for generations."
    },
    price: {
      current: 4480,
      currency: "GBP",
      formatted: "£4,480"
    },
    category: "necklaces",
    collection: "heritage",
    images: {
      main: heritage3,
      gallery: [heritage3a, heritage3b],
      thumbnail: heritage3a
    },
    specifications: {
      metalType: "18K Yellow Gold",
      metalColor: "Yellow Gold",
      stoneType: "Persian Turquoise, Diamond",
      dimensions: {
        width: "20mm",
        height: "30mm",
        weight: "18.2g"
      },
      care: "Clean with soft cloth, professional cleaning recommended annually"
    },
    inventory: {
      inStock: true,
      quantity: 4,
      stockStatus: "in-stock",
      leadTime: "Ships within 3 weeks. Holidays may affect this time"
    },
    features: [
      "18K yellow gold construction",
      "Persian Turquoise centerpiece",
      "Diamond accents",
      "Classic design",
      "Versatile styling",
      "Investment quality"
    ],
    tags: ["pendants", "gold", "turquoise", "diamond", "classic", "versatile"],
    badges: {
      isNew: false,
      isBestseller: false,
      isLimitedEdition: false,
      isCustomizable: false
    },
    seo: {
      title: "Blue-Sky Pendant - 18K Gold with Turquoise & Diamond | Parisa London",
      description: "Classic Blue-Sky Pendant featuring Persian Turquoise and Diamond in 18K yellow gold. Timeless design for any occasion.",
      keywords: ["pendant", "turquoise pendant", "diamond pendant", "gold pendant", "classic jewelry"]
    },
    shipping: {
      freeShipping: true,
      weight: 18.2,
      dimensions: {
        length: 4,
        width: 3,
        height: 2
      }
    },
    relatedProducts: ["heritage-004", "heritage-005"],
    createdAt: "2024-01-26T14:00:00Z",
    updatedAt: "2024-01-26T18:00:00Z"
  },
  {
    id: "heritage-007",
    sku: "HER-RING-007",
    name: "Lighting Blue-Sky Ring",
    slug: "lighting-blue-sky-ring",
    description: {
      short: "Striking ring featuring Persian Turquoise and Citrine in 18K yellow gold",
      long: "Make a bold statement with our Lighting Blue-Sky Ring. This eye-catching piece combines the natural allure of Persian Turquoise with the warm glow of Citrine, all crafted in luxurious 18K yellow gold. The unique design captures the essence of sky and light, creating a ring that commands attention while maintaining elegance. Perfect for those who appreciate distinctive jewelry with exceptional craftsmanship."
    },
    price: {
      current: 1450,
      currency: "GBP",
      formatted: "£1,450"
    },
    category: "rings",
    collection: "heritage",
    images: {
      main: heritage4,
      gallery: [heritage4a, heritage4b],
      thumbnail: heritage4b
    },
    specifications: {
      metalType: "18K Yellow Gold",
      metalColor: "Yellow Gold",
      stoneType: "Persian Turquoise, Citrine",
      dimensions: {
        width: "15mm",
        height: "12mm",
        weight: "12.8g"
      },
      care: "Clean with soft cloth, avoid exposure to chemicals"
    },
    inventory: {
      inStock: false,
      quantity: 0,
      stockStatus: "out-of-stock",
      leadTime: "Ships within 3 weeks. Holidays may affect this time"
    },
    features: [
      "18K yellow gold construction",
      "Persian Turquoise centerpiece",
      "Citrine accents",
      "Bold design",
      "Statement piece",
      "Exceptional craftsmanship"
    ],
    tags: ["rings", "gold", "turquoise", "citrine", "statement", "bold"],
    badges: {
      isNew: false,
      isBestseller: false,
      isLimitedEdition: false,
      isCustomizable: false
    },
    seo: {
      title: "Lighting Blue-Sky Ring - 18K Gold with Turquoise | Parisa London",
      description: "Striking Lighting Blue-Sky Ring featuring Persian Turquoise and Citrine in 18K yellow gold. Bold statement piece.",
      keywords: ["statement ring", "turquoise ring", "citrine ring", "gold ring", "bold jewelry"]
    },
    shipping: {
      freeShipping: true,
      weight: 12.8,
      dimensions: {
        length: 3,
        width: 2,
        height: 2
      }
    },
    relatedProducts: ["heritage-008", "heritage-009"],
    createdAt: "2024-01-26T14:30:00Z",
    updatedAt: "2024-01-26T18:30:00Z"
  },
  {
    id: "heritage-008",
    sku: "HER-RING-008",
    name: "Blue-Sky Ring",
    slug: "blue-sky-ring",
    description: {
      short: "Elegant ring featuring Persian Turquoise and Diamonds in 18K yellow gold",
      long: "Experience refined luxury with our Blue-Sky Ring. This sophisticated piece showcases the natural beauty of Persian Turquoise enhanced by brilliant Diamond accents, all set in premium 18K yellow gold. The elegant design balances traditional craftsmanship with contemporary appeal, making it perfect for both special occasions and everyday sophistication. A timeless piece that embodies the essence of luxury jewelry."
    },
    price: {
      current: 5500,
      currency: "GBP",
      formatted: "£5,500"
    },
    category: "rings",
    collection: "heritage",
    images: {
      main: heritage5,
      gallery: [heritage5a, heritage5b],
      thumbnail: heritage5b
    },
    specifications: {
      metalType: "18K Yellow Gold",
      metalColor: "Yellow Gold",
      stoneType: "Persian Turquoise, Diamonds",
      dimensions: {
        width: "12mm",
        height: "10mm",
        weight: "11.5g"
      },
      care: "Clean with soft cloth, professional cleaning recommended"
    },
    inventory: {
      inStock: false,
      quantity: 0,
      stockStatus: "out-of-stock",
      leadTime: "Ships within 3 weeks. Holidays may affect this time"
    },
    features: [
      "18K yellow gold construction",
      "Persian Turquoise centerpiece",
      "Diamond accents",
      "Elegant design",
      "Luxury craftsmanship",
      "Timeless appeal"
    ],
    tags: ["rings", "gold", "turquoise", "diamond", "elegant", "luxury"],
    badges: {
      isNew: false,
      isBestseller: false,
      isLimitedEdition: false,
      isCustomizable: false
    },
    seo: {
      title: "Blue-Sky Ring - 18K Gold with Turquoise & Diamonds | Parisa London",
      description: "Elegant Blue-Sky Ring featuring Persian Turquoise and Diamonds in 18K yellow gold. Sophisticated luxury design.",
      keywords: ["luxury ring", "turquoise ring", "diamond ring", "gold ring", "elegant jewelry"]
    },
    shipping: {
      freeShipping: true,
      weight: 11.5,
      dimensions: {
        length: 3,
        width: 2,
        height: 2
      }
    },
    relatedProducts: ["heritage-007", "heritage-009"],
    createdAt: "2024-01-26T15:00:00Z",
    updatedAt: "2024-01-26T19:00:00Z"
  },
  {
    id: "heritage-009",
    sku: "HER-RING-009",
    name: "Blue-Sky Ring",
    slug: "blue-sky-ring-emerald",
    description: {
      short: "Exquisite ring featuring Persian Turquoise, Diamond, and Emerald in 18K yellow gold",
      long: "Indulge in the ultimate luxury with our Blue-Sky Ring featuring Emerald. This magnificent piece combines the natural beauty of Persian Turquoise with brilliant Diamond accents and vibrant Emerald stones, all crafted in premium 18K yellow gold. The rich color palette creates a stunning visual impact while maintaining sophisticated elegance. A true masterpiece for the discerning jewelry connoisseur."
    },
    price: {
      current: 5400,
      currency: "GBP",
      formatted: "£5,400"
    },
    category: "rings",
    collection: "heritage",
    images: {
      main: heritage7,
      gallery: [heritage7a, heritage7b],
      thumbnail: heritage7a
    },
    specifications: {
      metalType: "18K Yellow Gold",
      metalColor: "Yellow Gold",
      stoneType: "Persian Turquoise, Diamond, Emerald",
      dimensions: {
        width: "14mm",
        height: "11mm",
        weight: "14.2g"
      },
      care: "Clean with soft cloth, avoid exposure to chemicals and extreme temperatures"
    },
    inventory: {
      inStock: true,
      quantity: 2,
      stockStatus: "in-stock",
      leadTime: "Ships within 3 weeks. Holidays may affect this time"
    },
    features: [
      "18K yellow gold construction",
      "Persian Turquoise centerpiece",
      "Diamond accents",
      "Emerald stones",
      "Rich color palette",
      "Masterpiece design"
    ],
    tags: ["rings", "gold", "turquoise", "diamond", "emerald", "luxury"],
    badges: {
      isNew: false,
      isBestseller: false,
      isLimitedEdition: false,
      isCustomizable: false
    },
    seo: {
      title: "Blue-Sky Ring with Emerald - 18K Gold Luxury | Parisa London",
      description: "Exquisite Blue-Sky Ring featuring Persian Turquoise, Diamond, and Emerald in 18K yellow gold. Ultimate luxury design.",
      keywords: ["luxury ring", "turquoise ring", "emerald ring", "diamond ring", "premium jewelry"]
    },
    shipping: {
      freeShipping: true,
      weight: 14.2,
      dimensions: {
        length: 3,
        width: 2,
        height: 2
      }
    },
    relatedProducts: ["heritage-007", "heritage-008"],
    createdAt: "2024-01-26T15:30:00Z",
    updatedAt: "2024-01-26T19:30:00Z"
  },
  {
    id: "heritage-010",
    sku: "HER-RING-010",
    name: "Blue-Sky Ring",
    slug: "blue-sky-ring-pearl-diamonds",
    description: {
      short: "Sophisticated ring featuring Persian Turquoise and Pear Cut Diamond in 18K yellow gold",
      long: "Embrace unparalleled elegance with our Blue-Sky Ring featuring Pear Cut Diamond. This sophisticated piece showcases the natural beauty of Persian Turquoise enhanced by lustrous Pear Cut Diamond, all set in premium 18K yellow gold. The unique cut of the diamond creates a distinctive sparkle that complements the turquoise perfectly. A refined piece that embodies luxury and sophistication."
    },
    price: {
      current: 7040,
      currency: "GBP",
      formatted: "£7,040"
    },
    category: "rings",
    collection: "heritage",
    images: {
      main: heritage8,
      gallery: [
        heritage8a,
        heritage8b
      ],
      thumbnail: heritage8a
    },
    specifications: {
      metalType: "18K Yellow Gold",
      metalColor: "Yellow Gold",
      stoneType: "Persian Turquoise, Pear Cut Diamond",
      dimensions: {
        width: "13mm",
        height: "10mm",
        weight: "13.1g"
      },
      care: "Clean with soft cloth, professional cleaning recommended"
    },
    inventory: {
      inStock: true,
      quantity: 4,
      stockStatus: "in-stock",
      leadTime: "Ships within 3 weeks. Holidays may affect this time"
    },
    features: [
      "18K yellow gold construction",
      "Persian Turquoise centerpiece",
      "Pear Cut Diamond",
      "Unique sparkle",
      "Sophisticated design",
      "Refined elegance"
    ],
    tags: ["rings", "gold", "turquoise", "pear cut diamond", "sophisticated", "elegant"],
    badges: {
      isNew: false,
      isBestseller: false,
      isLimitedEdition: false,
      isCustomizable: false
    },
    seo: {
      title: "Blue-Sky Ring with Pear Cut Diamond - 18K Gold | Parisa London",
      description: "Sophisticated Blue-Sky Ring featuring Persian Turquoise and Pear Cut Diamond in 18K yellow gold. Refined elegance.",
      keywords: ["pear cut diamond ring", "turquoise ring", "gold ring", "sophisticated jewelry", "elegant ring"]
    },
    shipping: {
      freeShipping: true,
      weight: 13.1,
      dimensions: {
        length: 3,
        width: 2,
        height: 2
      }
    },
    relatedProducts: ["heritage-008", "heritage-009"],
    createdAt: "2024-01-26T16:00:00Z",
    updatedAt: "2024-01-26T20:00:00Z"
  },
  {
    id: "heritage-011",
    sku: "HER-EARR-011",
    name: "Detachable Blue-Sky Club Earrings",
    slug: "detachable-blue-sky-club-earrings",
    description: {
      short: "Versatile earrings featuring Persian Turquoise, Diamonds, and Emeralds in 18K yellow gold",
      long: "Discover versatility and luxury with our Detachable Blue-Sky Club Earrings. These innovative pieces feature Persian Turquoise as the centerpiece, enhanced by brilliant Diamonds and vibrant Emeralds, all crafted in premium 18K yellow gold. The detachable design allows for multiple styling options, from elegant studs to dramatic drops. Perfect for those who appreciate both functionality and exceptional beauty in their jewelry."
    },
    price: {
      current: 10800,
      currency: "GBP",
      formatted: "£10,800"
    },
    category: "earrings",
    collection: "heritage",
    images: {
      main: heritage9,
      gallery: [heritage9a, heritage9b],
      thumbnail: heritage9a
    },
    specifications: {
      metalType: "18K Yellow Gold",
      metalColor: "Yellow Gold",
      stoneType: "Persian Turquoise, Diamonds, Emeralds",
      dimensions: {
        width: "12mm",
        height: "25mm",
        weight: "8.7g"
      },
      care: "Clean with soft cloth, store in protective pouch"
    },
    inventory: {
      inStock: true,
      quantity: 3,
      stockStatus: "in-stock",
      leadTime: "Ships within 3 weeks. Holidays may affect this time"
    },
    features: [
      "18K yellow gold construction",
      "Persian Turquoise centerpiece",
      "Diamond accents",
      "Emerald stones",
      "Detachable design",
      "Versatile styling"
    ],
    tags: ["earrings", "gold", "turquoise", "diamond", "emerald", "detachable"],
    badges: {
      isNew: false,
      isBestseller: false,
      isLimitedEdition: false,
      isCustomizable: false
    },
    seo: {
      title: "Detachable Blue-Sky Club Earrings - 18K Gold | Parisa London",
      description: "Versatile Detachable Blue-Sky Club Earrings featuring Persian Turquoise, Diamonds, and Emeralds in 18K yellow gold.",
      keywords: ["detachable earrings", "turquoise earrings", "diamond earrings", "emerald earrings", "versatile jewelry"]
    },
    shipping: {
      freeShipping: true,
      weight: 8.7,
      dimensions: {
        length: 3,
        width: 2,
        height: 1
      }
    },
    relatedProducts: ["heritage-012", "heritage-014"],
    createdAt: "2024-01-26T16:30:00Z",
    updatedAt: "2024-01-26T20:30:00Z"
  },
  {
    id: "heritage-012",
    sku: "HER-EARR-012",
    name: "Detachable Blue-Sky Earrings",
    slug: "detachable-blue-sky-earrings",
    description: {
      short: "Classic earrings featuring Persian Turquoise in 18K yellow gold",
      long: "Embrace timeless elegance with our Detachable Blue-Sky Earrings. These classic pieces showcase the natural beauty of Persian Turquoise in a sophisticated design, all crafted in premium 18K yellow gold. The detachable feature adds versatility to your styling options, while the clean lines ensure they complement any outfit. Perfect for those who appreciate understated luxury and exceptional craftsmanship."
    },
    price: {
      current: 3250,
      currency: "GBP",
      formatted: "£3,250"
    },
    category: "earrings",
    collection: "heritage",
    images: {
      main: heritage10,
      gallery: [heritage10a, heritage10b],
      thumbnail: heritage10a
    },
    specifications: {
      metalType: "18K Yellow Gold",
      metalColor: "Yellow Gold",
      stoneType: "Persian Turquoise",
      dimensions: {
        width: "10mm",
        height: "20mm",
        weight: "6.2g"
      },
      care: "Clean with soft cloth, store separately"
    },
    inventory: {
      inStock: true,
      quantity: 5,
      stockStatus: "in-stock",
      leadTime: "Ships within 3 weeks. Holidays may affect this time"
    },
    features: [
      "18K yellow gold construction",
      "Persian Turquoise centerpiece",
      "Classic design",
      "Detachable feature",
      "Versatile styling",
      "Understated luxury"
    ],
    tags: ["earrings", "gold", "turquoise", "classic", "detachable", "elegant"],
    badges: {
      isNew: false,
      isBestseller: false,
      isLimitedEdition: false,
      isCustomizable: false
    },
    seo: {
      title: "Detachable Blue-Sky Earrings - 18K Gold Turquoise | Parisa London",
      description: "Classic Detachable Blue-Sky Earrings featuring Persian Turquoise in 18K yellow gold. Timeless elegance with versatility.",
      keywords: ["classic earrings", "turquoise earrings", "gold earrings", "detachable earrings", "elegant jewelry"]
    },
    shipping: {
      freeShipping: true,
      weight: 6.2,
      dimensions: {
        length: 3,
        width: 2,
        height: 1
      }
    },
    relatedProducts: ["heritage-011", "heritage-014"],
    createdAt: "2024-01-26T17:00:00Z",
    updatedAt: "2024-01-26T21:00:00Z"
  },
  {
    id: "heritage-013",
    sku: "HER-EARR-013",
    name: "Diamond Blue Sky Studs",
    slug: "diamond-blue-sky-studs",
    description: {
      short: "Exquisite stud earrings featuring Persian Turquoise and Diamonds in 18K yellow gold",
      long: "Elevate your style with our Diamond Blue Sky Studs. These exquisite pieces showcase the natural beauty of authentic Persian Turquoise enhanced by brilliant Diamond accents, all crafted in premium 18K yellow gold. The elegant stud design combines traditional craftsmanship with contemporary sophistication, making them perfect for both everyday luxury and special occasions. Each piece is meticulously crafted to highlight the stunning color and quality of the Persian Turquoise, creating a timeless treasure for your collection."
    },
    price: {
      current: 4200,
      currency: "GBP",
      formatted: "£4,200"
    },
    category: "earrings",
    collection: "heritage",
    images: {
      main: heritage13,
      gallery: [heritage13a, heritage13b],
      thumbnail: heritage13a
    },
    specifications: {
      metalType: "18K Yellow Gold",
      metalColor: "Yellow Gold",
      stoneType: "Persian Turquoise, Diamonds",
      dimensions: {
        width: "9mm",
        height: "9mm",
        weight: "5.5g"
      },
      care: "Clean with soft cloth, store in protective pouch, avoid exposure to chemicals"
    },
    inventory: {
      inStock: true,
      quantity: 4,
      stockStatus: "in-stock",
      leadTime: "Ships within 3 weeks. Holidays may affect this time"
    },
    features: [
      "18K yellow gold construction",
      "Authentic Persian Turquoise",
      "Diamond accents",
      "Elegant stud design",
      "Comfortable wear",
      "Luxury craftsmanship"
    ],
    tags: ["earrings", "gold", "turquoise", "diamond", "studs", "persian", "luxury"],
    badges: {
      isNew: false,
      isBestseller: false,
      isLimitedEdition: false,
      isCustomizable: false
    },
    seo: {
      title: "Diamond Blue Sky Studs - 18K Gold | Parisa London",
      description: "Exquisite Diamond Blue Sky Studs in 18K yellow gold. Authentic Persian turquoise enhanced by brilliant diamonds.",
      keywords: ["diamond blue sky studs", "turquoise studs", "diamond studs", "turquoise earrings", "gold studs", "luxury earrings"]
    },
    shipping: {
      freeShipping: true,
      weight: 5.5,
      dimensions: {
        length: 2,
        width: 2,
        height: 1
      }
    },
    relatedProducts: ["heritage-012", "heritage-014"],
    createdAt: "2024-11-12T10:00:00Z",
    updatedAt: "2024-11-12T10:00:00Z"
  },
  {
    id: "heritage-014",
    sku: "HER-EARR-014",
    name: "Detachable Drop-Blue Sky Earrings",
    slug: "detachable-drop-blue-sky-earrings",
    description: {
      short: "Elegant drop earrings featuring Persian Turquoise, Diamonds and Blue Topaz in 18K yellow gold",
      long: "Experience refined luxury with our Detachable Drop-Blue Sky Earrings. These sophisticated pieces showcase the natural beauty of Persian Turquoise enhanced by brilliant Diamond and Blue Topaz accents, all crafted in premium 18K yellow gold. The detachable drop design adds versatility to your styling options, allowing you to transform your look effortlessly. Perfect for special occasions or everyday elegance, these earrings embody sophistication and exceptional craftsmanship."
    },
    price: {
      current: 6450,
      currency: "GBP",
      formatted: "£6,450"
    },
    category: "earrings",
    collection: "heritage",
    images: {
      main: heritage12,
      gallery: [heritage12a, heritage12b],
      thumbnail: heritage12a
    },
    specifications: {
      metalType: "18K Yellow Gold",
      metalColor: "Yellow Gold",
      stoneType: "Persian Turquoise, Diamonds, Blue Topaz",
      dimensions: {
        width: "8mm",
        height: "8mm",
        weight: "4.8g"
      },
      care: "Clean with soft cloth, store in protective pouch"
    },
    inventory: {
      inStock: true,
      quantity: 6,
      stockStatus: "in-stock",
      leadTime: "Ships within 3 weeks. Holidays may affect this time"
    },
    features: [
      "18K yellow gold construction",
      "Persian Turquoise centerpiece",
      "Diamond accents",
      "Blue Topaz accents",
      "Detachable drop design",
      "Versatile styling"
    ],
    tags: ["earrings", "gold", "turquoise", "diamond", "blue-topaz", "detachable", "drop"],
    badges: {
      isNew: false,
      isBestseller: false,
      isLimitedEdition: false,
      isCustomizable: false
    },
    seo: {
      title: "Detachable Drop-Blue Sky Earrings - 18K Gold | Parisa London",
      description: "Elegant Detachable Drop-Blue Sky Earrings featuring Persian Turquoise, Diamonds and Blue Topaz in 18K yellow gold. Versatile luxury.",
      keywords: ["detachable earrings", "drop earrings", "turquoise earrings", "diamond earrings", "blue topaz earrings", "luxury jewelry"]
    },
    shipping: {
      freeShipping: true,
      weight: 4.8,
      dimensions: {
        length: 2,
        width: 2,
        height: 1
      }
    },
    relatedProducts: ["heritage-012", "heritage-013"],
    createdAt: "2024-01-26T18:00:00Z",
    updatedAt: "2024-01-26T22:00:00Z"
  },
  {
    id: "heritage-015",
    sku: "HER-JWLR-015",
    name: "Blue Sapphire and Diamonds Ring",
    slug: "blue-sapphire-diamonds-ring",
    description: {
      short: "Exquisite ring featuring Blue Sapphire, Persian Turquoise and Diamonds in 18K yellow gold",
      long: "Discover the beauty of our Blue Sapphire and Diamonds Ring, a stunning example of luxury jewelry craftsmanship. This exquisite piece showcases the rich blue hue of premium sapphires complemented by the natural elegance of Persian Turquoise and enhanced by brilliant diamond accents, all set in 18K yellow gold. Each element is carefully crafted to create a timeless treasure that embodies elegance and sophistication. Perfect for those who appreciate exceptional quality and the allure of precious gemstones."
    },
    price: {
      current: 6250,
      currency: "GBP",
      formatted: "£6,250"
    },
    category: "rings",
    collection: "heritage",
    images: {
      main: heritage34,
      gallery: [heritage34h, heritage34a, heritage34b, heritage34c],
      thumbnail: heritage34
    },
    specifications: {
      metalType: "18K Yellow Gold",
      metalColor: "Yellow Gold",
      stoneType: "Blue Sapphire, Persian Turquoise, Diamonds",
      dimensions: {
        width: "30mm",
        height: "40mm",
        weight: "25.0g"
      },
      care: "Clean with soft cloth, store in protective case, avoid exposure to chemicals"
    },
    inventory: {
      inStock: true,
      quantity: 3,
      stockStatus: "in-stock",
      leadTime: "Ships within 3 weeks. Holidays may affect this time"
    },
    features: [
      "18K yellow gold construction",
      "Blue Sapphire centerpiece",
      "Persian Turquoise accents",
      "Diamond accents",
      "Luxury design",
      "Exceptional craftsmanship"
    ],
    tags: ["rings", "gold", "sapphire", "turquoise", "diamond", "luxury", "elegant"],
    badges: {
      isNew: false,
      isBestseller: false,
      isLimitedEdition: false,
      isCustomizable: false
    },
    seo: {
      title: "Blue Sapphire and Diamonds Ring - 18K Gold | Parisa London",
      description: "Exquisite Blue Sapphire and Diamonds Ring in 18K yellow gold. Premium sapphires enhanced by brilliant diamonds.",
      keywords: ["sapphire ring", "diamond ring", "blue sapphire ring", "gold ring", "luxury jewelry"]
    },
    shipping: {
      freeShipping: true,
      weight: 25.0,
      dimensions: {
        length: 5,
        width: 4,
        height: 3
      }
    },
    relatedProducts: ["heritage-014"],
    createdAt: "2024-11-12T10:30:00Z",
    updatedAt: "2024-11-12T10:30:00Z"
  },
  {
    id: "heritage-017",
    sku: "HER-EARR-017",
    name: "Persian Turquoise and Emerald Ring",
    slug: "persian-turquoise-emerald-ring",
    description: {
      short: "Exquisite ring featuring Persian Turquoise and Emerald in 18K yellow gold",
      long: "Embrace timeless elegance with our Persian Turquoise and Emerald Ring. This sophisticated piece showcases the natural beauty of Persian Turquoise complemented by the vibrant green hues of Emerald, all crafted in premium 18K yellow gold. The refined design embodies the essence of traditional jewelry craftsmanship while maintaining contemporary appeal. A must-have addition to any jewelry collection that values heritage and quality."
    },
    price: {
      current: 3980,
      currency: "GBP",
      formatted: "£3,980"
    },
    category: "rings",
    collection: "heritage",
    images: {
      main: heritage22,
      gallery: [heritage22a, heritage22b],
      thumbnail: heritage22b
    },
    specifications: {
      metalType: "18K Yellow Gold",
      metalColor: "Yellow Gold",
      stoneType: "Persian Turquoise, Emerald",
      dimensions: {
        width: "8mm",
        height: "8mm",
        weight: "5.2g"
      },
      care: "Clean with soft cloth, store in protective pouch"
    },
    inventory: {
      inStock: true,
      quantity: 5,
      stockStatus: "in-stock",
      leadTime: "Ships within 3 weeks. Holidays may affect this time"
    },
    features: [
      "18K yellow gold construction",
      "Persian Turquoise centerpiece",
      "Emerald accents",
      "Refined design",
      "Luxury craftsmanship",
      "Timeless elegance"
    ],
    tags: ["rings", "gold", "turquoise", "emerald", "luxury", "elegant"],
    badges: {
      isNew: false,
      isBestseller: false,
      isLimitedEdition: false,
      isCustomizable: false
    },
    seo: {
      title: "Persian Turquoise and Emerald Ring - 18K Gold | Parisa London",
      description: "Exquisite Persian Turquoise and Emerald Ring in 18K yellow gold. Natural turquoise with vibrant emerald accents.",
      keywords: ["turquoise ring", "emerald ring", "persian turquoise ring", "gold ring", "luxury jewelry"]
    },
    shipping: {
      freeShipping: true,
      weight: 5.2,
      dimensions: {
        length: 2,
        width: 2,
        height: 1
      }
    },
    relatedProducts: ["heritage-014", "heritage-019"],
    createdAt: "2024-01-26T19:30:00Z",
    updatedAt: "2024-01-26T23:30:00Z"
  },
  {
    id: "heritage-019",
    sku: "HER-EARR-019",
    name: "Persian Turquoise and Emerald Earrings",
    slug: "persian-turquoise-emerald-earrings",
    description: {
      short: "Exquisite earrings featuring Persian Turquoise and Emerald in 18K yellow gold",
      long: "Embrace timeless elegance with our Persian Turquoise and Emerald Earrings. These sophisticated pieces showcase the natural beauty of Persian Turquoise complemented by the vibrant green hues of Emerald, all crafted in premium 18K yellow gold. The refined design embodies the essence of traditional jewelry craftsmanship while maintaining contemporary appeal. A must-have addition to any jewelry collection that values heritage and quality."
    },
    price: {
      current: 4850,
      currency: "GBP",
      formatted: "£4,850"
    },
    category: "earrings",
    collection: "heritage",
    images: {
      main: heritage23,
      gallery: [heritage23a, heritage23b],
      thumbnail: heritage23a
    },
    specifications: {
      metalType: "18K Yellow Gold",
      metalColor: "Yellow Gold",
      stoneType: "Persian Turquoise, Emerald",
      dimensions: {
        width: "12mm",
        height: "25mm",
        weight: "8.5g"
      },
      care: "Clean with soft cloth, store in protective pouch"
    },
    inventory: {
      inStock: true,
      quantity: 5,
      stockStatus: "in-stock",
      leadTime: "Ships within 3 weeks. Holidays may affect this time"
    },
    features: [
      "18K yellow gold construction",
      "Persian Turquoise centerpiece",
      "Emerald accents",
      "Refined design",
      "Luxury craftsmanship",
      "Timeless elegance"
    ],
    tags: ["earrings", "gold", "turquoise", "emerald", "luxury", "elegant"],
    badges: {
      isNew: false,
      isBestseller: false,
      isLimitedEdition: false,
      isCustomizable: false
    },
    seo: {
      title: "Persian Turquoise and Emerald Earrings - 18K Gold | Parisa London",
      description: "Exquisite Persian Turquoise and Emerald Earrings in 18K yellow gold. Natural turquoise with vibrant emerald accents.",
      keywords: ["turquoise earrings", "emerald earrings", "persian turquoise earrings", "gold earrings", "luxury jewelry"]
    },
    shipping: {
      freeShipping: true,
      weight: 8.5,
      dimensions: {
        length: 3,
        width: 2,
        height: 1
      }
    },
    relatedProducts: ["heritage-017", "heritage-018"],
    createdAt: "2024-12-01T10:00:00Z",
    updatedAt: "2024-12-01T10:00:00Z"
  },
  {
    id: "heritage-018",
    sku: "HER-EARR-018",
    name: "Detachable Persian Turquoise with Emeralds and Diamonds Earrings",
    slug: "detachable-persian-turquoise-emeralds-diamonds-earrings",
    description: {
      short: "Exquisite detachable earrings featuring Persian Turquoise, Emeralds and Diamonds in 18K yellow gold",
      long: "Discover the perfect blend of luxury and versatility with our Detachable Persian Turquoise with Emeralds and Diamonds Earrings. These exquisite pieces showcase the natural beauty of Persian Turquoise complemented by vibrant Emeralds and brilliant Diamonds, all crafted in premium 18K yellow gold. The detachable design offers multiple styling options, making them perfect for both special occasions and elegant everyday wear. Each element is meticulously crafted to embody exceptional quality and timeless sophistication."
    },
    price: {
      current: 11250,
      currency: "GBP",
      formatted: "£11,250"
    },
    category: "earrings",
    collection: "heritage",
    images: {
      main: heritage35,
      gallery: [heritage35a, heritage35b],
      thumbnail: heritage35b
    },
    specifications: {
      metalType: "18K Yellow Gold",
      metalColor: "Yellow Gold",
      stoneType: "Persian Turquoise, Emeralds, Diamonds",
      dimensions: {
        width: "12mm",
        height: "18mm",
        weight: "7.2g"
      },
      care: "Clean with soft cloth, store in protective pouch"
    },
    inventory: {
      inStock: true,
      quantity: 4,
      stockStatus: "in-stock",
      leadTime: "Ships within 3 weeks. Holidays may affect this time"
    },
    features: [
      "18K yellow gold construction",
      "Persian Turquoise centerpiece",
      "Emerald accents",
      "Diamond accents",
      "Detachable design",
      "Exceptional craftsmanship"
    ],
    tags: ["earrings", "gold", "turquoise", "emerald", "diamond", "detachable", "luxury"],
    badges: {
      isNew: false,
      isBestseller: false,
      isLimitedEdition: false,
      isCustomizable: false
    },
    seo: {
      title: "Detachable Persian Turquoise with Emeralds and Diamonds Earrings | Parisa London",
      description: "Exquisite Detachable Persian Turquoise with Emeralds and Diamonds Earrings in 18K yellow gold. Versatile luxury jewelry.",
      keywords: ["detachable earrings", "turquoise earrings", "emerald earrings", "diamond earrings", "luxury jewelry"]
    },
    shipping: {
      freeShipping: true,
      weight: 7.2,
      dimensions: {
        length: 3,
        width: 2,
        height: 1
      }
    },
    relatedProducts: ["heritage-012"],
    createdAt: "2024-01-26T20:00:00Z",
    updatedAt: "2024-01-26T20:00:00Z"
  }
];

// Sort products by category for proper grouping on the shop page
const categoryOrder = ['necklaces', 'earrings', 'rings', 'bracelets'];
const sortedHeritageProducts = [...heritageProducts].sort((a, b) => {
  const aIndex = categoryOrder.indexOf(a.category);
  const bIndex = categoryOrder.indexOf(b.category);
  return aIndex - bIndex;
});

export function getHeritageProductById(id: string): Product | undefined {
  return sortedHeritageProducts.find(product => product.id === id);
}

export function getAllHeritageProducts(): Product[] {
  return sortedHeritageProducts;
}
