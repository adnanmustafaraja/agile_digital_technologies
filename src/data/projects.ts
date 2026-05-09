// ============================================================
// PROJECTS DATA
// Each project maps to a card on the homepage and a detail page at /projects/[slug]
// ============================================================

export interface Project {
  id: number;
  name: string;
  slug: string;
  category: string;
  client: string;
  tech: string[];
  color: string;           // Tailwind gradient classes for the card visual
  shortDescription: string;
  longDescription: string;
  challenge: string;
  solution: string;
  results: string[];
  metaTitle: string;
  metaDescription: string;
}

export const projects: Project[] = [
  {
    id: 1,
    name: "ATHATH",
    slug: "athath",
    category: "Mobile Application",
    client: "ATHATH",
    tech: ["Android", "Laravel", "MySQL"],
    color: "from-emerald-600 to-teal-800",
    shortDescription:
      "A furniture marketplace mobile app for the Middle East enabling seamless product browsing, dimension configuration, and ordering.",
    longDescription:
      "ATHATH is a full-featured furniture marketplace application designed for the Middle East market. We built a native Android app with an intuitive product catalogue, detailed specifications, dimension customization, cart management, and order placement — all backed by a robust Laravel REST API.",
    challenge:
      "The client needed a feature-rich marketplace capable of handling thousands of furniture SKUs with dimension and material variants, bilingual Arabic/English support, and seamless integration with their existing inventory management system.",
    solution:
      "We built a native Android app with a Laravel backend API, implementing a custom product configuration engine, bilingual UI with RTL support, and a clean inventory sync integration. The app was performance-optimized for mid-range Android devices common in the target market.",
    results: [
      "Successfully launched on the Google Play Store",
      "Handles 1,000+ furniture SKUs with dimension variants",
      "Bilingual Arabic / English user experience with full RTL support",
      "Seamless integration with existing inventory management system",
    ],
    metaTitle: "ATHATH Furniture App — Mobile Development Case Study | ADT",
    metaDescription:
      "How Agile Digital Technologies built a bilingual furniture marketplace app for the Middle East using Android and Laravel.",
  },
  {
    id: 2,
    name: "Sports Ballistics",
    slug: "sports-ballistics",
    category: "Mobile Application",
    client: "Sports Ballistics",
    tech: ["React Native", "Laravel", "MySQL"],
    color: "from-red-600 to-purple-800",
    shortDescription:
      "A multi-sport management platform with dedicated apps for Basketball, Volleyball, and Toddler training programs.",
    longDescription:
      "Sports Ballistics is a comprehensive sports management ecosystem comprising multiple React Native apps — Basketball Ballistics, Volleyball Ballistics, and Toddler Ballistics. Each sub-app serves coaches, athletes, and program administrators with real-time dashboards, athlete profiles, training plan management, and performance tracking.",
    challenge:
      "Building a single codebase that could power three distinct sports management apps — each with unique workflows, user roles, and data models — while sharing authentication, user management, and backend infrastructure to minimize cost and maintenance overhead.",
    solution:
      "We architected a shared Laravel backend with sport-specific modules, and used React Native with a shared component and navigation library to build three distinct apps from one codebase, reducing development time by approximately 40% compared to building each app separately.",
    results: [
      "Three fully independent sports apps shipped from one shared codebase",
      "Coach and athlete dashboards with real-time performance data",
      "Cross-platform delivery on both iOS and Android",
      "~40% faster development through shared architecture and component reuse",
    ],
    metaTitle: "Sports Ballistics — Multi-Sport App Case Study | ADT",
    metaDescription:
      "How Agile Digital Technologies built three sports management apps from a single React Native + Laravel codebase for Sports Ballistics.",
  },
  {
    id: 3,
    name: "Agile ERP",
    slug: "agile-erp",
    category: "Custom Software",
    client: "Internal Product",
    tech: ["React JS", "Node.js", "Express JS", "MongoDB"],
    color: "from-blue-500 to-cyan-700",
    shortDescription:
      "A full-featured ERP system with financial dashboards, order management, invoicing, and multi-role user management.",
    longDescription:
      "Agile ERP is our internally developed Enterprise Resource Planning system, built on the MERN stack. It features a rich analytics dashboard with income/expense tracking, order management, user and subscription plan management, billing, coupon systems, email template management, and comprehensive financial reporting.",
    challenge:
      "Designing a flexible ERP that could serve businesses of different sizes and industries, with role-based access control, real-time financial reporting, and a clean UI that doesn't intimidate non-technical users.",
    solution:
      "We built a modular React frontend with a Node.js/Express API and MongoDB database, implementing granular role-based permissions, real-time chart updates via polling, and a pluggable module system that lets clients enable only the features their business needs.",
    results: [
      "Comprehensive financial reporting with income/expense analytics and charts",
      "Role-based access control for Admin, Manager, and Staff tiers",
      "Modular architecture enabling rapid addition of new business modules",
      "Deployed and actively serving multiple client organizations",
    ],
    metaTitle: "Agile ERP — Custom ERP Development Case Study | ADT",
    metaDescription:
      "How Agile Digital Technologies built a full-featured ERP system on the MERN stack with real-time dashboards and multi-role access control.",
  },
  {
    id: 4,
    name: "Agile CRM",
    slug: "agile-crm",
    category: "Custom Software",
    client: "Internal Product",
    tech: ["Laravel", "MySQL", "HTML", "CSS"],
    color: "from-slate-600 to-navy-dark",
    shortDescription:
      "A CRM platform with deal pipeline management, contact tracking, agent performance metrics, and revenue analytics.",
    longDescription:
      "Agile CRM is our custom Customer Relationship Management platform built with Laravel and MySQL. It provides sales teams with a full deal pipeline from lead to close, contact and company management, activity tracking, agent performance leaderboards, and detailed cross-dimensional revenue analytics — all in a clean, dark-themed interface.",
    challenge:
      "Sales teams needed a powerful CRM with deep reporting capabilities that felt fast and intuitive — without the complexity, steep learning curve, and high cost of enterprise platforms like Salesforce or HubSpot.",
    solution:
      "We built a Laravel-based CRM with a carefully designed relational data model enabling complex cross-referenced reporting (deals by agent, stage, month, category) while keeping the interface clean, fast, and easy to onboard.",
    results: [
      "Full deal pipeline management from initial lead to closed sale",
      "Agent performance metrics, leaderboards, and activity tracking",
      "Revenue analytics broken down by category, agent, and time period",
      "Significantly lower total cost of ownership vs. commercial CRM platforms",
    ],
    metaTitle: "Agile CRM — Custom CRM Development Case Study | ADT",
    metaDescription:
      "How Agile Digital Technologies built a powerful custom CRM with deal pipelines, agent analytics, and revenue reporting using Laravel and MySQL.",
  },
];
