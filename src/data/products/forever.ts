import type { Product } from '../types';

// Import Forever collection assets (initial necklaces)
import imgA from '../../assets/images/forever/a.jpeg';
import imgB from '../../assets/images/forever/b.jpeg';
import imgC from '../../assets/images/forever/c.jpeg';
import imgD from '../../assets/images/forever/d.jpeg';
import imgE from '../../assets/images/forever/e.jpeg';
import imgF from '../../assets/images/forever/f.jpeg';
import imgG from '../../assets/images/forever/g.jpeg';
import imgH from '../../assets/images/forever/h.jpeg';
import imgI from '../../assets/images/forever/i.jpeg';
import imgJ from '../../assets/images/forever/j.jpeg';
import imgK from '../../assets/images/forever/k.jpeg';
import imgL from '../../assets/images/forever/l.jpeg';
import imgM from '../../assets/images/forever/m.jpeg';
import imgN from '../../assets/images/forever/n.jpeg';
import imgO from '../../assets/images/forever/o.jpeg';
import imgP from '../../assets/images/forever/p.jpeg';
import imgQ from '../../assets/images/forever/q.jpeg';
import imgR from '../../assets/images/forever/r.jpeg';
import imgS from '../../assets/images/forever/s.jpeg';
import imgT from '../../assets/images/forever/t.jpeg';
import imgU from '../../assets/images/forever/u.jpeg';
import imgV from '../../assets/images/forever/v.jpeg';
import imgW from '../../assets/images/forever/w.jpeg';
import imgX from '../../assets/images/forever/x.jpeg';
import imgZ from '../../assets/images/forever/z.jpeg';
import diamondStudYellowImage from '../../assets/images/forever/gold.jpg';
import diamondStudYellowa from '../../assets/images/forever/golda.png';
import diamondStudYellowb from '../../assets/images/forever/goldb.png';
import diamondStudWhiteImage from '../../assets/images/forever/silver.png';
import diamondStudWhitea from '../../assets/images/forever/silvera.png';
import diamondStudWhiteb from '../../assets/images/forever/silverb.png';
import braceletSilver from '../../assets/images/forever/forever_one.png';
import braceletSilvera from '../../assets/images/forever/forever_one_a.png';
import braceletSilverb from '../../assets/images/forever/forever_one_b.png';
import braceletGold from '../../assets/images/forever/forever_two.png';
import braceletGolda from '../../assets/images/forever/forever_two_a.png';
import braceletGoldb from '../../assets/images/forever/forever_two_b.png';
import img25 from '../../assets/images/forever/25.jpg';
import img25a from '../../assets/images/forever/25a.png';
import img25b from '../../assets/images/forever/25b.png';
import img10 from '../../assets/images/forever/10.png';
import img10a from '../../assets/images/forever/10a.png';
import img10b from '../../assets/images/forever/10b.png';
import img11 from '../../assets/images/forever/11.png';
import img11a from '../../assets/images/forever/11a.png';
import img11b from '../../assets/images/forever/11b.png';
import img20 from '../../assets/images/forever/20.png';
import img20a from '../../assets/images/forever/20a.png';
import img20b from '../../assets/images/forever/20b.png';

const nowIso = new Date().toISOString();

// Export image map for client-side access
export const initialImagesMap = {
  'a': imgA,
  'b': imgB,
  'c': imgC,
  'd': imgD,
  'e': imgE,
  'f': imgF,
  'g': imgG,
  'h': imgH,
  'i': imgI,
  'j': imgJ,
  'k': imgK,
  'l': imgL,
  'm': imgM,
  'n': imgN,
  'o': imgO,
  'p': imgP,
  'q': imgQ,
  'r': imgR,
  's': imgS,
  't': imgT,
  'u': imgU,
  'v': imgV,
  'w': imgW,
  'x': imgX,
  'z': imgZ,
};

const initialImages: { letter: string; image: any }[] = [
  { letter: 'A', image: imgA },
  { letter: 'B', image: imgB },
  { letter: 'C', image: imgC },
  { letter: 'D', image: imgD },
  { letter: 'E', image: imgE },
  { letter: 'F', image: imgF },
  { letter: 'G', image: imgG },
  { letter: 'H', image: imgH },
  { letter: 'I', image: imgI },
  { letter: 'J', image: imgJ },
  { letter: 'K', image: imgK },
  { letter: 'L', image: imgL },
  { letter: 'M', image: imgM },
  { letter: 'N', image: imgN },
  { letter: 'O', image: imgO },
  { letter: 'P', image: imgP },
  { letter: 'Q', image: imgQ },
  { letter: 'R', image: imgR },
  { letter: 'S', image: imgS },
  { letter: 'T', image: imgT },
  { letter: 'U', image: imgU },
  { letter: 'V', image: imgV },
  { letter: 'W', image: imgW },
  { letter: 'X', image: imgX },
  // Y missing in assets
  { letter: 'Z', image: imgZ },
];

const initialOptions = initialImages.map(({ letter, image }) => ({
  id: letter.toLowerCase(),
  label: letter,
  image,
}));

const initialNecklaceProduct: Product = {
  id: 'forever-initial-necklace',
  sku: 'FOR-NECK-INIT',
  name: 'Forever Initial Necklace',
  slug: 'forever-initial-necklace',
  description: {
    short: 'Personalized initial necklace A–Z in 18K yellow gold. Choose your letter.',
    long: 'A timeless initial necklace available from A to Z, crafted in luxurious 18K yellow gold. Elegant and personal, designed for everyday wear and meaningful gifting. Each initial pendant is carefully crafted to showcase the beauty of the letter while maintaining a refined, sophisticated aesthetic. Select your initial to preview the pendant and make this piece uniquely yours.'
  },
  price: {
    current: 750,
    currency: 'GBP',
    formatted: '£750'
  },
  category: 'necklaces',
  collection: 'forever',
  images: {
    // Default to first available option for SSR/OG
    main: initialOptions[0].image,
    gallery: [initialOptions[0].image, initialOptions[0].image],
    thumbnail: initialOptions[0].image
  },
  variants: {
    name: 'Initial',
    options: initialOptions,
    defaultOptionId: initialOptions[0].id,
  },
  specifications: {
    metalType: '18K Yellow Gold',
    metalColor: 'Yellow Gold',
    dimensions: {
      width: '20mm',
      height: '20mm',
      weight: '6.0g'
    },
    care: 'Clean with soft cloth and mild soap, avoid harsh chemicals'
  },
  inventory: {
    inStock: true,
    quantity: 100,
    stockStatus: 'in-stock',
    leadTime: 'Ships within 3 weeks. Holidays may affect this time'
  },
  features: [
    '18K yellow gold construction',
    'Personalized initial pendant',
    'A-Z letter options',
    'Everyday wear comfort',
    'Adjustable chain length'
  ],
  tags: ['necklaces', 'initial', 'personalized', 'gift'],
  badges: {
    isNew: false,
    isBestseller: false
  },
  seo: {
    title: 'Forever Initial Necklace | Parisa London',
    description: 'Personalized initial necklace from the Forever collection. Elegant, meaningful and perfect for gifting. Free UK shipping.',
    keywords: ['initial necklace', 'personalized jewelry', 'gift']
  },
  shipping: {
    freeShipping: true,
    weight: 6.0,
    dimensions: {
      length: 4,
      width: 4,
      height: 2
    }
  },
  relatedProducts: [],
  createdAt: nowIso,
  updatedAt: nowIso
};

const braceletProducts: Product[] = [
  {
    id: 'forever-bracelet-silver',
    sku: 'FOR-BRAC-001',
    name: 'Forever Tennis Bracelet – White Gold',
    slug: 'forever-tennis-bracelet-white-gold',
    description: {
      short: 'Diamond tennis bracelet in 18K white gold, available in 3ct or 5ct',
      long: 'A stunning tennis bracelet featuring brilliant diamonds in G-H color and VS2 clarity, expertly set in luxurious 18K white gold. Choose between 3ct or 5ct total diamond weight. This timeless piece from the Forever collection combines classic elegance with exceptional sparkle, perfect for both everyday luxury and special occasions.'
    },
    price: {
      current: 5300,
      currency: 'GBP',
      formatted: '£5,300'
    },
    category: 'bracelets',
    collection: 'forever',
    images: {
      main: braceletSilver,
      gallery: [braceletSilverb, braceletSilvera],
      thumbnail: braceletSilverb
    },
    variants: {
      name: 'Carat Weight',
      options: [
        {
          id: '3ct',
          label: '3.0ct',
          price: 5300,
          priceFormatted: '£5,300'
        },
        {
          id: '5ct',
          label: '5.0ct',
          price: 7800,
          priceFormatted: '£7,800'
        }
      ],
      defaultOptionId: '3ct',
      affectsPrice: true
    },
    specifications: {
      metalType: '18K White Gold',
      metalColor: 'White Gold',
      stoneType: 'Diamonds',
      diamondDetails: '3.0ct total weight, G-H color, VS2 clarity',
      dimensions: {
        width: '4mm',
        height: '4mm',
        weight: '15.0g'
      },
      care: 'Clean with soft cloth and mild soap; avoid harsh chemicals and store separately'
    },
    inventory: {
      inStock: true,
      quantity: 12,
      stockStatus: 'in-stock',
      leadTime: 'Ships within 3 weeks. Holidays may affect this time'
    },
    features: [
      '3.0ct total diamond weight',
      'G-H color, VS2 clarity diamonds',
      '18K white gold setting',
      'Classic tennis bracelet design',
      'Secure clasp closure',
      'Timeless elegance'
    ],
    tags: ['bracelets', 'white-gold', 'diamond', 'tennis-bracelet', 'luxury'],
    badges: {
      isNew: false,
      isBestseller: false
    },
    seo: {
      title: 'Forever Tennis Bracelet 3ct White Gold | Parisa London',
      description: 'Stunning 3ct diamond tennis bracelet in 18K white gold. G-H color, VS2 clarity diamonds from the Forever collection. Free UK shipping.',
      keywords: ['tennis bracelet', 'diamond bracelet', 'white gold bracelet', '3ct diamonds']
    },
    shipping: {
      freeShipping: true,
      weight: 15.0,
      dimensions: {
        length: 8,
        width: 8,
        height: 3
      }
    },
    relatedProducts: [],
    createdAt: nowIso,
    updatedAt: nowIso
  },
  {
    id: 'forever-bracelet-gold',
    sku: 'FOR-BRAC-002',
    name: 'Forever Tennis Bracelet – Yellow Gold',
    slug: 'forever-tennis-bracelet-yellow-gold',
    description: {
      short: 'Diamond tennis bracelet in 18K yellow gold, available in 3ct or 5ct',
      long: 'An exquisite tennis bracelet showcasing brilliant diamonds in G-H color and VS2 clarity, beautifully set in warm 18K yellow gold. Choose between 3ct or 5ct total diamond weight. This luxurious piece from the Forever collection radiates timeless sophistication and exceptional brilliance, making it the perfect statement for any occasion.'
    },
    price: {
      current: 5300,
      currency: 'GBP',
      formatted: '£5,300'
    },
    category: 'bracelets',
    collection: 'forever',
    images: {
      main: braceletGold,
      gallery: [braceletGoldb, braceletGolda],
      thumbnail: braceletGoldb
    },
    variants: {
      name: 'Carat Weight',
      options: [
        {
          id: '3ct',
          label: '3.0ct',
          price: 5300,
          priceFormatted: '£5,300'
        },
        {
          id: '5ct',
          label: '5.0ct',
          price: 7800,
          priceFormatted: '£7,800'
        }
      ],
      defaultOptionId: '3ct',
      affectsPrice: true
    },
    specifications: {
      metalType: '18K Yellow Gold',
      metalColor: 'Yellow Gold',
      stoneType: 'Diamonds',
      diamondDetails: '3.0ct total weight, G-H color, VS2 clarity',
      dimensions: {
        width: '4mm',
        height: '4mm',
        weight: '16.0g'
      },
      care: 'Clean with soft cloth and mild soap; avoid harsh chemicals and store separately'
    },
    inventory: {
      inStock: true,
      quantity: 10,
      stockStatus: 'in-stock',
      leadTime: 'Ships within 3 weeks. Holidays may affect this time'
    },
    features: [
      '3.0ct total diamond weight',
      'G-H color, VS2 clarity diamonds',
      '18K yellow gold setting',
      'Classic tennis bracelet design',
      'Secure clasp closure',
      'Timeless elegance'
    ],
    tags: ['bracelets', 'yellow-gold', 'diamond', 'tennis-bracelet', 'luxury'],
    badges: {
      isNew: false,
      isBestseller: false
    },
    seo: {
      title: 'Forever Tennis Bracelet 3ct Yellow Gold | Parisa London',
      description: 'Stunning 3ct diamond tennis bracelet in 18K yellow gold. G-H color, VS2 clarity diamonds from the Forever collection. Free UK shipping.',
      keywords: ['tennis bracelet', 'diamond bracelet', 'yellow gold bracelet', '3ct diamonds']
    },
    shipping: {
      freeShipping: true,
      weight: 16.0,
      dimensions: {
        length: 8,
        width: 8,
        height: 3
      }
    },
    relatedProducts: [],
    createdAt: nowIso,
    updatedAt: nowIso
  }
];

const earringProducts: Product[] = [
  {
    id: 'forever-diamond-studs-040ct-yellow-gold',
    sku: 'FOR-EARR-040',
    name: 'Diamond Stud Earrings - Yellow gold',
    slug: 'diamond-stud-earrings-040ct-yellow-gold',
    description: {
      short: '0.40ct G/SI diamond studs set in rich 18k yellow gold.',
      long: 'Celebrate everyday brilliance with these 0.40ct diamond stud earrings, matched to G colour and SI clarity for a bright, lively sparkle. Each diamond is secured in a meticulously crafted 18k yellow gold four-claw setting with screw-back clasps for comfort and peace of mind. A timeless addition to the Forever collection, ideal for daily elegance or thoughtful gifting.'
    },
    price: {
      current: 1650,
      currency: 'GBP',
      formatted: '£1,650'
    },
    category: 'earrings',
    collection: 'forever',
    images: {
      main: diamondStudYellowImage,
      gallery: [diamondStudYellowb, diamondStudYellowa],
      thumbnail: diamondStudYellowb
    },
    specifications: {
      metalType: '18k Gold',
      metalColor: 'Yellow Gold',
      stoneType: 'G Colour / SI Clarity Diamonds',
      dimensions: {
        width: '5.2mm',
        height: '5.2mm',
        weight: '2.1g'
      },
      care: 'Use a non-abrasive diamond cleaner and store separately to avoid scratches'
    },
    inventory: {
      inStock: true,
      quantity: 8,
      stockStatus: 'in-stock',
      leadTime: 'Ships within 3 weeks. Holidays may affect this time'
    },
    features: [
      '0.40ct total diamond weight matched to G/SI quality',
      'Secure four-claw 18k yellow gold settings',
      'Screw-back posts for confident everyday wear'
    ],
    tags: ['earrings', 'yellow-gold', 'diamond-studs', 'forever', 'gift'],
    badges: {
      isNew: false,
      isBestseller: false
    },
    seo: {
      title: '0.40ct Diamond Stud Earrings in 18k Yellow Gold | Parisa London',
      description: 'Discover 0.40ct G/SI diamond stud earrings in 18k yellow gold from the Forever collection. Timeless sparkle with secure screw-back fittings.',
      keywords: ['diamond stud earrings', 'yellow gold studs', '0.40ct diamonds', 'G SI diamonds']
    },
    shipping: {
      freeShipping: true,
      weight: 2.1,
      dimensions: {
        length: 4,
        width: 4,
        height: 3
      }
    },
    relatedProducts: ['forever-diamond-studs-140ct-white-gold'],
    createdAt: nowIso,
    updatedAt: nowIso
  },
  {
    id: 'forever-diamond-studs-140ct-white-gold',
    sku: 'FOR-EARR-140',
    name: 'Diamond Stud Earrings - White gold',
    slug: 'diamond-stud-earrings-140ct-white-gold',
    description: {
      short: '1.40ct premium diamond studs crafted in luminous 18k white gold.',
      long: 'Command attention with 1.40ct total weight diamond studs, precision matched for exceptional fire and scintillation. Each premium diamond sits in a classic 18k white gold setting that enhances the stone’s luminosity while providing secure screw-back closures. This elevated Forever collection staple is a statement of enduring luxury, perfect for milestone celebrations.'
    },
    price: {
      current: 6150,
      currency: 'GBP',
      formatted: '£6,150'
    },
    category: 'earrings',
    collection: 'forever',
    images: {
      main: diamondStudWhiteImage,
      gallery: [diamondStudWhiteb, diamondStudWhitea],
      thumbnail: diamondStudWhiteb
    },
    specifications: {
      metalType: '18k Gold',
      metalColor: 'White Gold',
      stoneType: 'Premium Cut Diamonds',
      dimensions: {
        width: '6.8mm',
        height: '6.8mm',
        weight: '2.6g'
      },
      care: 'Clean regularly with a gentle diamond solution and re-tighten screw backs periodically'
    },
    inventory: {
      inStock: true,
      quantity: 5,
      stockStatus: 'in-stock',
      leadTime: 'Ships within 3 weeks. Holidays may affect this time'
    },
    features: [
      '1.40ct total weight matched premium diamonds',
      '18k white gold mountings with mirror finish',
      'Screw-back fittings for secure luxury wear'
    ],
    tags: ['earrings', 'white-gold', 'diamond-studs', 'luxury', 'milestone-gift'],
    badges: {
      isNew: false,
      isBestseller: false
    },
    seo: {
      title: '1.40ct Diamond Stud Earrings in 18k White Gold | Parisa London',
      description: 'Experience premium 1.40ct diamond stud earrings in 18k white gold from the Forever collection. Brilliant stones, secure screw backs, effortless sophistication.',
      keywords: ['diamond studs', 'white gold earrings', '1.40ct diamonds', 'luxury earrings']
    },
    shipping: {
      freeShipping: true,
      weight: 2.6,
      dimensions: {
        length: 5,
        width: 5,
        height: 3
      }
    },
    relatedProducts: ['forever-diamond-studs-040ct-yellow-gold'],
    createdAt: nowIso,
    updatedAt: nowIso
  }
];

const necklaceProducts: Product[] = [
  {
    id: 'forever-necklace-25',
    sku: 'FOR-NECK-003',
    name: 'Forever Lariat Diamond Necklace',
    slug: 'forever-lariat-diamond-necklace',
    description: {
      short: 'Elegant lariat diamond necklace in 18K yellow gold from the Forever collection',
      long: 'A timeless and elegant lariat diamond necklace from the Forever collection. Crafted in luxurious 18K yellow gold and adorned with brilliant diamonds, this exquisite piece embodies eternal elegance and sophistication. The lariat design offers versatile styling options, while the diamonds add exceptional sparkle and luxury. Perfect for special occasions or as a meaningful gift that represents enduring love and commitment.'
    },
    price: {
      current: 6900,
      currency: 'GBP',
      formatted: '£6,900'
    },
    category: 'necklaces',
    collection: 'forever',
    images: {
      main: img25,
      gallery: [img25a, img25b],
      thumbnail: img25b
    },
    specifications: {
      metalType: '18K Yellow Gold',
      metalColor: 'Yellow Gold',
      stoneType: 'Diamonds',
      dimensions: {
        width: '25mm',
        height: '35mm',
        weight: '8.5g'
      },
      care: 'Clean with soft cloth and mild soap, avoid harsh chemicals'
    },
    inventory: {
      inStock: true,
      quantity: 8,
      stockStatus: 'in-stock',
      leadTime: 'Ships within 3 weeks. Holidays may affect this time'
    },
    features: [
      '18K yellow gold construction',
      'Diamond accents',
      'Timeless lariat design',
      'Versatile styling options',
      'Premium craftsmanship',
      'Perfect for special occasions',
      'Meaningful gift option'
    ],
    tags: ['necklaces', 'gold', 'diamonds', 'lariat', 'elegant', 'forever', 'timeless', 'luxury'],
    badges: {
      isNew: false,
      isBestseller: false
    },
    seo: {
      title: 'Forever Lariat Diamond Necklace - 18K Yellow Gold | Parisa London',
      description: 'Elegant lariat diamond necklace in 18K yellow gold from the Forever collection. Timeless beauty with brilliant diamonds. Free UK shipping.',
      keywords: ['forever necklace', 'lariat necklace', 'diamond necklace', 'gold necklace', 'timeless jewelry', 'lariat', 'luxury necklace']
    },
    shipping: {
      freeShipping: true,
      weight: 8.5,
      dimensions: {
        length: 5,
        width: 4,
        height: 2
      }
    },
    relatedProducts: [],
    createdAt: nowIso,
    updatedAt: nowIso
  },
  {
    id: 'forever-item-10',
    sku: 'FOR-ITEM-010',
    name: 'Forever Round Solitaire Necklace',
    slug: 'forever-round-solitaire-necklace',
    description: {
      short: 'Round solitaire diamond necklace in 18K gold, available in 0.30ct, 0.40ct, or 0.50ct',
      long: 'Discover the timeless elegance of our Forever Round Solitaire Necklace. Featuring a stunning round diamond in G/H color and VS1/VS2 clarity, this exquisite piece showcases the brilliance of a classic solitaire design. Choose from 0.30ct, 0.40ct, or 0.50ct options, each expertly set in luxurious 18K yellow gold. Perfect for everyday elegance or as a meaningful gift, this solitaire necklace embodies enduring beauty and sophistication.'
    },
    price: {
      current: 2750,
      currency: 'GBP',
      formatted: '£2,750'
    },
    category: 'necklaces',
    collection: 'forever',
    images: {
      main: img10,
      gallery: [img10b, img10a],
      thumbnail: img10a
    },
    variants: {
      name: 'Carat Weight',
      options: [
        {
          id: '030ct',
          label: '0.30ct',
          price: 2750,
          priceFormatted: '£2,750'
        },
        {
          id: '040ct',
          label: '0.40ct',
          price: 3200,
          priceFormatted: '£3,200'
        },
        {
          id: '050ct',
          label: '0.50ct',
          price: 3700,
          priceFormatted: '£3,700'
        }
      ],
      defaultOptionId: '030ct',
      affectsPrice: true
    },
    specifications: {
      metalType: '18K Yellow Gold',
      metalColor: 'Yellow Gold',
      stoneType: 'Diamond',
      diamondDetails: '0.30ct round diamond, G/H color, VS1/VS2 clarity',
      dimensions: {
        width: '22mm',
        height: '30mm',
        weight: '4.5g'
      },
      care: 'Clean with soft cloth and mild soap, avoid harsh chemicals'
    },
    inventory: {
      inStock: true,
      quantity: 10,
      stockStatus: 'in-stock',
      leadTime: 'Ships within 3 weeks. Holidays may affect this time'
    },
    features: [
      'Round solitaire diamond design',
      'G/H color, VS1/VS2 clarity',
      '18K yellow gold setting',
      'Choice of 0.30ct, 0.40ct, or 0.50ct',
      'Timeless elegance',
      'Perfect for gifting'
    ],
    tags: ['necklaces', 'gold', 'diamond', 'solitaire', 'round', 'forever'],
    badges: {
      isNew: false,
      isBestseller: false
    },
    seo: {
      title: 'Forever Round Solitaire Diamond Necklace | Parisa London',
      description: 'Elegant round solitaire diamond necklace in 18K yellow gold. G/H color, VS1/VS2 clarity. Available in 0.30ct, 0.40ct, or 0.50ct. Free UK shipping.',
      keywords: ['solitaire necklace', 'diamond necklace', 'round diamond', 'gold necklace', 'forever jewelry']
    },
    shipping: {
      freeShipping: true,
      weight: 4.5,
      dimensions: {
        length: 5,
        width: 4,
        height: 2
      }
    },
    relatedProducts: ['forever-necklace-25', 'forever-initial-necklace'],
    createdAt: nowIso,
    updatedAt: nowIso
  },
  {
    id: 'forever-item-11',
    sku: 'FOR-ITEM-011',
    name: 'Forever Round Solitaire Necklace',
    slug: 'forever-round-solitaire-necklace-white-gold',
    description: {
      short: 'Round solitaire diamond necklace in 18K white gold, available in 0.30ct, 0.40ct, or 0.50ct',
      long: 'Experience the timeless beauty of our Forever Round Solitaire Necklace in luminous 18K white gold. Featuring a stunning round diamond in G/H color and VS1/VS2 clarity, this elegant piece captures light beautifully with its classic solitaire design. Choose from 0.30ct, 0.40ct, or 0.50ct options to suit your style. Perfect for everyday sophistication or milestone celebrations, this solitaire necklace is a testament to enduring elegance.'
    },
    price: {
      current: 2750,
      currency: 'GBP',
      formatted: '£2,750'
    },
    category: 'necklaces',
    collection: 'forever',
    images: {
      main: img11,
      gallery: [img11b, img11a],
      thumbnail: img11a
    },
    variants: {
      name: 'Carat Weight',
      options: [
        {
          id: '030ct',
          label: '0.30ct',
          price: 2750,
          priceFormatted: '£2,750'
        },
        {
          id: '040ct',
          label: '0.40ct',
          price: 3200,
          priceFormatted: '£3,200'
        },
        {
          id: '050ct',
          label: '0.50ct',
          price: 3700,
          priceFormatted: '£3,700'
        }
      ],
      defaultOptionId: '030ct',
      affectsPrice: true
    },
    specifications: {
      metalType: '18K White Gold',
      metalColor: 'White Gold',
      stoneType: 'Diamond',
      diamondDetails: '0.30ct round diamond, G/H color, VS1/VS2 clarity',
      dimensions: {
        width: '22mm',
        height: '30mm',
        weight: '4.5g'
      },
      care: 'Clean with soft cloth and mild soap, avoid harsh chemicals'
    },
    inventory: {
      inStock: true,
      quantity: 10,
      stockStatus: 'in-stock',
      leadTime: 'Ships within 3 weeks. Holidays may affect this time'
    },
    features: [
      'Round solitaire diamond design',
      'G/H color, VS1/VS2 clarity',
      '18K white gold setting',
      'Choice of 0.30ct, 0.40ct, or 0.50ct',
      'Timeless elegance',
      'Perfect for gifting'
    ],
    tags: ['necklaces', 'white-gold', 'diamond', 'solitaire', 'round', 'forever'],
    badges: {
      isNew: false,
      isBestseller: false
    },
    seo: {
      title: 'Forever Round Solitaire Diamond Necklace White Gold | Parisa London',
      description: 'Elegant round solitaire diamond necklace in 18K white gold. G/H color, VS1/VS2 clarity. Available in 0.30ct, 0.40ct, or 0.50ct. Free UK shipping.',
      keywords: ['solitaire necklace', 'diamond necklace', 'round diamond', 'white gold necklace', 'forever jewelry']
    },
    shipping: {
      freeShipping: true,
      weight: 4.5,
      dimensions: {
        length: 5,
        width: 4,
        height: 2
      }
    },
    relatedProducts: ['forever-necklace-25', 'forever-item-10'],
    createdAt: nowIso,
    updatedAt: nowIso
  },
  {
    id: 'forever-tennis-necklace-7ct',
    sku: 'FOR-NECK-020',
    name: 'Diamond Tennis Necklace in 18K Yellow Gold',
    slug: 'diamond-tennis-necklace-7ct-yellow-gold',
    description: {
      short: 'Diamond tennis necklace in 18K yellow gold, 18 inches',
      long: 'Make a statement with this stunning diamond tennis necklace from the Forever collection. Featuring brilliant round diamonds meticulously set in luxurious 18K yellow gold, this 18-inch necklace radiates timeless elegance and exceptional sparkle. Each diamond is carefully selected for its exceptional clarity and brilliance, creating a continuous line of light that captures attention from every angle. Perfect for special occasions or as a luxurious everyday piece, this tennis necklace embodies sophistication and enduring beauty.'
    },
    price: {
      current: 12800,
      currency: 'GBP',
      formatted: '£12,800'
    },
    category: 'necklaces',
    collection: 'forever',
    images: {
      main: img20,
      gallery: [img20b, img20a],
      thumbnail: img20b
    },
    specifications: {
      metalType: '18K Yellow Gold',
      metalColor: 'Yellow Gold',
      stoneType: 'Diamonds',
      diamondDetails: '7.0ct total weight',
      dimensions: {
        width: '5mm',
        height: '5mm',
        weight: '22.0g'
      },
      care: 'Clean with soft cloth and mild soap; avoid harsh chemicals and store separately'
    },
    inventory: {
      inStock: true,
      quantity: 5,
      stockStatus: 'in-stock',
      leadTime: 'Ships within 3 weeks. Holidays may affect this time'
    },
    features: [
      '7.0ct total diamond weight',
      '18K yellow gold setting',
      '18-inch length',
      'Classic tennis necklace design',
      'Secure clasp closure',
      'Exceptional brilliance and sparkle',
      'Timeless elegance'
    ],
    tags: ['necklaces', 'yellow-gold', 'diamond', 'tennis-necklace', 'luxury', 'forever'],
    badges: {
      isNew: false,
      isBestseller: false
    },
    seo: {
      title: 'Diamond Tennis Necklace 7ct Yellow Gold | Parisa London',
      description: 'Stunning 7ct diamond tennis necklace in 18K yellow gold. 18 inches of brilliant diamonds from the Forever collection. Free UK shipping.',
      keywords: ['tennis necklace', 'diamond necklace', 'yellow gold necklace', '7ct diamonds', 'luxury necklace']
    },
    shipping: {
      freeShipping: true,
      weight: 22.0,
      dimensions: {
        length: 8,
        width: 8,
        height: 3
      }
    },
    relatedProducts: ['forever-necklace-25', 'forever-bracelet-gold', 'forever-item-10'],
    createdAt: nowIso,
    updatedAt: nowIso
  }
];

const foreverProductsUnsorted: Product[] = [
  initialNecklaceProduct,
  ...necklaceProducts,
  ...braceletProducts,
  ...earringProducts,
];

// Sort products by category for proper grouping on the shop page
const categoryOrder = ['necklaces', 'earrings', 'rings', 'bracelets'];
export const foreverProducts = [...foreverProductsUnsorted].sort((a, b) => {
  const aIndex = categoryOrder.indexOf(a.category);
  const bIndex = categoryOrder.indexOf(b.category);
  return aIndex - bIndex;
});

export function getForeverProductById(id: string): Product | undefined {
  return foreverProducts.find(product => product.id === id);
}

export function getAllForeverProducts(): Product[] {
  return foreverProducts;
}
