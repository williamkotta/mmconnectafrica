export interface Translations {
  [key: string]: string;
}

export interface TranslationMap {
  en: Translations;
  sw: Translations;
}

export const TRANSLATIONS: TranslationMap = {
  en: {
    // Header / Navigation
    'nav.menu': 'Menu',
    'nav.home': 'Home',
    'nav.about': 'About Us',
    'nav.products': 'Our Products',
    'nav.team': 'Our Team',
    'nav.contact': 'Contact Us',
    'nav.language': 'Language',

    // Hero Section
    'hero.badge': 'New',
    'hero.badgeText': '26th October 2024. Market vendor registration at Kisutu Market',
    'hero.news1': '26th October 2024. Market vendor registration at Kisutu Market',
    'hero.news2': 'New partnership with local SMEs for digital inclusion',
    'hero.news3': 'Kuza launches youth empowerment program across East Africa',
    'hero.news4': 'Join our upcoming webinar on inclusive business strategies',
    'hero.heading': 'Grow Further',
    'hero.description': "At Kuza, we're dedicated to a future where everyone—regardless of background or ability—is valued, empowered, and included. Guided by inclusivity, we believe true progress comes from uplifting diverse voices and creating products that serve everyone's unique needs.",
    'hero.cta': 'Join Us',
    'hero.ctaSub': 'To get more updates in your email',

    // Mission & Vision
    'mission.title': 'Mission',
    'mission.text': 'To illuminate the essence of inclusivity and potentiality to ensure no ambition remains unsupported especially for the youth, emerging businesses, and those at the bottom of the pyramid in Africa.',
    'vision.title': 'Vision',
    'vision.text': "To achieve shared growth and collective prosperity, it's essential to create strategies and systems that benefit everyone within a community or organization. This process requires collaboration across social, economic, and governmental sectors to ensure that resources, opportunities, and benefits reach people equitably",

    // Products Section
    'products.heading': 'Discover Our Versatile Product',
    'products.headingLine2': 'Range',
    'products.headingHighlight': 'Tailored Solutions for Every Need!',
    'products.discoverMore': 'Discover more',
    'products.kuzaSokoni': 'Kuza Sokoni',
    'products.kuzaSokoniDesc': 'KUZA Sokoni is a digital solution empowering Tanzanian market vendors with financial and non-financial services. It aims to create a sustainable and efficient ecosystem through digital tools and tailored services.',
    'products.kuzaMaisha': 'Kuza Maisha',
    'products.kuzaMaishaDesc': 'KUZA Maisha is a digital solution empowering Tanzanian market vendors with financial and non-financial services. It aims to create a sustainable and efficient ecosystem through digital tools and tailored services.',
    'products.kuzaPay': 'Kuza Pay',
    'products.kuzaPayDesc': 'KUZA Pay is a digital solution empowering Tanzanian market vendors with financial and non-financial services. It aims to create a sustainable and efficient ecosystem through digital tools and tailored services.',
    'products.kuzaBiashara': 'Kuza Biashara',
    'products.kuzaBiasharaDesc': 'KUZA Biashara is a digital solution empowering Tanzanian market vendors with financial and non-financial services. It aims to create a sustainable and efficient ecosystem through digital tools and tailored services.',
    'products.kuzaKilimo': 'Kuza Kilimo',
    'products.kuzaKilimoDesc': 'KUZA Kilimo is a digital solution empowering Tanzanian market vendors with financial and non-financial services. It aims to create a sustainable and efficient ecosystem through digital tools and tailored services.',
    'products.kuzaSpecialGroup': 'KUZA Special Group / Wafanyakazi',
    'products.kuzaSpecialGroupDesc': 'KUZA Special Group (Wafanyakazi) provides targeted support and services for employees, workers\' groups, and special categories in Tanzania. It offers financial inclusion, savings, loans, and capacity-building tools to enhance livelihoods and workplace productivity in the informal and formal sectors.',
    'products.kuzaBoda': 'KUZA Boda',
    'products.kuzaBodaDesc': 'KUZA Boda is a specialized digital platform designed for boda boda (motorcycle taxi) operators in Tanzania. It delivers tailored financial services such as quick loans, insurance, savings, and business management tools, along with non-financial support like safety training and rider community features to promote sustainable income and safer operations.',
    'products.kuzaSokoniFullDesc': 'KUZA Sokoni is a comprehensive digital solution designed to transform market operations across Tanzania. By empowering vendors with access to financial services, digital record-keeping, inventory management, and customer engagement tools, it creates a sustainable and efficient marketplace ecosystem. The platform bridges the gap between traditional market trading and modern digital commerce, enabling vendors to grow their businesses, access credit, and connect with a wider customer base.',
    'products.kuzaMaishaFullDesc': 'KUZA Maisha is a holistic livelihood empowerment platform that provides individuals and households with access to essential financial and non-financial services. From skills training and capacity building to micro-financing and community development programs, KUZA Maisha is designed to uplift communities and create pathways to sustainable prosperity across Tanzania.',
    'products.kuzaPayFullDesc': 'KUZA Pay is a cutting-edge financial technology solution that enables seamless digital payments, low-cost money transfers, and mobile banking services. Integrated with major mobile money platforms, it provides secure, fast, and affordable transaction processing for individuals and small businesses across Tanzania.',
    'products.kuzaBiasharaFullDesc': 'KUZA Biashara is a comprehensive business solutions platform that supports emerging businesses and SMEs with registration, compliance, access to credit, digital management tools, and mentorship. It creates an enabling environment for business growth through strategic partnerships and networking opportunities.',
    'products.kuzaKilimoFullDesc': 'KUZA Kilimo leverages agricultural technology to empower farmers with smart farming tools, advisory services, market linkage, and access to agricultural financing. It provides weather forecasts, crop management insights, and connects farmers directly to buyers for better prices and sustainable livelihoods.',
    'products.kuzaSpecialGroupFullDesc': 'KUZA Special Group (Wafanyakazi) provides targeted support and services for employees, workers\' groups, and special categories in Tanzania. Through financial inclusion programs, savings schemes, accessible loans, and capacity-building workshops, it enhances livelihoods and workplace productivity across both formal and informal sectors.',
    'products.kuzaBodaFullDesc': 'KUZA Boda is a specialized digital platform designed exclusively for boda boda (motorcycle taxi) operators in Tanzania. It delivers tailored financial services including quick loans, affordable insurance, savings plans, and business management tools. Beyond finance, it offers safety training, certification programs, and rider community features to promote sustainable income and safer operations on the road.',

    // Product Detail Page
    'product.backHome': 'Back to Home',
    'product.overview': 'Overview',
    'product.highlights': 'Key Highlights',
    'product.getStarted': 'Get Started',
    'product.contactMessage': 'Interested in this product? Reach out to learn more.',
    'product.contactUs': 'Contact Us',
    'product.notFound': 'Product not found',
    'product.tagline': 'Empowering Communities Through Innovation',
    'product.launched': 'Launched',

    // Focus Areas
    'focus.youth': "Africa's Youth",
    'focus.youthDesc': "Dedicated to serving Africa's youth, we empower young minds with new opportunities and resources to shape their future. By fostering education, entrepreneurship, and leadership, we support their journey towards a prosperous, self-reliant Africa. Together, we create pathways for Africa's youth to drive sustainable change.",
    'focus.business': 'Emerging Businesses',
    'focus.businessDesc': "Empowering and supporting emerging businesses, we provide resources, mentoring, and funding to help them achieve their growth. Our mission is to cultivate innovation, resilience, and success among startups and established enterprises. By building networks and offering sustainable progress, together we're shaping a dynamic future for new ventures.",
    'focus.pyramid': 'At the Bottom of the Pyramid',
    'focus.pyramidDesc': "At the Bottom of the Pyramid, we transform potential into shared prosperity by empowering underserved communities. Through access to resources, training, and opportunities, we unlock economic growth from the ground. Together, we build pathways to financial inclusion, fostering a future where everyone can thrive.",

    // CTA Section
    'cta.expertsHeading': 'Meet the Minds Powering Our Vision',
    'cta.viewMore': 'View More',
    'cta.bodyText': "We are committed to build a shared success whereas we uplift underserved segments of society. We're ensuring a model of growth that's sustainable, impactful, and rewarding for all stakeholders in the ecosystem.",
    'cta.joinUs': 'Join Us!',
    'cta.joinUsSub': 'Driven by Purpose, United in Progress!',
    'cta.emailPlaceholder': 'Enter your email',
    'cta.createAccount': 'Create an account',

    // Reviews
    'reviews.heading': 'Reviews',

    // Testimonials / Comments
    'testimonials.heading': 'What Our Clients Say',
    'testimonials.sub': 'Real feedback from real users',
    'testimonials.leaveComment': 'Leave a Comment',
    'testimonials.name': 'Name',
    'testimonials.namePlaceholder': 'Enter your name',
    'testimonials.email': 'Email',
    'testimonials.emailPlaceholder': 'Enter your Email',
    'testimonials.comment': 'Comment',
    'testimonials.commentPlaceholder': 'Enter your Comment',
    'testimonials.message': 'Message',
    'testimonials.messagePlaceholder': 'Share your thoughts...',
    'testimonials.submit': 'Submit Comment',
    'testimonials.post': 'Post Comment',

    // Footer
    'footer.products': 'Products',
    'footer.learn': 'Learn',
    'footer.about': 'About',
    'footer.blog': 'Blog',
    'footer.follow': 'Follow',
    'footer.legal': 'Legal',
    'footer.terms': 'Terms of Services',
    'footer.privacy': 'Privacy policy',
    'footer.commitment': 'Committed to build a shared success whereas we uplift underserved segments of society.',
    'footer.copyright': '© 2026 kuza Capital Finance',

    // Expert Detail Page
    'expert.backHome': 'Back to Home',
    'expert.about': 'About',
    'expert.achievements': 'Key Achievements',
    'expert.getInTouch': 'Get in Touch',
    'expert.connect': 'Want to connect with',
    'expert.sendEmail': 'Send Email',
    'expert.connectLinkedIn': 'Connect on LinkedIn',
    'expert.notFound': 'Expert not found',

    // Placeholder Page
    'placeholder.description': 'This page is currently under development. Continue customizing this page by prompting the assistant with your specific requirements.',
    'placeholder.tip': '💡 Tip: Tell the assistant what content you\'d like on this page',
    'placeholder.showPreview': 'Show Preview',
    'placeholder.hidePreview': 'Hide Preview',
    'placeholder.overview': 'Overview',
    'placeholder.highlights': 'Key Highlights',
    'placeholder.getInTouch': 'Get in Touch',
    'placeholder.contactMessage': 'Want to learn more about this? Reach out to our team.',
    'placeholder.sendMessage': 'Send Message',
    'placeholder.backHome': 'Back to Home',

    // Features
    'features.heading': 'Discover Our Versatile Product',
    'features.sub': 'Robust tailored solutions for every need',
    'features.whyChoose': 'Why Choose Us',
    'features.clients': 'Active Clients',
    'features.projects': 'Projects Delivered',
    'features.experience': 'Years Experience',
    'features.strategicPlanning': 'Strategic Planning',
    'features.strategicPlanningDesc': 'Comprehensive business strategy development tailored to your goals and market position.',
    'features.digitalTransformation': 'Digital Transformation',
    'features.digitalTransformationDesc': 'Modernize your operations with cutting-edge digital technologies and solutions.',
    'features.marketAnalysis': 'Market Analysis',
    'features.marketAnalysisDesc': 'Deep insights into market trends and competitive landscape for informed decisions.',
    'features.implementationSupport': 'Implementation Support',
    'features.implementationSupportDesc': 'Full-spectrum support throughout the implementation and deployment process.',
    'features.trainingDev': 'Training & Development',
    'features.trainingDevDesc': 'Comprehensive training programs to ensure your team maximizes the solution.',
    'features.monitoring': '24/7 Monitoring',
    'features.monitoringDesc': 'Continuous monitoring and optimization to ensure peak performance always.',

    // Team
    'team.heading': 'Meet the Minds Powering Our Vision',

    // Comment form (home page)
    'comment.heading': 'Leave a Comment',
    'comment.name': 'Name',
    'comment.namePlaceholder': 'Enter your name',
    'comment.email': 'Email',
    'comment.emailPlaceholder': 'Enter your Email',
    'comment.comment': 'Comment',
    'comment.commentPlaceholder': 'Enter your Comment',
    'comment.post': 'Post Comment',
    'comment.sending': 'Sending...',
    'comment.success': 'Your message has been sent successfully! We will get back to you soon.',
    'comment.error': 'Failed to send message. Please try again or email us directly at architectwills@gmail.com',
    'comment.fillAll': 'Please fill in all fields before submitting.',
  },

  sw: {
    // Header / Navigation
    'nav.menu': 'Menyu',
    'nav.home': 'Nyumbani',
    'nav.about': 'Kuhusu Sisi',
    'nav.products': 'Bidhaa Zetu',
    'nav.team': 'Timu Yetu',
    'nav.contact': 'Wasiliana Nasi',
    'nav.language': 'Lugha',

    // Hero Section
    'hero.badge': 'Mpya',
    'hero.badgeText': 'Oktoba 26, 2024. Usajili wa wachuuzi sokoni Kisutu',
    'hero.news1': 'Oktoba 26, 2024. Usajili wa wachuuzi sokoni Kisutu',
    'hero.news2': 'Ushirikiano mpya na SME za ndani kwa ushirikishwaji wa kidijitali',
    'hero.news3': 'Kuza inazindua programu ya kuwawezesha vijana Afrika Mashariki',
    'hero.news4': 'Jiunge na webina yetu kuhusu mikakati ya biashara jumuishi',
    'hero.heading': 'Endelea Kukua',
    'hero.description': 'Katika Kuza, tumejitolea kwa mustakabali ambapo kila mtu—bila kujali asili au uwezo—anathaminiwa, kuwekezwa nguvu, na kushirikishwa. Kwa kuongozwa na ujumuishaji, tunaamini maendeleo ya kweli yanatokana na kuinua sauti mbalimbali na kuunda bidhaa zinazohudumia mahitaji ya kipekee ya kila mtu.',
    'hero.cta': 'Jiunge Nasi',
    'hero.ctaSub': 'Ili kupata taarifa zaidi kwenye barua pepe yako',

    // Mission & Vision
    'mission.title': 'Dhamira',
    'mission.text': 'Kuangazia umuhimu wa ujumuishaji na uwezekano ili kuhakikisha hakuna ndoto inayobaki bila msaada hasa kwa vijana, biashara zinazoibuka, na wale walio chini ya piramidi barani Afrika.',
    'vision.title': 'Maono',
    'vision.text': 'Ili kufikia ukuaji wa pamoja na ustawi wa pamoja, ni muhimu kuunda mikakati na mifumo inayofaidisha kila mtu ndani ya jamii au shirika. Mchakato huu unahitaji ushirikiano katika sekta za kijamii, kiuchumi, na kiserikali ili kuhakikisha rasilimali, fursa na faida zinawafikia watu kwa usawa.',

    // Products Section
    'products.heading': 'Gundua Bidhaa Zetu Zenye Matumizi Mengi',
    'products.headingLine2': 'Aina',
    'products.headingHighlight': 'Suluhisho Maalum kwa Kila Hitaji!',
    'products.discoverMore': 'Gundua zaidi',
    'products.kuzaSokoni': 'Kuza Sokoni',
    'products.kuzaSokoniDesc': 'KUZA Sokoni ni suluhisho la kidijitali linalowapa nguvu wachuuzi wa masoko ya Tanzania kwa huduma za kifedha na zisizo za kifedha. Inalenga kuunda mfumo endelevu na wenye ufanisi kupitia zana za kidijitali na huduma maalum.',
    'products.kuzaMaisha': 'Kuza Maisha',
    'products.kuzaMaishaDesc': 'KUZA Maisha ni suluhisho la kidijitali linalowapa nguvu wachuuzi wa masoko ya Tanzania kwa huduma za kifedha na zisizo za kifedha. Inalenga kuunda mfumo endelevu na wenye ufanisi kupitia zana za kidijitali na huduma maalum.',
    'products.kuzaPay': 'Kuza Pay',
    'products.kuzaPayDesc': 'KUZA Pay ni suluhisho la kidijitali linalowapa nguvu wachuuzi wa masoko ya Tanzania kwa huduma za kifedha na zisizo za kifedha. Inalenga kuunda mfumo endelevu na wenye ufanisi kupitia zana za kidijitali na huduma maalum.',
    'products.kuzaBiashara': 'Kuza Biashara',
    'products.kuzaBiasharaDesc': 'KUZA Biashara ni suluhisho la kidijitali linalowapa nguvu wachuuzi wa masoko ya Tanzania kwa huduma za kifedha na zisizo za kifedha. Inalenga kuunda mfumo endelevu na wenye ufanisi kupitia zana za kidijitali na huduma maalum.',
    'products.kuzaKilimo': 'Kuza Kilimo',
    'products.kuzaKilimoDesc': 'KUZA Kilimo ni suluhisho la kidijitali linalowapa nguvu wachuuzi wa masoko ya Tanzania kwa huduma za kifedha na zisizo za kifedha. Inalenga kuunda mfumo endelevu na wenye ufanisi kupitia zana za kidijitali na huduma maalum.',
    'products.kuzaSpecialGroup': 'KUZA Kundi Maalum / Wafanyakazi',
    'products.kuzaSpecialGroupDesc': 'KUZA Kundi Maalum (Wafanyakazi) inatoa msaada na huduma zinazolengwa kwa wafanyakazi, makundi ya wafanyakazi, na makundi maalum nchini Tanzania. Inatoa ujumuishaji wa kifedha, akiba, mikopo, na zana za kujenga uwezo ili kuboresha maisha na tija mahali pa kazi katika sekta rasmi na isiyo rasmi.',
    'products.kuzaBoda': 'KUZA Boda',
    'products.kuzaBodaDesc': 'KUZA Boda ni jukwaa maalum la kidijitali lililoundwa kwa waendesha bodaboda nchini Tanzania. Linatoa huduma za kifedha kama mikopo ya haraka, bima, akiba, na zana za usimamizi wa biashara, pamoja na msaada usio wa kifedha kama mafunzo ya usalama na vipengele vya jamii ya madereva ili kukuza mapato endelevu na shughuli salama.',
    'products.kuzaSokoniFullDesc': 'KUZA Sokoni ni suluhisho kamili la kidijitali lililoundwa kubadilisha shughuli za masoko kote Tanzania. Kwa kuwapa wachuuzi huduma za kifedha, uhifadhi wa kumbukumbu za kidijitali, usimamizi wa bidhaa, na zana za kushirikiana na wateja, linaunda mfumo endelevu na wenye ufanisi wa soko.',
    'products.kuzaMaishaFullDesc': 'KUZA Maisha ni jukwaa la kuwezesha maisha ambalo linatoa huduma muhimu za kifedha na zisizo za kifedha kwa watu binafsi na kaya. Kutoka mafunzo ya ujuzi na kujenga uwezo hadi ufadhili mdogo na programu za maendeleo ya jamii.',
    'products.kuzaPayFullDesc': 'KUZA Pay ni suluhisho la kisasa la teknolojia ya kifedha linalouwezesha malipo ya kidijitali, uhamisho wa pesa kwa gharama nafuu, na huduma za benki ya simu. Limeshirikishwa na majukwaa makuu ya pesa za simu.',
    'products.kuzaBiasharaFullDesc': 'KUZA Biashara ni jukwaa kamili la suluhisho za biashara linalosaidia biashara zinazoibuka na SME kwa usajili, uzingatiaji, upatikanaji wa mikopo, zana za usimamizi wa kidijitali, na ushauri.',
    'products.kuzaKilimoFullDesc': 'KUZA Kilimo linatumia teknolojia ya kilimo kuwapa wakulima zana za kilimo bora, huduma za ushauri, uhusiano wa soko, na upatikanaji wa ufadhili wa kilimo.',
    'products.kuzaSpecialGroupFullDesc': 'KUZA Kundi Maalum (Wafanyakazi) inatoa msaada na huduma zinazolengwa kwa wafanyakazi, makundi ya wafanyakazi, na makundi maalum nchini Tanzania. Kupitia programu za ujumuishaji wa kifedha, mipango ya akiba, mikopo, na warsha za kujenga uwezo.',
    'products.kuzaBodaFullDesc': 'KUZA Boda ni jukwaa maalum la kidijitali lililoundwa mahsusi kwa waendesha bodaboda nchini Tanzania. Linatoa huduma za kifedha ikiwa ni pamoja na mikopo ya haraka, bima nafuu, mipango ya akiba, na zana za usimamizi wa biashara.',

    // Product Detail Page
    'product.backHome': 'Rudi Nyumbani',
    'product.overview': 'Muhtasari',
    'product.highlights': 'Mambo Muhimu',
    'product.getStarted': 'Anza Sasa',
    'product.contactMessage': 'Una nia na bidhaa hii? Wasiliana nasi kujifunza zaidi.',
    'product.contactUs': 'Wasiliana Nasi',
    'product.notFound': 'Bidhaa haijapatikana',
    'product.tagline': 'Kuwezesha Jamii Kupitia Ubunifu',
    'product.launched': 'Ilizinduliwa',

    // Focus Areas
    'focus.youth': 'Vijana wa Afrika',
    'focus.youthDesc': 'Kujitolea kuhudumia vijana wa Afrika, tunawapa nguvu akili za vijana kwa fursa mpya na rasilimali za kuunda mustakabali wao. Kwa kukuza elimu, ujasiriamali, na uongozi, tunasaidia safari yao kuelekea Afrika yenye ustawi na inayojitegemea. Pamoja, tunaunda njia za vijana wa Afrika kuendesha mabadiliko endelevu.',
    'focus.business': 'Biashara Zinazoibuka',
    'focus.businessDesc': 'Kuwawezesha na kusaidia biashara zinazoibuka, tunatoa rasilimali, ushauri, na ufadhili ili kuwasaidia kufikia ukuaji wao. Dhamira yetu ni kukuza uvumbuzi, ustahimilivu, na mafanikio miongoni mwa biashara mpya na zilizoimarishwa. Kwa kujenga mitandao na kutoa maendeleo endelevu, pamoja tunaunda mustakabali wenye nguvu kwa miradi mipya.',
    'focus.pyramid': 'Chini ya Piramidi',
    'focus.pyramidDesc': 'Chini ya Piramidi, tunabadilisha uwezo kuwa ustawi wa pamoja kwa kuwawezesha jamii zisizopata huduma za kutosha. Kupitia upatikanaji wa rasilimali, mafunzo, na fursa, tunafungua ukuaji wa kiuchumi kutoka chini. Pamoja, tunajenga njia za ujumuishaji wa kifedha, tukikuza mustakabali ambapo kila mtu anaweza kustawi.',

    // CTA Section
    'cta.expertsHeading': 'Kutana na Akili Zinazoendesha Maono Yetu',
    'cta.viewMore': 'Tazama Zaidi',
    'cta.bodyText': 'Tumejitolea kujenga mafanikio ya pamoja huku tukiinua sehemu za jamii zisizopata huduma za kutosha. Tunahakikisha mfano wa ukuaji endelevu, wenye athari, na wenye malipo kwa wadau wote katika mfumo.',
    'cta.joinUs': 'Jiunge Nasi!',
    'cta.joinUsSub': 'Tunaendeshwa na Dhamira, Tumeungana katika Maendeleo!',
    'cta.emailPlaceholder': 'Ingiza barua pepe yako',
    'cta.createAccount': 'Fungua akaunti',

    // Reviews
    'reviews.heading': 'Maoni',

    // Testimonials / Comments
    'testimonials.heading': 'Wateja Wetu Wanasema',
    'testimonials.sub': 'Maoni halisi kutoka kwa watumiaji halisi',
    'testimonials.leaveComment': 'Acha Maoni',
    'testimonials.name': 'Jina',
    'testimonials.namePlaceholder': 'Ingiza jina lako',
    'testimonials.email': 'Barua pepe',
    'testimonials.emailPlaceholder': 'Ingiza barua pepe yako',
    'testimonials.comment': 'Maoni',
    'testimonials.commentPlaceholder': 'Ingiza maoni yako',
    'testimonials.message': 'Ujumbe',
    'testimonials.messagePlaceholder': 'Shiriki mawazo yako...',
    'testimonials.submit': 'Tuma Maoni',
    'testimonials.post': 'Chapisha Maoni',

    // Footer
    'footer.products': 'Bidhaa',
    'footer.learn': 'Jifunze',
    'footer.about': 'Kuhusu',
    'footer.blog': 'Blogu',
    'footer.follow': 'Tufuate',
    'footer.legal': 'Kisheria',
    'footer.terms': 'Masharti ya Huduma',
    'footer.privacy': 'Sera ya Faragha',
    'footer.commitment': 'Tumejitolea kujenga mafanikio ya pamoja huku tukiinua sehemu za jamii zisizopata huduma za kutosha.',
    'footer.copyright': '© 2026 kuza Capital Finance',

    // Expert Detail Page
    'expert.backHome': 'Rudi Nyumbani',
    'expert.about': 'Kuhusu',
    'expert.achievements': 'Mafanikio Muhimu',
    'expert.getInTouch': 'Wasiliana',
    'expert.connect': 'Unataka kuwasiliana na',
    'expert.sendEmail': 'Tuma Barua pepe',
    'expert.connectLinkedIn': 'Unganisha kwenye LinkedIn',
    'expert.notFound': 'Mtaalamu hajapatikana',

    // Placeholder Page
    'placeholder.description': 'Ukurasa huu bado unatengenezwa. Endelea kuboresha ukurasa huu kwa kutoa maelekezo kwa msaidizi kulingana na mahitaji yako maalum.',
    'placeholder.tip': '💡 Kidokezo: Mwambie msaidizi ni maudhui gani ungependa kwenye ukurasa huu',
    'placeholder.showPreview': 'Onyesha Hakikisho',
    'placeholder.hidePreview': 'Ficha Hakikisho',
    'placeholder.overview': 'Muhtasari',
    'placeholder.highlights': 'Mambo Muhimu',
    'placeholder.getInTouch': 'Wasiliana Nasi',
    'placeholder.contactMessage': 'Unataka kujua zaidi kuhusu hili? Wasiliana na timu yetu.',
    'placeholder.sendMessage': 'Tuma Ujumbe',
    'placeholder.backHome': 'Rudi Nyumbani',

    // Features
    'features.heading': 'Gundua Bidhaa Yetu Yenye Matumizi Mengi',
    'features.sub': 'Suluhisho imara maalum kwa kila hitaji',
    'features.whyChoose': 'Kwa Nini Kutuchagua',
    'features.clients': 'Wateja Hai',
    'features.projects': 'Miradi Iliyokamilishwa',
    'features.experience': 'Miaka ya Uzoefu',
    'features.strategicPlanning': 'Mipango ya Kimkakati',
    'features.strategicPlanningDesc': 'Uundaji wa mkakati wa biashara unaofaa malengo yako na nafasi yako sokoni.',
    'features.digitalTransformation': 'Mabadiliko ya Kidijitali',
    'features.digitalTransformationDesc': 'Kisasa shughuli zako kwa teknolojia na suluhisho za kisasa za kidijitali.',
    'features.marketAnalysis': 'Uchambuzi wa Soko',
    'features.marketAnalysisDesc': 'Maarifa ya kina kuhusu mwenendo wa soko na mazingira ya ushindani kwa maamuzi sahihi.',
    'features.implementationSupport': 'Msaada wa Utekelezaji',
    'features.implementationSupportDesc': 'Msaada kamili katika mchakato wote wa utekelezaji na usambazaji.',
    'features.trainingDev': 'Mafunzo na Maendeleo',
    'features.trainingDevDesc': 'Programu za mafunzo za kina ili kuhakikisha timu yako inatumia suluhisho kwa kiwango cha juu.',
    'features.monitoring': 'Ufuatiliaji 24/7',
    'features.monitoringDesc': 'Ufuatiliaji na uboreshaji wa mara kwa mara ili kuhakikisha utendaji wa hali ya juu kila wakati.',

    // Team
    'team.heading': 'Kutana na Akili Zinazoendesha Maono Yetu',

    // Comment form (home page)
    'comment.heading': 'Acha Maoni',
    'comment.name': 'Jina',
    'comment.namePlaceholder': 'Ingiza jina lako',
    'comment.email': 'Barua pepe',
    'comment.emailPlaceholder': 'Ingiza barua pepe yako',
    'comment.comment': 'Maoni',
    'comment.commentPlaceholder': 'Ingiza maoni yako',
    'comment.post': 'Chapisha Maoni',
    'comment.sending': 'Inatuma...',
    'comment.success': 'Ujumbe wako umetumwa kwa mafanikio! Tutawasiliana nawe hivi karibuni.',
    'comment.error': 'Imeshindwa kutuma ujumbe. Tafadhali jaribu tena au tutumie barua pepe moja kwa moja architectwills@gmail.com',
    'comment.fillAll': 'Tafadhali jaza sehemu zote kabla ya kutuma.',
  },
};
