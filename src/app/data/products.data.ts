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
  website?: string;
}

export const PRODUCTS: Product[] = [
  {
    id: 'kuza-capital',
    nameKey: 'ecosystem.kuzaCapital',
    descKey: 'ecosystem.kuzaCapitalDesc',
    image: 'assets/kuzalogo.png',
    fullDescKey: 'ecosystem.kuzaCapitalFullDesc',
    category: 'Inclusive Finance',
    highlights: [
      'Accessible loans and financial services',
      'Digital disbursement for market vendors, boda boda riders, SMEs, and salaried individuals',
      'Flexible repayment that fits real income cycles',
      'Focused on real financial inclusion',
    ],
    targetAudience: 'Market Vendors, Boda Boda Riders, SMEs, and Salaried Individuals',
    launchYear: '2024',
    website: 'https://kuzasokoni.co.tz',
  },
  {
    id: 'tiketika',
    nameKey: 'ecosystem.tiketika',
    descKey: 'ecosystem.tiketikaDesc',
    image: 'assets/Tiketika Logo PNG White.png',
    fullDescKey: 'ecosystem.tiketikaFullDesc',
    category: 'Lifestyle & Booking',
    highlights: [
      'Event ticketing, travel booking, and lifestyle experiences',
      'Works across web, mobile, USSD, and WhatsApp',
      'One platform for every channel',
      'Built for convenient end-to-end experiences',
    ],
    targetAudience: 'Event Goers, Travelers, and Lifestyle Customers in Tanzania',
    website: 'https://tiketika.co.tz',
    launchYear: '2024',
  },
  {
    id: 'jibusti',
    nameKey: 'ecosystem.jibusti',
    descKey: 'ecosystem.jibustiDesc',
    image: 'assets/Jibusti Logo-01.png',
    fullDescKey: 'ecosystem.jibustiFullDesc',
    category: 'Power & Energy',
    highlights: [
      'On-the-go power bank rentals and backup energy solutions',
      'Locate, rent, charge, and return easily',
      'Reliable power for individuals and businesses',
      'Helps communities stay powered anytime',
    ],
    targetAudience: 'Individuals and Businesses Needing Reliable Backup Power',
    launchYear: '2024',
    website: 'https://jibusti.co.tz',
  },
  {
    id: 'mmcarbon',
    nameKey: 'ecosystem.mmcarbon',
    descKey: 'ecosystem.mmcarbonDesc',
    image: 'assets/mmcarbon.png',
    fullDescKey: 'ecosystem.mmcarbonFullDesc',
    category: 'Climate & Sustainability',
    highlights: [
      'Carbon management and offset solutions',
      'Clean energy initiatives',
      'Environmental project development',
      'Building a sustainable future from the ground up',
    ],
    targetAudience: 'Organizations Investing in Climate Action and Sustainability',
    launchYear: '2024',
  },
];
