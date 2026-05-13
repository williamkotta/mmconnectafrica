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
    category: 'Ujumuishaji wa Kifedha',
    highlights: [
      'Mikopo na huduma za kifedha zinazopatikana kwa urahisi',
      'Malipo ya kidijitali kwa wachuuzi wa masoko, waendesha bodaboda, SMEs, na watu wenye mishahara',
      'Ulipaji unaonyumbulika unaolingana na mzunguko halisi wa mapato',
      'Kuzingatia ujumuishaji wa kifedha unaoleta mabadiliko halisi',
    ],
    targetAudience: 'Wachuuzi wa Masoko, Waendesha Boda Boda, SMEs, na Watu Wenye Mishahara',
    launchYear: '2024',
    website: 'https://kuzasokoni.co.tz',
  },
  {
    id: 'tiketika',
    nameKey: 'ecosystem.tiketika',
    descKey: 'ecosystem.tiketikaDesc',
    image: 'assets/Tiketika Logo PNG White.png',
    fullDescKey: 'ecosystem.tiketikaFullDesc',
    category: 'Maisha & Uwekaji Nafasi',
    highlights: [
      'Uuzaji wa tiketi za matukio, kuweka nafasi za safari, na uzoefu wa maisha ya kila siku',
      'Inafanya kazi kwenye wavuti, simu, USSD, na WhatsApp',
      'Jukwaa moja kwa kila njia',
      'Imeundwa kwa matumizi rahisi kutoka mwanzo hadi mwisho',
    ],
    targetAudience: 'Wapenzi wa Matukio, Wasafiri, na Wateja wa Maisha Nchini Tanzania',
    website: 'https://tiketika.co.tz',
    launchYear: '2024',
  },
  {
    id: 'jibusti',
    nameKey: 'ecosystem.jibusti',
    descKey: 'ecosystem.jibustiDesc',
    image: 'assets/Jibusti Logo-01.png',
    fullDescKey: 'ecosystem.jibustiFullDesc',
    category: 'Nguvu & Nishati',
    highlights: [
      'Kukodisha power bank popote ulipo na suluhisho za nishati ya ziada',
      'Pata, kodi, chaji, na rudisha kwa urahisi',
      'Nguvu ya kuaminika kwa watu binafsi na biashara',
      'Inasaidia jamii ziendelee kuwa na nishati muda wowote',
    ],
    targetAudience: 'Watu Binafsi na Biashara Zinazohitaji Nishati ya Akiba ya Kuaminika',
    launchYear: '2024',
    website: 'https://jibusti.co.tz',
  },
  {
    id: 'mmcarbon',
    nameKey: 'ecosystem.mmcarbon',
    descKey: 'ecosystem.mmcarbonDesc',
    image: 'assets/mmcarbon.png',
    fullDescKey: 'ecosystem.mmcarbonFullDesc',
    category: 'Hali ya Hewa & Uendelevu',
    highlights: [
      'Usimamizi wa kaboni na suluhisho za kupunguza athari (offset)',
      'Mipango ya nishati safi',
      'Maendeleo ya miradi ya mazingira',
      'Kujenga mustakabali endelevu kuanzia chini kabisa',
    ],
    targetAudience: 'Mashirika Yanayowekeza Kwenye Hatua za Hali ya Hewa na Uendelevu',
    launchYear: '2024',
  },
];
