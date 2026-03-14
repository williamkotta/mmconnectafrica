export interface Product {
  id: string;
  nameKey: string;
  descKey: string;
  image: string;
  fullDescKey: string;
  category: string;
  highlights: string[];
  targetAudience: string;
  launchYear: string;
}

export const PRODUCTS: Product[] = [
  {
    id: 'kuza-sokoni',
    nameKey: 'products.kuzaSokoni',
    descKey: 'products.kuzaSokoniDesc',
    image: 'assets/13.png',
    fullDescKey: 'products.kuzaSokoniFullDesc',
    category: 'Digital Marketplace',
    highlights: [
      'Digital vendor registration and management',
      'Financial services integration for market vendors',
      'Real-time market data and analytics',
      'Mobile-first platform for easy accessibility',
    ],
    targetAudience: 'Market Vendors & Traders',
    launchYear: '2024',
  },
  {
    id: 'kuza-maisha',
    nameKey: 'products.kuzaMaisha',
    descKey: 'products.kuzaMaishaDesc',
    image: 'assets/13.png',
    fullDescKey: 'products.kuzaMaishaFullDesc',
    category: 'Livelihood Empowerment',
    highlights: [
      'Comprehensive livelihood support programs',
      'Skills training and capacity building',
      'Access to micro-financing opportunities',
      'Community-driven development initiatives',
    ],
    targetAudience: 'Individuals & Households',
    launchYear: '2024',
  },
  {
    id: 'kuza-pay',
    nameKey: 'products.kuzaPay',
    descKey: 'products.kuzaPayDesc',
    image: 'assets/13.png',
    fullDescKey: 'products.kuzaPayFullDesc',
    category: 'Financial Technology',
    highlights: [
      'Seamless digital payment solutions',
      'Low-cost money transfer services',
      'Integration with mobile money platforms',
      'Secure transaction processing',
    ],
    targetAudience: 'Small Businesses & Individuals',
    launchYear: '2024',
  },
  {
    id: 'kuza-biashara',
    nameKey: 'products.kuzaBiashara',
    descKey: 'products.kuzaBiasharaDesc',
    image: 'assets/13.png',
    fullDescKey: 'products.kuzaBiasharaFullDesc',
    category: 'Business Solutions',
    highlights: [
      'Business registration and compliance support',
      'Access to business loans and credit facilities',
      'Digital tools for business management',
      'Mentorship and networking opportunities',
    ],
    targetAudience: 'Emerging Businesses & SMEs',
    launchYear: '2024',
  },
  {
    id: 'kuza-kilimo',
    nameKey: 'products.kuzaKilimo',
    descKey: 'products.kuzaKilimoDesc',
    image: 'assets/13.png',
    fullDescKey: 'products.kuzaKilimoFullDesc',
    category: 'Agricultural Technology',
    highlights: [
      'Smart farming tools and advisory services',
      'Market linkage for agricultural produce',
      'Access to agricultural financing',
      'Weather and crop management insights',
    ],
    targetAudience: 'Farmers & Agricultural Workers',
    launchYear: '2024',
  },
  {
    id: 'kuza-special-group',
    nameKey: 'products.kuzaSpecialGroup',
    descKey: 'products.kuzaSpecialGroupDesc',
    image: 'assets/13.png',
    fullDescKey: 'products.kuzaSpecialGroupFullDesc',
    category: 'Employee Services',
    highlights: [
      'Financial inclusion for workers\' groups',
      'Savings and loan access for employees',
      'Capacity-building and workplace training',
      'Support for both formal and informal sector workers',
    ],
    targetAudience: 'Employees & Workers\' Groups',
    launchYear: '2024',
  },
  {
    id: 'kuza-boda',
    nameKey: 'products.kuzaBoda',
    descKey: 'products.kuzaBodaDesc',
    image: 'assets/13.png',
    fullDescKey: 'products.kuzaBodaFullDesc',
    category: 'Transport & Mobility',
    highlights: [
      'Quick loans and insurance for boda boda operators',
      'Savings and business management tools',
      'Safety training and certification programs',
      'Rider community features and networking',
    ],
    targetAudience: 'Boda Boda Operators',
    launchYear: '2024',
  },
];
