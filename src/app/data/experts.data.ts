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
    bio: 'Visionary leader with deep expertise in building inclusive business models that empower underserved communities across East Africa.',
    fullBio:
      'Mwamvita Makamba is a pioneering social entrepreneur and the driving force behind Newkuza. With over a decade of experience in community-driven development, she has dedicated her career to building inclusive business models that uplift underserved communities across East Africa. Her leadership style emphasizes collaboration, sustainability, and measurable social impact. Under her guidance, Newkuza has grown from a grassroots initiative into a recognized platform for economic empowerment, touching thousands of lives through innovative programs and strategic partnerships.',
    achievements: [
      'Founded Newkuza and scaled it to impact thousands of community members',
      'Recognized as a Top 50 Women in Social Enterprise in East Africa',
      'Built strategic partnerships with international development organizations',
      'Pioneered community-based economic empowerment programs in Tanzania',
    ],
    education: 'MBA in Social Enterprise, University of Dar es Salaam',
    experience: '10+ years in social enterprise and community development',
    image: 'assets/experts/mwamvita.png',
    linkedin: 'https://linkedin.com/in/',
  },
  {
    id: 'thuweini-makamba',
    name: 'Thuweini Makamba',
    title: 'City Founder',
    specialty: 'Urban Development',
    bio: 'Urban strategist driving sustainable city initiatives and smart infrastructure projects to unlock economic potential in emerging markets.',
    fullBio:
      'Thuweini Makamba is a visionary urban strategist who leads initiatives to reshape how cities in emerging markets grow and serve their residents. With deep expertise in urban planning, smart infrastructure, and sustainable development, he works at the intersection of technology and community to create livable, thriving urban environments. His approach integrates local context with global best practices, ensuring that development projects are both economically viable and socially inclusive.',
    achievements: [
      'Designed and launched multiple urban development frameworks for East African cities',
      'Led smart-city pilot projects integrating IoT and community feedback',
      'Secured funding for sustainable infrastructure initiatives across three countries',
      'Advised government bodies on inclusive urban planning policy',
    ],
    education: 'MSc in Urban Planning & Sustainable Development',
    experience: '8+ years in urban development and infrastructure strategy',
    image: 'assets/experts/ThuweinMakamba.png',
    linkedin: 'https://linkedin.com/in/',
  },
  {
    id: 'elvis-mushi',
    name: 'Elvis Mushi',
    title: 'Chief Technology Officer',
    specialty: 'Technology & Innovation',
    bio: 'Seasoned technologist spearheading digital transformation, platform engineering, and scalable tech solutions for impact-driven organizations.',
    fullBio:
      'Elvis Mushi brings a wealth of experience in software engineering, cloud architecture, and digital product development. As CTO, he is responsible for the technical vision and execution of all Newkuza platforms, ensuring they are scalable, secure, and user-centric. His passion lies in leveraging technology to solve real-world problems—from building fintech tools for smallholder farmers to creating data pipelines that drive actionable insights for social programs. Elvis leads a growing engineering team with a culture of innovation and continuous learning.',
    achievements: [
      'Architected and launched the Newkuza digital platform serving thousands of users',
      'Led migration to cloud-native infrastructure reducing costs by 40%',
      'Built and mentored a high-performing engineering team from the ground up',
      'Implemented data analytics pipelines for real-time program impact measurement',
    ],
    education: 'BSc in Computer Science, University of Dar es Salaam',
    experience: '12+ years in software engineering and technology leadership',
    image: 'assets/experts/elvis.png',
    linkedin: 'https://linkedin.com/in/',
  },
  {
    id: 'sameera-hussein',
    name: 'Sameera Hussein',
    title: 'Business Manager',
    specialty: 'Strategy & Growth',
    bio: 'Strategic business leader with expertise in market expansion, partnership development, and operational excellence across diverse sectors.',
    fullBio:
      `Sameera Hussein is a dynamic business strategist who drives growth and operational excellence across Newkuza's portfolio of programs. With experience spanning private sector consulting, NGO management, and startup scaling, she brings a versatile skill set to the team. Sameera excels at identifying market opportunities, forging strategic partnerships, and implementing systems that ensure sustainable growth. Her data-driven approach to decision-making has been instrumental in expanding Newkuza's reach and deepening its impact.`,
    achievements: [
      `Expanded Newkuza's partner network by 200% in two years`,
      'Developed and executed go-to-market strategies for three new product lines',
      'Implemented operational improvement initiatives that increased efficiency by 35%',
      'Managed cross-functional teams across multiple regions',
    ],
    education: 'MBA in Strategic Management, Strathmore Business School',
    experience: '9+ years in business strategy and partnership development',
    image: 'assets/experts/sameera.png',
    linkedin: 'https://linkedin.com/in/',
  },
 {
  id: 'gift-peter-laizer',
  name: 'Gift Peter Laizer',
  title: 'Technical Lead',
  specialty: 'Software Engineering & Technology',
  bio: 'Visionary computer scientist and tech lead specializing in enterprise frameworks, full-stack development, blockchain, and scalable solution delivery.',
  fullBio: 
    `Gift Peter Laizer is a visionary computer scientist and skilled Tech Lead with expertise in enterprise frameworks, including Spring Boot, Django, Angular, and hybrid mobile technologies. His experience spans end-to-end software project development, from requirement analysis to deployment, enabling him to deliver impactful, scalable solutions. Gift has made significant contributions to core banking and electronic document management systems (EDMS), enhancing both operational efficiency and user accessibility.

In addition to his technical expertise, Gift possesses advanced knowledge in blockchain technology, applying secure, decentralized solutions to meet modern digital needs. With strong project management skills, problem-solving abilities, and a focus on agile methodologies, he ensures high-quality, reliable outcomes for clients. Gift is deeply committed to innovation and continues to drive meaningful technological advancements across various industries.`,
  achievements: [
    'Led development of core banking systems improving transaction efficiency and security',
    'Built and deployed electronic document management systems (EDMS) for enhanced accessibility',
    'Applied blockchain solutions for secure, decentralized applications',
    'Managed end-to-end software projects using agile methodologies with consistent on-time delivery',
    'Specialized in full-stack technologies including Spring Boot, Django, Angular, Flutter, and Java',
  ],
  education: 'Computer Science / Software Engineering background',
  experience: 'Multiple years as Lead Software Engineer and Technical Consultant',
  image: 'assets/experts/gift.png',  // Update the filename/path as needed (original had 'gift.png')
  linkedin: 'https://tz.linkedin.com/in/gift-peter-laizer-359a43172',
},
  {
    id: 'elihazina-singo',
    name: 'Elhazina Singo',
    title: 'Head of Finance',
    specialty: 'Finance & Compliance',
    bio: 'Finance leader overseeing fiscal strategy, regulatory compliance, and sustainable funding models that fuel organizational growth.',
    fullBio:
      `Elihazina Singo is a meticulous finance professional who safeguards Newkuza's financial health while enabling strategic investments for growth. She manages budgeting, financial reporting, audit processes, and regulatory compliance across all operations. With expertise in both for-profit and non-profit financial management, Elhaina ensures that every dollar is accounted for and aligned with the organization's mission. Her work has been pivotal in securing grant funding, maintaining donor confidence, and building a financially sustainable organization.`,
    achievements: [
      'Established robust financial reporting and audit frameworks',
      'Secured grant funding totaling over $2M from international donors',
      'Achieved 100% compliance in regulatory audits for three consecutive years',
      'Implemented cost-optimization strategies saving 25% on operational expenses',
    ],
    education: 'CPA, ACCA; BSc in Finance & Accounting',
    experience: '8+ years in financial management and compliance',
    image: 'assets/experts/elihazina.png',
    linkedin: 'https://linkedin.com/in/',
  },
];
