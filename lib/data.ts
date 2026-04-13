// ============================================
// Static Data — Portfolio Content
// Edit this file to update your portfolio info
// ============================================

export const personal = {
  name: "Yadhukrishna",
  firstName: "Yadhukrishna",
  lastName: "",
  roles: [
    "Full-Stack Developer",
    "Angular & Java Engineer",
    "SaaS Platform Builder",
    
  ],
  tagline: "Building scalable SaaS products, business websites, and AI-powered web applications.",
  about: `I am a full-stack developer with 2 years of experience building scalable SaaS platforms, business websites, and custom web applications. I specialize in Angular, TypeScript, Java, and Quarkus, with hands-on experience in AWS, authentication systems like Keycloak, and AI-driven features such as RAG.

I have delivered 10+ applications across travel, e-commerce, CRM, ERP, loyalty, and content management domains, with a strong focus on clean architecture, performance, and scalable design. I enjoy turning complex requirements into polished user experiences and reliable backend systems.`,
  location: "Kerala, India",
  email: "yadhu623871@gmail.com",
  resumeUrl: "/Yadhukrishna-Resume.docx",
};

export const social = [
  { label: "GitHub",   href: "https://github.com/yadhukrishna6",   icon: "github" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/yadhu-krishna-2b1173249", icon: "linkedin" },
  { label: "Email",    href: "mailto:yadhu623871@gmail.com",  icon: "mail" },
];

export type Skill = {
  name: string;
  icon: string;
  level: number; // 0–100
  category: "Frontend" | "Backend" | "Tools" | "Design";
};

export const skills: Skill[] = [
  // Frontend
  { name: "Angular",             icon: "🅰️", level: 94, category: "Frontend" },
  { name: "TypeScript",          icon: "🔷", level: 92, category: "Frontend" },
  { name: "HTML / SCSS / CSS",   icon: "💠", level: 90, category: "Frontend" },
  { name: "Tailwind CSS",        icon: "🎨", level: 85, category: "Frontend" },
  { name: "PrimeNG / PrimeFlex", icon: "📦", level: 80, category: "Frontend" },
  // Backend
  { name: "Java",                icon: "☕", level: 92, category: "Backend" },
  { name: "Quarkus",             icon: "⚙️", level: 88, category: "Backend" },
  { name: "MySQL",               icon: "🐬", level: 84, category: "Backend" },
  { name: "Hibernate ORM",       icon: "🗄️", level: 80, category: "Backend" },
  { name: "Keycloak",            icon: "🔐", level: 78, category: "Backend" },
  // Tools
  { name: "AWS (S3, EC2, CloudFront, Cognito)", icon: "☁️", level: 82, category: "Tools" },
  { name: "Git / GitHub",        icon: "🐙", level: 90, category: "Tools" },
  { name: "Swagger / Postman",   icon: "🧪", level: 78, category: "Tools" },
  { name: "Figma / Canva / GIMP",icon: "🖌️", level: 74, category: "Design" },
];

export type Project = {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  image: string;
  githubUrl: string;
  liveUrl: string;
  featured: boolean;
};

export const projects: Project[] = [
  {
    id: "century-elite",
    title: "Century Elite Loyalty Program",
    description: "Responsive loyalty platform for Century Hotels with secure AWS deployment and user authentication.",
    longDescription: `Built a responsive customer website and admin dashboard for Century Hotels Qatar using Angular,
TypeScript, and SCSS. Integrated with Quarkus backend APIs, deployed the frontend to AWS S3 + CloudFront,
and implemented secure authentication using AWS Cognito.`,
    tags: ["Angular", "TypeScript", "SCSS", "AWS", "Cognito"],
    image: "/projects/nexus.jpg",
    githubUrl: "https://github.com",
    liveUrl: "https://elite.centuryhotels.qa/#/",
    featured: true,
  },
  {
    id: "travel-systems",
    title: "Travel Systems Suite",
    description: "Voucher, itinerary, and marketplace workflows built for travel booking and service management.",
    longDescription: `Designed and developed travel voucher generation, itinerary planning, and marketplace features for
end-to-end booking and customer service management. Delivered scalable workflows for reservations, scheduling,
and user engagement across the travel domain.`,
    tags: ["Angular", "TypeScript", "Java", "Quarkus", "MySQL"],
    image: "/projects/orion.jpg",
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    featured: true,
  },
  {
    id: "enterprise-apps",
    title: "ERP & CRM Applications",
    description: "Enterprise workflow systems for operations, customer management, and loyalty engagement.",
    longDescription: `Built ERP and CRM applications to manage business operations, customer data, and loyalty workflows.
Implemented role-based access, dynamic reporting, and integrations for rewards, retention, and activity tracking.`,
    tags: ["Angular", "Java", "Quarkus", "MySQL", "ERP"],
    image: "/projects/lyra.jpg",
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    featured: false,
  },
  {
    id: "cms-platform",
    title: "Content Management System",
    description: "Custom CMS for dynamic content creation, publishing workflows, and admin control.",
    longDescription: `Built a content management system enabling flexible content creation, editing, and administrative workflows.
Added role-based access and publishing controls to support dynamic editorial operations.`,
    tags: ["Angular", "TypeScript", "CMS", "Workflow", "Admin"],
    image: "/projects/forge.jpg",
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    featured: false,
  },
  {
    id: "habitatuk",
    title: "HabitatUK Website",
    description: "SEO-optimized responsive website built with Angular and PrimeNG for a UK-based brand.",
    longDescription: `Designed and developed a responsive, SEO-friendly website using Angular, PrimeNG, and PrimeFlex.
Deployed the site on AWS S3 + CloudFront to deliver a high-performance global experience.`,
    tags: ["Angular", "PrimeNG", "PrimeFlex", "AWS", "SEO"],
    image: "/projects/pulse.jpg",
    githubUrl: "https://github.com",
    liveUrl: "https://habitatuk.co.uk/",
    featured: false,
  },
  {
    id: "seastore",
    title: "Seastore Marine Suppliers",
    description: "Responsive brand website created for a UAE supplier with polished visual design.",
    longDescription: `Developed and enhanced multiple web pages using HTML and CSS to deliver a responsive, professional website.
Aligned the site with brand identity and deployed it on AWS S3 + CloudFront.`,
    tags: ["HTML", "CSS", "Responsive Design", "AWS", "Brand"],
    image: "/projects/atlas.jpg",
    githubUrl: "https://github.com",
    liveUrl: "https://seastoresupplies.com/index.html",
    featured: false,
  },
  {
    id: "pureline-architects",
    title: "Pureline Architects Website",
    description: "Professional architecture portfolio website showcasing design projects and services.",
    longDescription: `Built a modern, responsive portfolio website for Pureline Architects to showcase their architectural projects,
expertise, and services. The site features smooth navigation, project galleries, and client information with a
professional design that reflects architectural excellence.`,
    tags: ["HTML", "CSS", "Responsive Design", "Portfolio", "GitHub Pages"],
    image: "/projects/pureline.jpg",
    githubUrl: "https://github.com/yadhukrishna6/Pureline-Architects-website",
    liveUrl: "https://yadhukrishna6.github.io/Pureline-Architects-website/home",
    featured: false,
  },
  {
    id: "news-app-flutter",
    title: "News App Flutter",
    description: "Mobile news application built with Flutter for real-time news delivery and reading.",
    longDescription: `Developed a cross-platform news application using Flutter that fetches real-time news from APIs,
displays articles in an intuitive interface, and allows users to read, save, and share articles. Features include
category filtering, search functionality, and offline reading capabilities.`,
    tags: ["Flutter", "Dart", "News API", "Mobile App", "Cross-platform"],
    image: "/projects/newsapp.jpg",
    githubUrl: "https://github.com/yadhukrishna6",
    liveUrl: "https://github.com/yadhukrishna6",
    featured: false,
  },
];

export type Experience = {
  id: string;
  role: string;
  company: string;
  companyUrl: string;
  period: string;
  location: string;
  description: string;
  bullets: string[];
  tags: string[];
};

export const experience: Experience[] = [
  {
    id: "freelance",
    role: "Freelance Full-Stack Developer",
    company: "Independent",
    companyUrl: "https://example.com",
    period: "2022 — Present",
    location: "Remote",
    description: "Building scalable SaaS platforms, business websites, and custom web applications across multiple domains.",
    bullets: [
      "Delivered 10+ applications across travel, e-commerce, CRM, ERP, loyalty, and CMS domains",
      "Built full-stack solutions with Angular, TypeScript, Java, Quarkus, and MySQL",
      "Designed clean architecture and scalable services with a strong focus on performance and maintainability",
    ],
    tags: ["Angular", "Java", "Quarkus", "MySQL", "AWS"],
  },
  {
    id: "century-elite",
    role: "Developer — Century Elite Loyalty Program",
    company: "Century Hotels, Qatar",
    companyUrl: "https://centuryhotelsqatar.com",
    period: "2023",
    location: "Qatar",
    description: "Delivered a responsive loyalty website and admin portal with AWS deployment and secure authentication.",
    bullets: [
      "Developed customer and admin interfaces using Angular, TypeScript, and SCSS",
      "Integrated Quarkus backend APIs and designed loyalty system entities",
      "Deployed the frontend on AWS S3 + CloudFront and enabled authentication with AWS Cognito",
    ],
    tags: ["Angular", "TypeScript", "SCSS", "AWS", "Cognito"],
  },
  {
    id: "travel-systems",
    role: "Developer — Travel Systems",
    company: "Travel & Booking Solutions",
    companyUrl: "https://example.com",
    period: "2022",
    location: "Remote",
    description: "Built travel voucher, itinerary, and marketplace features for booking and operations management.",
    bullets: [
      "Implemented travel voucher generation, itinerary planning, and marketplace workflows",
      "Designed scalable reservation and customer interaction processes to support dynamic bookings",
      "Collaborated with teams to deliver a reliable travel operations platform",
    ],
    tags: ["Angular", "TypeScript", "Java", "Quarkus", "MySQL"],
  },
  {
    id: "enterprise-apps",
    role: "Developer — ERP / CRM / Loyalty",
    company: "Enterprise Applications",
    companyUrl: "https://example.com",
    period: "2022",
    location: "Remote",
    description: "Built business workflow systems for customer management, operations, and rewards programs.",
    bullets: [
      "Implemented ERP and CRM capabilities for business operations and customer data management",
      "Built loyalty program features for rewards, retention, and activity tracking",
      "Developed secure frontend interfaces and backend services for enterprise use cases",
    ],
    tags: ["ERP", "CRM", "Loyalty", "Angular", "Java"],
  },
  {
    id: "marketing-sites",
    role: "Web Developer — Marketing Websites",
    company: "HabitatUK & Seastore",
    companyUrl: "https://example.com",
    period: "2022",
    location: "Remote",
    description: "Developed SEO-friendly and responsive websites for UK and UAE brands with AWS hosting.",
    bullets: [
      "Built an SEO-optimized responsive website for HabitatUK using Angular, PrimeNG, and PrimeFlex",
      "Developed responsive brand pages for Seastore Marine Suppliers using HTML and CSS",
      "Deployed both sites on AWS S3 + CloudFront for global performance and scalability",
    ],
    tags: ["Angular", "PrimeNG", "HTML", "CSS", "AWS"],
  },
];
