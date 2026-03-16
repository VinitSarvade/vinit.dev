import type { IconType } from "react-icons";
import { LuGithub, LuLinkedin, LuMail, LuSparkles } from "react-icons/lu";

export const PORTFOLIO_DATA = {
  profile: {
    name: "Vinit Sarvade",
    role: "Fullstack Engineer | AI Tools",
    socials: [
      {
        name: "GitHub",
        icon: LuGithub,
        url: "https://github.com/VinitSarvade",
      },
      {
        name: "LinkedIn",
        icon: LuLinkedin,
        url: "https://www.linkedin.com/in/vinit-sarvade/",
      },
      { name: "Email", icon: LuMail, url: "mailto:vinit.sarvade.08@gmail.com" },
    ],
  },
  contact: {
    website: "vinit.dev",
    location: "Bangalore, India",
  },
  skills: [
    {
      category: "Frontend",
      items: [
        "HTML & CSS", "CSS-in-JS", "TailwindCSS", "SASS/SCSS",
        "React.js", "Next.js", "Tanstack Start", "AngularJS", "Angular",
        "Vue", "React Query", "Redux", "styled-components", "Zustand",
        "Shadcn components", "Astro", "SSR (Server Side Rendering)",
        "WebSockets", "Vite", "Webpack", "CDN",
      ],
    },
    {
      category: "Mobile",
      items: [
        "React Native", "Expo", "Ionic",
      ],
    },
    {
      category: "Backend",
      items: [
        "TypeScript", "Golang", "Node.js", "Nest.js", "PHP", "Python",
        "Ruby on Rails", "GraphQL", "PostgreSQL", "MySQL", "MongoDB", "Redis",
        "Prisma", "Drizzle", "RabbitMQ", "Docker", "Kubernetes", "AWS",
      ],
    },
    {
      category: "Testing",
      items: [
        "React Testing Library", "Jest", "RSpec", "Appium",
        "Playwright", "Cypress",
      ],
    },
    {
      category: "AI",
      items: [
        "AI Agents", "AI SDK", "AI tools",
        "LangChain", "Vector Database", "Codex", "Claude Code",
      ],
    },
    {
      category: "Other",
      items: [
        "SEO", "Agile Methodologies", "Team management",
        "Project Management", "Electron", "electron-vite",
      ],
    },
  ],
  education: [
    {
      degree: "Master of Computer Applications",
      school: "Gogte Institute Of Technology",
      period: "2016",
    },
    {
      degree: "Bachelor of Computer Applications",
      school: "People Tree Education Society",
      period: "2013",
    },
  ],
  certificates: [
    {
      title: "DeepSearch in TypeScript",
      url: "https://res.cloudinary.com/total-typescript/image/upload/v1760249663/certificate/63fcc239-787f-4d2f-b22b-3e22db3b5bd3/build-deepsearch-in-typescript.png",
      image: "/images/certificates/deepsearch-in-typescript.png",
    },
    {
      title: "AI SDK V6 Workshop",
      url: "https://res.cloudinary.com/total-typescript/image/upload/v1769768914/certificate/63fcc239-787f-4d2f-b22b-3e22db3b5bd3/ai-sdk-v6-crash-course.png",
      image: "/images/certificates/ai-sdk-v6-crash-course.png",
    },
    {
      title: "React - The Complete Guide",
      url: "https://www.udemy.com/certificate/UC-6e232acf-58da-4d4a-9aea-6ca86893657a",
      image: "/images/certificates/react-complete-guide.jpg"
    },
    {
      title: "Golang",
      url: "https://www.udemy.com/certificate/UC-46374551-3349-44e5-86c0-ae52dd220991/",
      image: "/images/certificates/golang.jpg"
    },
    {
      title: "Running Kubernetes on AWS (EKS)",
      url: "https://www.linkedin.com/learning/certificates/6e0bb0c6b10b421ef456861ae21997320d5bf3e1486abc46b3a39c1e274f682a?trk=share_certificate",
      image: "/images/certificates/linkedin-k8s.jpeg"
    },
  ],
  about: [
    "I'm a full-stack engineer with over 9 years of experience building production-grade web applications across e-commerce, SaaS, climate tech, and multimedia. I've been a founding engineer, a principal engineer, and everything in between.",
    "I specialise in React, Next.js, and TypeScript on the frontend, and Golang, Node.js, and Ruby on Rails on the backend. I've built and shipped AI-powered features in production, including LLM-driven workflows, simulation engines, OCR-based tools, and conversational assistants using AI SDKs and vector databases.",
    "I care about the craft. I've refactored messy codebases, migrated legacy architectures, built design systems from scratch, and led and mentored teams of engineers. I believe good engineering culture is as important as good code.",
  ],
  experience: [
    {
      role: "Senior Software Engineer",
      company: "CambAI",
      location: "Remote",
      period: "Oct 2025 - Jan 2026",
      description: [
        "Developed and shipped feature enhancements for the Camb Studio platform using React, NodeJS, and TypeScript, ensuring compatibility with high-traffic workflows and seamless integration with multimedia editing tools.",
        "Enhanced video and audio synchronization within the subtitle editor by applying efficient state management and responsive design principles to deliver a smoother user experience and reduce 10% time spent in dubbing and subtitling workflows.",
        "Refactored the studio editor architecture from a fragmented mix of Zustand, React Context, and duplicated components into a structured component composition pattern with Zustand as the single source of truth, eliminating unnecessary re-renders across multiple components and significantly improving maintainability and state predictability.",
        "Built an OCR-based screen translation feature for Savante, a desktop app built with Electron — users draw a box on screen, OCR captures the content, and a text transformation is applied instantly. Also upgraded the app from an older Electron version to a modern build with standardized tooling using electron-vite.",
      ],
    },
    {
      role: "Principal Engineer",
      company: "Unibloom",
      location: "Remote",
      period: "Jan 2024 - Sept 2025",
      description: [
        "Led the development of the climate action planning tool, enabling users to plan carbon footprint reductions efficiently.",
        "Utilized AI to accelerate sustainability decision-making by orchestrating simulations and building AI-driven workflows and a chatbot that provided instant insights and answers to complex sustainability-related queries.",
        "Designed & Developed advanced software in collaboration with climate specialists, using AI and data analytics to deliver rapid, actionable insights for sustainability planning initiatives.",
      ],
    },
    {
      role: "Senior Frontend Engineer",
      company: "Voicemod",
      location: "Remote",
      period: "June 2023 - Dec 2023",
      description: [
        "Built the Gift a Subscription feature, enabling users to purchase and send Voicemod subscriptions to friends, driving a new revenue stream.",
        "Hardened the authentication microservice, improving security and reliability for the platform's login and session management flows.",
        "Supported the migration of the Voice Store from a legacy codebase to Nuxt.js, implementing SEO improvements that resulted in 8% more organic traffic within the first 2 weeks post migration.",
      ],
    },
    {
      role: "Founding Engineer",
      company: "Flurn",
      location: "Bangalore, India",
      period: "June 2021 - Feb 2023",
      description: [
        "Designed and implemented the initial technology stack, enabling rapid MVP development and scalable architecture.",
        "Developed MVP and led iterative releases based on user feedback, achieving product-market fit within a few months.",
        "Built the Web app in Next.js, mobile apps in React Native, and the backend API in a Golang server backed by a PostgreSQL database and Redis for caching and asynchronous task processing.",
        "Recruited and mentored a team of 8 individuals with varying experience levels, from interns to senior engineers, while fostering a culture of accountability, best practices, and code quality through code review.",
        "Led customer interviews during early product development, uncovering a critical gap between our technically optimised solution and what end users actually needed. Drove a product rethink that prioritised simplicity and clarity over technical precision.",
      ],
    },
    {
      role: "Senior Software Engineer",
      company: "Betterworks",
      location: "Remote",
      period: "Aug 2020 - May 2021",
      description: [
        "Betterworks Engage — An employee engagement platform for companies, a tool for employee engagement surveys, gathering feedback, and providing insightful analytics over the data collected.",
        "Crafted interactive analytics visualizations and delivered new data-driven features using React and data visualization libraries by transforming raw feedback data into actionable dashboards.",
        "Built the Employee lifecycle analysis, where one can view the favorability scores across the employee lifecycle from onboarding to separation.",
        "Improved the application performance by implementing data caching at the API, which reduced the API latency by 60% and the database load by close to 40%.",
        "Maintained and enhanced React Native mobile application for employee surveys and quizzes.",
        "Improved the notification deliveries by squashing several bugs and using up-to-date dependencies.",
      ],
    },
    {
      role: "Senior Software Engineer",
      company: "Furlenco",
      location: "Bangalore, India",
      period: "April 2018 - July 2020",
      description: [
        "Architected and maintained scalable back-end microservices and developed frontend interfaces for a high-traffic e-commerce storefront, collaborating closely with designers, PMs, and QA to deliver features on schedule.",
        "Led the redesign and modernization of the storefront architecture, improving navigation and visuals, and refactored legacy code to modern standards. Set up a component design system using React.js and styled-components.",
        "Migrated from a single-page application to a SSR (server-side rendered) React architecture, reducing load times by 30% and implementing SEO strategies that increased organic search traffic by at least 20%.",
        "Drove the adoption of engineering best practices, including code reviews, CI/CD, and automated testing. Introduced TypeScript to help reduce type issues and catch bugs early.",
        "Owned and scaled critical commerce services, including payments microservices, API gateway, and a Rails-based catalog management service with Sidekiq for async processing, CI/CD pipelines, and deployment scripts, enabling reliable scaling and faster release cycles.",
        "Mentored junior engineers on frontend and backend best practices, fostering a culture of code quality and continuous improvement.",
      ],
    },
    {
      role: "Software Engineer",
      company: "HolidayIQ",
      location: "Bangalore, India",
      period: "Nov 2017 - April 2018",
      description: [
        "Developed web interfaces for multiple products, including HolidayIQ International Destinations, Community platform, and Video Stories microsite, delivering features that improved user engagement and content discovery.",
        "Contributed to the migration of the International Destinations microsite to React, gaining hands-on experience with modern frontend frameworks and improving site maintainability.",
        "Designed and built campaign landing pages and HTML marketing emails, collaborating with designers and marketers to ensure brand consistency and responsive design across devices.",
        "Grew rapidly in full-stack skills, actively learning modern JavaScript, responsive design techniques, and cross-browser optimizations while shipping production features.",
        "Engineered and launched 5+ production features using ReactJS over a 12-month period, increasing cross-platform user interactions by 25%.",
      ],
    },
    {
      role: "Software Developer",
      company: "Webrino Business Software LLP",
      location: "Bangalore, India",
      period: "June 2016 - Oct 2017",
      description: [
        "Built core features for a cloud-based omnichannel, multicurrency ERP web and mobile application serving global SMBs and enterprises.",
        "Improved user experience across the ERP platform, including major enhancements to the RFQ (Request for Quotation) flow, Inventory & SKU management for easier viewing and updates, and shipping label generation with printable formats to streamline fulfillment operations and vendor-buyer interactions.",
        "Collaborated with the accounting team to design and implement the ERP's complete accounting system, integrating invoicing, ledgers, and financial reporting.",
        "Developed the GST tax module when GST was introduced, ensuring accurate compliance and seamless integration into existing financial workflows.",
        "Constructed a mobile application for the ERP platform using the Ionic Framework, ensuring seamless access to ERP functionalities on mobile devices.",
        "Built an internal superadmin dashboard using Ruby on Rails for customer management and admin functions, and wrote end-to-end tests using RSpec to ensure ERP reliability.",
      ],
    },
    {
      role: "Software Developer Intern",
      company: "Webrino Business Software LLP",
      location: "Bangalore, India",
      period: "Jan 2016 - June 2016",
      description: [
        "Interned on a cloud-based omnichannel ERP platform, contributing to frontend and backend features while learning production development workflows.",
      ],
    },
  ],
  projects: [
    {
      title: "astro-quill",
      desc: "Astro integration that ships a markdown content editing studio at /studio with AI-assisted editing and GitHub PR-based publishing workflow.",
      tech: ["Astro", "TypeScript", "AI SDK", "GitHub API"],
      github: "https://github.com/VinitSarvade/astro-quill",
      icon: LuSparkles,
    },
    {
      title: "Smart Buy",
      desc: "Takes the guesswork out of online shopping by using AI to analyze products, surface pros and cons, and give personalized recommendations.",
      tech: ["Next.js", "TypeScript", "AI SDK", "TailwindCSS"],
      github: "https://github.com/VinitSarvade/smart-buy",
      href: "https://smart-buy.vinit.dev",
      icon: LuSparkles,
    },
    {
      title: "eStore",
      desc: "Full-featured e-commerce storefront with cart, checkout, and product catalog — built to explore SSR patterns and data fetching strategies in Next.js.",
      tech: ["Next.js", "React", "TypeScript", "TailwindCSS"],
      github: "https://github.com/VinitSarvade/estore",
      href: "https://estore-next.vinit.dev",
    },
    {
      title: "Multitrack Audio Player",
      desc: "Lets you layer and mix multiple audio tracks in the browser — useful for comparing stems or building simple mashups.",
      tech: ["React", "Web Audio API", "TypeScript"],
      github: "https://github.com/VinitSarvade/multitrack-audio-player",
      href: "https://multitrack-audio-player.vercel.app",
    },
    {
      title: "Wildlife Explorer",
      desc: "Interactive app for discovering wildlife species with rich media and filtering — a fun way to explore biodiversity data.",
      tech: ["React", "TypeScript", "REST API"],
      github: "https://github.com/VinitSarvade/wildlife-explorer",
      href: "https://wildlife-explorer.vercel.app",
    },
    {
      title: "Neo Calendar",
      desc: "Lightweight, zero-dependency calendar component with smooth animations — designed to drop into any project without framework lock-in.",
      tech: ["TypeScript", "CSS", "Web Components"],
      github: "https://github.com/VinitSarvade/neo-calendar",
      href: "https://vinitsarvade.github.io/neo-calendar/",
    },
    {
      title: "Clonebnb",
      desc: "Airbnb-style rental listing app built with React Native — demonstrates navigation, image galleries, and booking flows on mobile.",
      tech: ["React Native", "Expo", "TypeScript"],
      github: "https://github.com/VinitSarvade/clonebnb",
    },
    {
      title: "Expensify Clone",
      desc: "Mobile expense tracker with categorization and reporting — built to explore React Native form handling and local data persistence.",
      tech: ["React Native", "Expo", "TypeScript"],
      github: "https://github.com/VinitSarvade/expensify-clone",
    },
    {
      title: "HN Clone",
      desc: "Hacker News reader with server-side rendering — fast initial loads with nested comment threads and real-time feed updates.",
      tech: ["React", "TypeScript", "SSR"],
      github: "https://github.com/VinitSarvade/hn-clone-react",
    },
  ],
} as const;

export type PortfolioData = typeof PORTFOLIO_DATA;
export type Social = PortfolioData["profile"]["socials"][number];
export type SkillGroup = PortfolioData["skills"][number];
export type Education = PortfolioData["education"][number];
export type Experience = PortfolioData["experience"][number];
export type Certificate = PortfolioData["certificates"][number];
export type Project = {
  readonly title: string;
  readonly desc: string;
  readonly tech: readonly string[];
  readonly github: string;
  readonly href?: string;
  readonly icon?: IconType;
};
