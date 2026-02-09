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
        "React.js", "Next.js", "Tanstack Start","AngularJS", "Angular",
        "Vue", "React Query", "Redux", "styled-components", "Zustand",
        "Shadcn components", "Astro", "SSR (Server Side Rendering)",
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
        "Rails", "GraphQL", "PostgreSQL", "MySQL", "MongoDB", "Redis",
        "Prisma", "Drizzle", "RabbitMQ", "Docker", "Kubernetes", "AWS",
      ],
    },
    {
      category: "Testing",
      items: [
        "React Testing Library", "Jest", "Appium",
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
        "SEO", "Agile Methodologies", "Team Building",
        "Teamwork", "Team management", "Project Management",
        "Product Enhancement", "Frontend Engineering",
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
  about:
    "Full-stack engineer with over 9 years of experience designing and developing scalable web and mobile applications across SaaS, e-commerce, and climate tech sectors. Demonstrated proficiency in React, Next.js, Node.js, and Golang, with deep expertise in microservices, distributed systems, and cloud platforms such as AWS, Docker, and Kubernetes. Lead AI-driven initiatives at Unibloom, where I build simulation engines and conversational chatbots that help sustainability professionals reach decisions faster. Experienced in leading teams, modernizing legacy infrastructures, and optimizing system performance, while mentoring engineers and driving best practices in software development.",
  experience: [
    {
      role: "Senior Software Engineer",
      company: "CambAI",
      location: "Remote",
      period: "Oct 2025 - Jan 2026",
      description: [
        "Developed and shipped feature enhancements for the Camb Studio platform using React, NodeJS, and TypeScript, ensuring compatibility with high-traffic workflows and seamless integration with multimedia editing tools.",
        "Enhanced video and audio synchronization within the subtitle editor by applying efficient state management and responsive design principles to deliver a smoother user experience and reduce 10% time spent in dubbing and subtitling workflows.",
        "The studio platform contains the Audio, Video Dubbing & Subtitling editor, Audio descriptions, Audiobooks, and Video Narrations editor, and tools: Text to Speech, Speech to Text, Text translation, Document translation, Website translation, Image translation, Audio Separation, Sound and Music generation from a prompt, and more.",
      ],
    },
    {
      role: "Principal Engineer",
      company: "Unibloom",
      location: "Remote",
      period: "Jan 2024 - Sept 2025",
      description: [
        "Leading the development of the climate action planning tool, enabling users to plan carbon footprint reductions efficiently.",
        "Utilizing AI to accelerate sustainability decision-making by orchestrating simulations and building AI-driven workflows and a chatbot that provides instant insights and answers to complex sustainability-related queries.",
        "Designed & Developed advanced software in collaboration with climate specialists, using AI and data analytics to deliver rapid, actionable insights for sustainability planning initiatives.",
      ],
    },
    {
      role: "Senior Frontend Engineer",
      company: "Voicemod",
      location: "Remote",
      period: "June 2023 - Dec 2023",
      description: [
        "Implemented frontend optimizations and built features that helped to improve and optimize the top of the Funnel.",
        "Delivered several initiatives and projects that drove more revenue, resolved several pain points, and improved the experience.",
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
        "Owned and scaled critical commerce services, including payments microservices, API gateway, catalog management, CI/CD pipelines, and deployment scripts, enabling reliable scaling and faster release cycles.",
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
      role: "Software Developer (Internship - Jan 2016 to Jun 2016)",
      company: "Webrino Business Software LLP",
      location: "Bangalore, India",
      period: "Jan 2016 - Oct 2017",
      description: [
        "Built core features for a cloud-based omnichannel, multicurrency ERP web and mobile application serving global SMBs and enterprises.",
        "Improved user experience across the ERP platform, including major enhancements to the RFQ (Request for Quotation) flow, Inventory & SKU management for easier viewing and updates, and shipping label generation with printable formats to streamline fulfillment operations and vendor-buyer interactions.",
        "Collaborated with the accounting team to design and implement the ERP's complete accounting system, integrating invoicing, ledgers, and financial reporting.",
        "Developed the GST tax module when GST was introduced, ensuring accurate compliance and seamless integration into existing financial workflows.",
        "Constructed a mobile application for the ERP platform using the Ionic Framework, ensuring seamless access to ERP functionalities on mobile devices.",
      ],
    },
  ],
  projects: [
    {
      title: "Smart Buy",
      desc: "AI-powered product analysis. Provides an in-depth analysis of products, pros and cons, and recommendations.",
      github: "https://github.com/VinitSarvade/smart-buy",
      href: "https://smart-buy.vinit.dev",
      icon: LuSparkles,
    },
    {
      title: "eStore",
      desc: "E-commerce storefront built with Next.js, React, and TypeScript.",
      github: "https://github.com/VinitSarvade/estore",
      href: "https://estore-next.vinit.dev",
    },
    {
      title: "HN Clone",
      desc: "A Hacker News clone built with React featuring server-side rendering.",
      github: "https://github.com/VinitSarvade/hn-clone-react",
      href: "https://hn-clone.up.railway.app",
    },
    {
      title: "Multitrack Audio Player",
      desc: "A multitrack audio player for playing and mixing multiple audio tracks.",
      github: "https://github.com/VinitSarvade/multitrack-audio-player",
      href: "https://multitrack-audio-player.vercel.app",
    },
    {
      title: "Wildlife Explorer",
      desc: "An interactive wildlife exploration app for discovering and learning about animals.",
      github: "https://github.com/VinitSarvade/wildlife-explorer",
      href: "https://wildlife-explorer.vercel.app",
    },
    {
      title: "Neo Calendar",
      desc: "A sleek, modern calendar component built with TypeScript.",
      github: "https://github.com/VinitSarvade/neo-calendar",
      href: "https://vinitsarvade.github.io/neo-calendar/",
    },
    {
      title: "Clonebnb",
      desc: "An Airbnb clone built with TypeScript.",
      github: "https://github.com/VinitSarvade/clonebnb",
    },
    {
      title: "Expensify Clone",
      desc: "An expense tracking app clone built with TypeScript.",
      github: "https://github.com/VinitSarvade/expensify-clone",
    },
  ],
} as const;

export type PortfolioData = typeof PORTFOLIO_DATA;
export type Social = PortfolioData["profile"]["socials"][number];
export type SkillGroup = PortfolioData["skills"][number];
export type Education = PortfolioData["education"][number];
export type Experience = PortfolioData["experience"][number];
export type Project = {
  readonly title: string;
  readonly desc: string;
  readonly github: string;
  readonly href?: string;
  readonly icon?: IconType;
};
