export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  category: 'dames' | 'heren' | 'kinderen';
  image: string;
  images?: string[];
  description: string;
  sizes: string[];
  inStock: boolean;
  badge?: 'Nieuw' | 'Populair' | 'Sale';
  rating?: number;
  reviews?: number;
}

// Homepage featured products
export const featuredProducts: Product[] = [
  {
    id: 'fp-1',
    name: 'Trendy Zomerjurk',
    price: 24.99,
    originalPrice: 39.99,
    category: 'dames',
    image: '/generated/category-dames.jpg',
    description: 'Luchtige zomerjurk perfect voor warme dagen. Gemaakt van ademende stof met een flattering pasvorm.',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    inStock: true,
    badge: 'Sale',
    rating: 4.5,
    reviews: 128
  },
  {
    id: 'fp-2',
    name: 'Casual Heren T-Shirt',
    price: 12.99,
    category: 'heren',
    image: '/generated/category-heren.jpg',
    description: 'Comfortabel katoenen t-shirt voor elke dag. Klassieke pasvorm en duurzaam materiaal.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    inStock: true,
    badge: 'Populair',
    rating: 4.7,
    reviews: 256
  },
  {
    id: 'fp-3',
    name: 'Kids Denim Jasje',
    price: 19.99,
    category: 'kinderen',
    image: '/generated/category-kinderen.jpg',
    description: 'Stoer denim jasje voor kinderen. Duurzaam en stijlvol voor elk seizoen.',
    sizes: ['98', '104', '110', '116', '122', '128'],
    inStock: true,
    badge: 'Nieuw',
    rating: 4.6,
    reviews: 89
  },
  {
    id: 'fp-4',
    name: 'Witte Sneakers',
    price: 34.99,
    category: 'dames',
    image: '/generated/category-dames.jpg',
    description: 'Klassieke witte sneakers die bij elke outfit passen. Comfortabel en trendy.',
    sizes: ['36', '37', '38', '39', '40', '41'],
    inStock: true,
    badge: 'Populair',
    rating: 4.8,
    reviews: 342
  }
];

// Dames category products
export const damesProducts: Product[] = [
  {
    id: 'd-1',
    name: 'Bohemian Maxi Jurk',
    price: 29.99,
    category: 'dames',
    image: '/generated/category-dames.jpg',
    images: ['/generated/category-dames.jpg'],
    description: 'Elegante maxi jurk met boheemse print. Perfect voor zomerse gelegenheden en vakantie.',
    sizes: ['S', 'M', 'L', 'XL'],
    inStock: true,
    badge: 'Nieuw',
    rating: 4.6,
    reviews: 87
  },
  {
    id: 'd-2',
    name: 'Gebreide Blazer Beige',
    price: 39.99,
    category: 'dames',
    image: '/generated/category-dames.jpg',
    images: ['/generated/category-dames.jpg'],
    description: 'Professionele blazer voor kantoor en zakelijke gelegenheden. Comfortabele pasvorm.',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    inStock: true,
    rating: 4.7,
    reviews: 143
  },
  {
    id: 'd-3',
    name: 'High Waist Jeans Blauw',
    price: 24.99,
    category: 'dames',
    image: '/generated/category-dames.jpg',
    images: ['/generated/category-dames.jpg'],
    description: 'Trendy high waist jeans met flattering pasvorm. Comfortabele stretch denim.',
    sizes: ['26', '27', '28', '29', '30', '31', '32'],
    inStock: true,
    badge: 'Populair',
    rating: 4.8,
    reviews: 412
  },
  {
    id: 'd-4',
    name: 'Bloemen Blouse Roze',
    price: 18.99,
    category: 'dames',
    image: '/generated/category-dames.jpg',
    images: ['/generated/category-dames.jpg'],
    description: 'Luchtige blouse met bloemenprint. Perfect voor lente en zomer.',
    sizes: ['XS', 'S', 'M', 'L'],
    inStock: true,
    badge: 'Sale',
    rating: 4.5,
    reviews: 98
  },
  {
    id: 'd-5',
    name: 'Enkellaarzen Zwart',
    price: 44.99,
    category: 'dames',
    image: '/generated/category-dames.jpg',
    images: ['/generated/category-dames.jpg'],
    description: 'Veelzijdige zwarte enkellaarzen. Comfortabel en stijlvol voor elk seizoen.',
    sizes: ['36', '37', '38', '39', '40', '41'],
    inStock: true,
    rating: 4.7,
    reviews: 234
  },
  {
    id: 'd-6',
    name: 'Knit Vest Crème',
    price: 22.99,
    category: 'dames',
    image: '/generated/category-dames.jpg',
    images: ['/generated/category-dames.jpg'],
    description: 'Gebreid vest voor koude dagen. Zachte stof en comfortabele pasvorm.',
    sizes: ['S', 'M', 'L', 'XL'],
    inStock: true,
    rating: 4.6,
    reviews: 167
  },
  {
    id: 'd-7',
    name: 'Linnen Broek Beige',
    price: 32.99,
    category: 'dames',
    image: '/generated/category-dames.jpg',
    images: ['/generated/category-dames.jpg'],
    description: 'Luchtige linnen broek voor warme dagen. Elegante en relaxte stijl.',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    inStock: true,
    rating: 4.5,
    reviews: 76
  },
  {
    id: 'd-8',
    name: 'Zijden Top Wit',
    price: 27.99,
    category: 'dames',
    image: '/generated/category-dames.jpg',
    images: ['/generated/category-dames.jpg'],
    description: 'Elegante zijden top voor speciale gelegenheden. Luxe look en zachte stof.',
    sizes: ['XS', 'S', 'M', 'L'],
    inStock: true,
    badge: 'Nieuw',
    rating: 4.8,
    reviews: 54
  }
];

// Heren category products
export const herenProducts: Product[] = [
  {
    id: 'h-1',
    name: 'Denim Jacket',
    price: 49.99,
    category: 'heren',
    image: '/generated/category-heren.jpg',
    images: ['/generated/category-heren.jpg'],
    description: 'Klassieke denim jacket voor heren. Duurzaam en tijdloos design.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    inStock: true,
    badge: 'Populair',
    rating: 4.7,
    reviews: 189
  },
  {
    id: 'h-2',
    name: 'Oxford Overhemd',
    price: 24.99,
    category: 'heren',
    image: '/generated/category-heren.jpg',
    images: ['/generated/category-heren.jpg'],
    description: 'Klassiek oxford overhemd. Perfect voor kantoor en casual gelegenheden.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    inStock: true,
    rating: 4.6,
    reviews: 276
  },
  {
    id: 'h-3',
    name: 'Chino Broek Navy',
    price: 29.99,
    category: 'heren',
    image: '/generated/category-heren.jpg',
    images: ['/generated/category-heren.jpg'],
    description: 'Veelzijdige chino broek in navy. Comfortabele pasvorm voor elke dag.',
    sizes: ['30', '31', '32', '33', '34', '36', '38'],
    inStock: true,
    badge: 'Populair',
    rating: 4.8,
    reviews: 398
  },
  {
    id: 'h-4',
    name: 'Hoodie Grijs',
    price: 34.99,
    category: 'heren',
    image: '/generated/category-heren.jpg',
    images: ['/generated/category-heren.jpg'],
    description: 'Comfortabele hoodie voor casual dagen. Zachte stof en relaxte pasvorm.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    inStock: true,
    rating: 4.7,
    reviews: 234
  }
];

// Kinderen category products
export const kinderenProducts: Product[] = [
  {
    id: 'k-1',
    name: 'Kids Hoodie Blauw',
    price: 19.99,
    category: 'kinderen',
    image: '/generated/category-kinderen.jpg',
    images: ['/generated/category-kinderen.jpg'],
    description: 'Warme hoodie voor kinderen. Zachte stof en speelvriendelijk.',
    sizes: ['98', '104', '110', '116', '122', '128', '134', '140'],
    inStock: true,
    badge: 'Populair',
    rating: 4.7,
    reviews: 167
  },
  {
    id: 'k-2',
    name: 'Jeans Voor Kids',
    price: 22.99,
    category: 'kinderen',
    image: '/generated/category-kinderen.jpg',
    images: ['/generated/category-kinderen.jpg'],
    description: 'Duurzame jeans voor actieve kinderen. Comfortabele stretch denim.',
    sizes: ['98', '104', '110', '116', '122', '128', '134', '140'],
    inStock: true,
    rating: 4.6,
    reviews: 198
  },
  {
    id: 'k-3',
    name: 'T-Shirt Set (3 stuks)',
    price: 16.99,
    category: 'kinderen',
    image: '/generated/category-kinderen.jpg',
    images: ['/generated/category-kinderen.jpg'],
    description: 'Set van 3 katoenen t-shirts. Ideaal voor school en spelen.',
    sizes: ['98', '104', '110', '116', '122', '128', '134', '140'],
    inStock: true,
    badge: 'Sale',
    rating: 4.8,
    reviews: 312
  },
  {
    id: 'k-4',
    name: 'Winter Jas',
    price: 39.99,
    category: 'kinderen',
    image: '/generated/category-kinderen.jpg',
    images: ['/generated/category-kinderen.jpg'],
    description: 'Warme winterjas met capuchon. Waterdicht en winddicht.',
    sizes: ['98', '104', '110', '116', '122', '128', '134', '140'],
    inStock: true,
    badge: 'Nieuw',
    rating: 4.9,
    reviews: 143
  }
];

// Helper function to get products by category
export function getProductsByCategory(category: 'dames' | 'heren' | 'kinderen' | 'all'): Product[] {
  if (category === 'all') {
    return [...damesProducts, ...herenProducts, ...kinderenProducts];
  }
  switch (category) {
    case 'dames':
      return damesProducts;
    case 'heren':
      return herenProducts;
    case 'kinderen':
      return kinderenProducts;
    default:
      return [];
  }
}

// Helper function to get product by ID
export function getProductById(id: string): Product | undefined {
  const allProducts = [...featuredProducts, ...damesProducts, ...herenProducts, ...kinderenProducts];
  return allProducts.find(product => product.id === id);
}
