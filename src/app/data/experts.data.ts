export interface Expert {
  id: string;
  name: string;
  title: string;
  specialty: string;
  bio: string;
  image: string;
  linkedin?: string;
  fullBio: string;
  achievements: string[];
  education: string;
  experience: string;
  email?: string;
}

export const EXPERTS: Expert[] = [
  {
    id: 'mwamvita-makamba',
    name: 'Mwamvita Makamba',
    title: 'Founder & CEO',
    specialty: 'Social Enterprise',
    bio: 'A visionary leader with deep expertise in building inclusive business models that empower underserved communities across East Africa.',
    fullBio:
      'Mwamvita Makamba is a pioneering social entrepreneur and the driving force behind Newkuza. With over a decade of experience in community-led development, she has focused on building inclusive business models that empower underserved communities across East Africa. Her leadership emphasizes collaboration, sustainability, and measurable social impact. Under her guidance, Newkuza has grown from a grassroots initiative into a recognized platform that has impacted thousands through innovative programs and strategic partnerships.',
    achievements: [
      'Founded Newkuza and scaled programs reaching thousands in underserved communities',
      'Named among the top 50 women in social enterprise in East Africa',
      'Built strategic partnerships with international development organizations',
      'Launched community-led economic empowerment programs across Tanzania',
    ],
    education: 'MBA in Social Enterprise, University of Dar es Salaam',
    experience: '10+ years in social enterprise and community development',
    image: 'assets/experts/mwamvita.png',
    linkedin: 'https://linkedin.com/in/',
  },
];
