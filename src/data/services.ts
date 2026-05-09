// ============================================================
// SERVICES DATA
// Each service maps to a card on the homepage and a detail page at /services/[slug]
// ============================================================

export interface Service {
  id: number;
  name: string;
  slug: string;
  icon: string;          // lucide-react icon name
  shortDescription: string;
  longDescription: string;
  features: string[];
  technologies: string[];
  metaTitle: string;
  metaDescription: string;
}

export const services: Service[] = [
  {
    id: 1,
    name: "Custom Software Development",
    slug: "custom-software-development",
    icon: "Code2",
    shortDescription:
      "Bespoke, scalable software solutions tailored precisely to your business needs and workflows.",
    longDescription:
      "We design and build custom software that fits your business like a glove. From complex enterprise platforms to lean startup MVPs, our team delivers robust, scalable applications using modern architecture and battle-tested technologies. No off-the-shelf limitations — just software built exactly the way your business needs it.",
    features: [
      "Requirements discovery and solution architecture planning",
      "Agile development with regular demos and feedback loops",
      "Cloud-ready, scalable microservices architecture",
      "Third-party API integrations and system connectors",
      "Comprehensive documentation and knowledge transfer",
      "Ongoing maintenance, support, and feature development",
    ],
    technologies: ["React JS", "Node.js", "Next.js", "MongoDB", "PostgreSQL", "AWS"],
    metaTitle: "Custom Software Development Company USA | Agile Digital Technologies",
    metaDescription:
      "Build bespoke, scalable custom software tailored to your business. Serving US clients in California, New York, and Texas. Get a free consultation.",
  },
  {
    id: 2,
    name: "Mobile App Development",
    slug: "mobile-app-development",
    icon: "Smartphone",
    shortDescription:
      "iOS, Android & cross-platform apps that users love — from concept to App Store launch.",
    longDescription:
      "We build high-performance mobile applications that deliver exceptional user experiences across iOS and Android. Whether you need a native app or a cross-platform solution using React Native, we have the expertise to bring your mobile vision to life — on time and within budget.",
    features: [
      "Native iOS (Swift) and Android (Kotlin) development",
      "Cross-platform apps with React Native",
      "Mobile-first UI/UX design and prototyping",
      "App Store and Google Play submission and compliance",
      "Push notifications, offline mode, and device integrations",
      "Post-launch monitoring, support, and updates",
    ],
    technologies: ["React Native", "Swift", "Kotlin", "Firebase", "Laravel", "Node.js"],
    metaTitle: "Mobile App Development Company USA | Agile Digital Technologies",
    metaDescription:
      "Custom iOS, Android & React Native app development for US businesses. From concept to App Store. Get a free mobile app consultation.",
  },
  {
    id: 3,
    name: "Website Design & Development",
    slug: "website-design-development",
    icon: "Globe",
    shortDescription:
      "High-performance websites and web applications that look stunning and convert visitors into clients.",
    longDescription:
      "Your website is your #1 sales tool. We build fast, responsive, SEO-optimized web applications and corporate sites that not only look impressive but are engineered to perform — loading fast, ranking well on Google, and converting visitors into qualified leads.",
    features: [
      "Fully custom design — no templates or page builders",
      "Mobile-first, fully responsive across all devices",
      "SEO-optimized from the ground up (Core Web Vitals)",
      "CMS integration for easy content management",
      "E-commerce development (Shopify, WooCommerce, custom)",
      "Performance optimization, hosting, and deployment",
    ],
    technologies: ["Next.js", "React", "WordPress", "Shopify", "Tailwind CSS", "Vercel"],
    metaTitle: "Website Design & Development Company USA | Agile Digital Technologies",
    metaDescription:
      "Custom, SEO-optimized website design and development for US businesses. Fast, responsive, and built to convert. Get a free website consultation.",
  },
  {
    id: 4,
    name: "Data & AI Solutions",
    slug: "data-ai-solutions",
    icon: "BrainCircuit",
    shortDescription:
      "Business intelligence, predictive analytics, machine learning, and generative AI to power smarter decisions.",
    longDescription:
      "Data is your most valuable asset. We help you collect, process, and transform it into actionable intelligence. From BI dashboards and predictive analytics to custom ML models and generative AI integrations, we build data solutions that drive measurable business outcomes.",
    features: [
      "Business intelligence dashboards and reporting",
      "Predictive analytics and demand forecasting",
      "Machine learning model development and deployment",
      "Generative AI integration (GPT, Claude, custom LLMs)",
      "Data pipeline engineering and ETL automation",
      "Cloud data warehousing (AWS, GCP, Azure)",
    ],
    technologies: ["Python", "TensorFlow", "Power BI", "Apache Spark", "AWS SageMaker", "LangChain"],
    metaTitle: "Data & AI Solutions Company USA | Agile Digital Technologies",
    metaDescription:
      "Business intelligence, machine learning, and generative AI solutions for US enterprises. Transform your data into competitive advantage.",
  },
  {
    id: 5,
    name: "UI/UX Development",
    slug: "ui-ux-development",
    icon: "Palette",
    shortDescription:
      "Research-driven design that converts — from wireframes and prototypes to pixel-perfect interfaces.",
    longDescription:
      "Great design is invisible — it just works. Our UI/UX team creates intuitive, visually compelling interfaces that users love and that drive conversion. We combine user research, information architecture, and visual design to craft experiences that achieve your business goals.",
    features: [
      "User research, personas, and journey mapping",
      "Information architecture and wireframing",
      "Interactive prototyping in Figma",
      "High-fidelity UI design with brand consistency",
      "Usability testing and iterative refinement",
      "Design system and reusable component library",
    ],
    technologies: ["Figma", "Adobe XD", "Principle", "Zeplin", "InVision", "Maze"],
    metaTitle: "UI/UX Design Services USA | Agile Digital Technologies",
    metaDescription:
      "Research-driven UI/UX design for web and mobile. From wireframes to pixel-perfect interfaces that convert. Get a free design consultation.",
  },
  {
    id: 6,
    name: "Digital Marketing & SEO",
    slug: "digital-marketing-seo",
    icon: "TrendingUp",
    shortDescription:
      "Content strategy, paid advertising, and SEO to grow your digital presence and win US market share.",
    longDescription:
      "Visibility drives revenue. Our digital marketing team builds data-driven strategies that get you found online, generate qualified leads, and grow your US market presence. From technical SEO and content marketing to Google Ads management, we connect your brand to the right audience at the right time.",
    features: [
      "Technical SEO audits and on-page optimization",
      "Keyword research and content strategy",
      "Blog and long-form content writing",
      "Google Ads and paid social management",
      "Link building and domain authority growth",
      "Monthly analytics reporting and strategy review",
    ],
    technologies: ["Google Analytics 4", "SEMrush", "Ahrefs", "Google Ads", "HubSpot", "Search Console"],
    metaTitle: "Digital Marketing & SEO Services USA | Agile Digital Technologies",
    metaDescription:
      "SEO, content marketing, and Google Ads management for US businesses. Grow your digital presence and generate qualified leads.",
  },
  {
    id: 7,
    name: "QA & Software Testing",
    slug: "qa-software-testing",
    icon: "ShieldCheck",
    shortDescription:
      "Manual, automation, performance, and API testing — so you ship with confidence, not crossed fingers.",
    longDescription:
      "Bugs in production cost money and reputation. Our QA engineers embed into your development cycle to catch issues early and ensure every release meets the highest quality standards. From test planning and manual exploration to fully automated regression suites, we give you the confidence to ship fast without breaking things.",
    features: [
      "Test planning, strategy, and case documentation",
      "Manual and exploratory functional testing",
      "Selenium and Cypress test automation",
      "API and integration testing with Postman",
      "Performance and load testing with JMeter",
      "CI/CD pipeline integration for automated test runs",
    ],
    technologies: ["Selenium", "Cypress", "Jest", "Postman", "JMeter", "GitHub Actions"],
    metaTitle: "QA & Software Testing Services USA | Agile Digital Technologies",
    metaDescription:
      "Manual testing, automation, performance, and API testing services for US software teams. Ship with confidence. Get a free QA consultation.",
  },
  {
    id: 8,
    name: "Dedicated Development Teams",
    slug: "dedicated-development-teams",
    icon: "Users",
    shortDescription:
      "Pre-vetted offshore developers who integrate seamlessly into your team — at a fraction of US hiring cost.",
    longDescription:
      "Scale your engineering capacity without the overhead. Our dedicated development teams model gives you full-time senior developers who work exclusively on your project, aligned to your timezone, using your tools and processes. All the talent, none of the recruitment headaches or employer overhead.",
    features: [
      "Senior developers across all major stacks",
      "Flexible team sizes — 1 to 20+ developers",
      "US-friendly time zone overlap and daily standups",
      "Full transparency — weekly reporting and time tracking",
      "No recruitment fees, no HR overhead",
      "Month-to-month or long-term engagement models",
    ],
    technologies: ["React", "Node.js", "Python", "Laravel", "React Native", "Next.js"],
    metaTitle: "Dedicated Development Teams for US Clients | Agile Digital Technologies",
    metaDescription:
      "Hire pre-vetted offshore developers who work as an extension of your team. Senior engineers, US-friendly hours, full transparency.",
  },
];
