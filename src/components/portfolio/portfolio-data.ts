import { LuGithub, LuLinkedin, LuMail } from "react-icons/lu";

export type ExperienceEntry = {
  readonly role: string;
  readonly company: string;
  readonly location: string;
  readonly period: string;
  /** One line on what the company or product is. */
  readonly summary?: string;
  readonly description: readonly string[];
  /** Short footnote rendered under the bullets, e.g. how the role started. */
  readonly note?: string;
};

export type Project = {
  readonly title: string;
  readonly desc: string;
  readonly tech: readonly string[];
  readonly github: string;
  readonly href?: string;
  /** Marks AI-powered projects with a small badge. */
  readonly ai?: boolean;
};

const EXPERIENCE: readonly ExperienceEntry[] = [
  {
    role: "Staff Engineer",
    company: "Zacco",
    location: "Bangalore, India",
    period: "Apr 2026 - Present",
    summary: "Zacco is one of Europe's leading intellectual property firms. I work on IPview, its portal for managing patents, trademarks, designs, and domains across many countries.",
    description: [
      "Leading the modernisation of the IPview codebase while we keep shipping new features, using Go on the back end and HTMX with Alpine.js on the front end.",
      "Driving AI adoption across the team: working with colleagues to find, test, and share ways of using AI tooling to deliver faster.",
    ],
  },
  {
    role: "Senior Software Engineer",
    company: "CambAI",
    location: "Remote",
    period: "Oct 2025 - Jan 2026",
    summary: "CambAI makes Camb Studio, a platform for dubbing and subtitling video with AI.",
    description: [
      "Built features for the studio in React, Node.js, and TypeScript, working closely with the multimedia editing tools.",
      "Improved audio and video sync in the subtitle editor, which cut the time spent in dubbing and subtitling workflows by around 15 to 20%.",
      "Rebuilt the editor's state management. A mix of Zustand, React Context, and duplicated components became one composition pattern with a single Zustand store, removing a lot of unnecessary re-renders.",
      "Built screen translation for Savante, an Electron desktop app: draw a box anywhere on screen, OCR reads the text, and the transformed version appears instantly. Also moved the app to a current Electron build with electron-vite.",
    ],
  },
  {
    role: "Principal Engineer",
    company: "Unibloom",
    location: "Remote",
    period: "Jan 2024 - Sept 2025",
    summary: "Unibloom builds climate action planning software that helps companies plan and track carbon reductions.",
    description: [
      "Led development of the planning tool, where users set sustainability targets, link initiatives to them, see progress, and get the remaining gap calculated for them.",
      "Designed the simulation engine and took it from a rule-based model to an AI-driven one that suggests the most effective actions for a particular business.",
      "Built a retrieval-based chatbot that answers general sustainability questions and questions about the user's own targets and initiatives.",
      "Moved authentication to Supabase Auth, and wrote a type-safe wrapper for Next.js API routes that reduced runtime errors across the codebase.",
      "Worked day to day with climate specialists to turn their models and data into features people could use.",
    ],
  },
  {
    role: "Senior Frontend Engineer",
    company: "Voicemod",
    location: "Remote",
    period: "June 2023 - Dec 2023",
    summary: "Voicemod is a real-time voice changer for gamers and streamers.",
    description: [
      "Built the gift-a-subscription feature, which opened a new revenue stream.",
      "Hardened the authentication service behind login and session management.",
      "Helped move the Voice Store from a legacy codebase to Nuxt.js. SEO work during the migration brought 8% more organic traffic within two weeks.",
    ],
  },
  {
    role: "Founding Engineer",
    company: "Flurn",
    location: "Bangalore, India",
    period: "June 2021 - Feb 2023",
    summary: "Flurn was an early-stage startup where I was the founding engineer.",
    description: [
      "Chose and set up the initial stack, built the MVP, and kept iterating on user feedback until we found product-market fit a few months in.",
      "Built the web app in Next.js, the mobile apps in React Native, and the API in Go on PostgreSQL, with Redis for caching and background jobs.",
      "Hired and mentored a team of eight, from interns to senior engineers, and made code review the backbone of how we worked.",
      "Ran early customer interviews. They showed a gap between our technically neat solution and what people actually needed, so we reworked the product around simplicity.",
    ],
  },
  {
    role: "Senior Software Engineer",
    company: "Betterworks",
    location: "Remote",
    period: "Aug 2020 - May 2021",
    summary: "Betterworks Engage is an employee engagement platform: surveys, feedback, and analytics on top of them.",
    description: [
      "Built interactive analytics dashboards in React that turned raw survey data into something managers could act on.",
      "Built the employee lifecycle analysis, which shows favourability scores from onboarding through to exit.",
      "Added caching at the API layer, cutting API latency by 60% and database load by close to 40%.",
      "Maintained the React Native app for surveys and quizzes, and fixed a run of notification delivery bugs.",
    ],
  },
  {
    role: "Senior Software Engineer",
    company: "Furlenco",
    location: "Bangalore, India",
    period: "April 2018 - July 2020",
    summary: "Furlenco runs a high-traffic e-commerce storefront. I worked across the storefront and the services behind it.",
    description: [
      "Led the storefront redesign and set up a component design system in React and styled-components.",
      "Migrated the storefront from a single-page app to server-rendered React, which cut load times by 30%. SEO work on top brought at least 20% more organic search traffic.",
      "Introduced TypeScript, code review, CI/CD, and automated testing to the team.",
      "Owned the payments microservices, the API gateway, and a Rails catalog service with Sidekiq, along with their pipelines and deployment scripts.",
      "Mentored junior engineers on both front-end and back-end work.",
    ],
  },
  {
    role: "Software Engineer",
    company: "HolidayIQ",
    location: "Bangalore, India",
    period: "Nov 2017 - April 2018",
    summary: "HolidayIQ is a travel reviews and planning site.",
    description: [
      "Built web interfaces for International Destinations, the community platform, and the Video Stories microsite.",
      "Helped migrate the International Destinations microsite to React.",
      "Built campaign landing pages and HTML emails with the design and marketing teams.",
      "Shipped more than five production features in React, lifting cross-platform user interactions by 25%.",
    ],
  },
  {
    role: "Software Developer",
    company: "Webrino Business Software LLP",
    location: "Bangalore, India",
    period: "Jan 2016 - Oct 2017",
    summary: "Webrino builds a cloud ERP for small and mid-sized businesses: omnichannel, multi-currency, on web and mobile.",
    description: [
      "Built core features across the ERP, including the request-for-quotation flow, inventory and SKU management, and printable shipping labels.",
      "Worked with the accounting team to build the ERP's accounting system: invoicing, ledgers, and financial reporting. Added the GST tax module when GST was introduced in India.",
      "Built the mobile app with Ionic, an internal admin dashboard in Rails, and end-to-end tests in RSpec.",
    ],
    note: "I started here as an intern in January 2016 and went full-time six months later.",
  },
];

const PROJECTS: readonly Project[] = [
  {
    title: "astro-quill",
    desc: "An Astro integration that adds a content editing studio at /studio, with AI-assisted editing and publishing through GitHub pull requests.",
    tech: ["Astro", "TypeScript", "AI SDK", "GitHub API"],
    github: "https://github.com/VinitSarvade/astro-quill",
    ai: true,
  },
  {
    title: "Smart Buy",
    desc: "Uses AI to analyse a product, lay out the pros and cons, and suggest whether it fits what you need.",
    tech: ["Next.js", "TypeScript", "AI SDK", "TailwindCSS"],
    github: "https://github.com/VinitSarvade/smart-buy",
    href: "https://smart-buy.vinit.dev",
    ai: true,
  },
  {
    title: "eStore",
    desc: "A complete storefront with catalog, cart, and checkout. Built to explore server rendering and data fetching in Next.js.",
    tech: ["Next.js", "React", "TypeScript", "TailwindCSS"],
    github: "https://github.com/VinitSarvade/estore",
    href: "https://estore-next.vinit.dev",
  },
  {
    title: "Multitrack Audio Player",
    desc: "Layer and mix several audio tracks in the browser. Handy for comparing stems or putting together a quick mashup.",
    tech: ["React", "Web Audio API", "TypeScript"],
    github: "https://github.com/VinitSarvade/multitrack-audio-player",
    href: "https://multitrack-audio-player.vercel.app",
  },
  {
    title: "Wildlife Explorer",
    desc: "Browse wildlife species with photos, video, and filters. A small, enjoyable way into biodiversity data.",
    tech: ["React", "TypeScript", "REST API"],
    github: "https://github.com/VinitSarvade/wildlife-explorer",
    href: "https://wildlife-explorer.vercel.app",
  },
  {
    title: "Neo Calendar",
    desc: "A small calendar component with no dependencies and smooth animations. Drops into any project, whatever the framework.",
    tech: ["TypeScript", "CSS", "Web Components"],
    github: "https://github.com/VinitSarvade/neo-calendar",
    href: "https://vinitsarvade.github.io/neo-calendar/",
  },
  {
    title: "Clonebnb",
    desc: "An Airbnb-style listings app in React Native, covering navigation, image galleries, and booking flows.",
    tech: ["React Native", "Expo", "TypeScript"],
    github: "https://github.com/VinitSarvade/clonebnb",
  },
  {
    title: "Expensify Clone",
    desc: "A mobile expense tracker with categories and reports. Built to learn form handling and local storage in React Native.",
    tech: ["React Native", "Expo", "TypeScript"],
    github: "https://github.com/VinitSarvade/expensify-clone",
  },
  {
    title: "HN Clone",
    desc: "A server-rendered Hacker News reader with nested comment threads and a feed that updates live.",
    tech: ["React", "TypeScript", "SSR"],
    github: "https://github.com/VinitSarvade/hn-clone-react",
  },
];

export const PORTFOLIO_DATA = {
  profile: {
    name: "Vinit Sarvade",
    role: "Full-stack engineer in Bangalore",
    /** `{{years}}` is replaced with the computed years of experience. */
    tagline: "I build fast, dependable products for web and mobile, end to end.",
    /** Phrase inside the tagline to set in the accent colour. */
    taglineHighlight: "end to end",
    availability: "Open to remote roles",
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
    resume: "/Vinit Sarvade - Resume.pdf",
  },
  contact: {
    website: "vinit.dev",
    location: "Bangalore, India",
    timezone: "UTC+5:30",
    email: "vinit.sarvade.08@gmail.com",
    headline: "Want to work together?",
    blurb:
      "I'm open to remote roles and interesting contract work. Email is the quickest way to reach me, and I reply promptly.",
  },
  skills: [
    {
      category: "Frontend",
      items: [
        "HTML & CSS", "CSS-in-JS", "TailwindCSS", "SASS/SCSS",
        "React.js", "Next.js", "Tanstack Start", "AngularJS", "Angular",
        "Vue", "React Query", "Redux", "styled-components", "Zustand",
        "Shadcn components", "Astro", "HTMX", "Alpine.js",
        "SSR (Server Side Rendering)", "WebSockets", "Vite", "Webpack", "CDN",
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
  /** `{{years}}` is replaced with the computed years of experience. The first paragraph is also the hero lead. */
  about: [
    "I'm a staff engineer with {{years}} years of experience building web and mobile products, most recently at Zacco, where I lead the modernisation of IPview and the adoption of AI across the engineering team. Earlier I was principal engineer at Unibloom and the founding engineer at Flurn. I care as much about how software is built as about what gets built. In practice that has meant untangling legacy codebases, leading migrations, establishing design systems, and hiring and mentoring engineers. A healthy engineering culture is, to me, part of the job.",
    "My work spans the whole stack: TypeScript, React, and Next.js on the front end; Go, Node.js, and Rails on the back end; React Native on mobile. Over the past two years much of it has involved AI in production, from retrieval-based assistants to simulation engines, along with the infrastructure that keeps them reliable.",
    "At Unibloom that meant designing a simulation engine that grew from a rule-based model into an AI-driven one, and a retrieval-based assistant over each customer's own plan. At Flurn it meant choosing the stack, shipping the MVP, and hiring the team of eight that took it to product-market fit.",
  ],
  pillars: [
    {
      title: "End to end",
      text: "I'm comfortable owning a feature from the database to the screen, on web and on mobile.",
    },
    {
      title: "AI in real products",
      text: "Assistants, simulations, and tooling that customers use every day, not just demos.",
    },
    {
      title: "Teams",
      text: "I've hired, mentored, and led engineers, and I enjoy that part of the job.",
    },
  ],
  aiWork: [
    {
      title: "Climate simulation engine",
      text: "Started as a rule-based model and grew into an AI-driven simulation that suggests the most effective sustainability actions for a given business.",
      meta: "Unibloom",
    },
    {
      title: "An assistant that knows your plan",
      text: "A retrieval-based chatbot that answers sustainability questions, including questions about the user's own targets and initiatives.",
      meta: "Unibloom",
    },
    {
      title: "astro-quill and Smart Buy",
      text: "Two side projects: an AI-assisted content studio for Astro sites, and a shopping assistant that weighs up products for you.",
      meta: "Open source",
    },
  ],
  experience: EXPERIENCE,
  projects: PROJECTS,
} as const;

export type PortfolioData = typeof PORTFOLIO_DATA;
export type Social = PortfolioData["profile"]["socials"][number];
export type SkillGroup = PortfolioData["skills"][number];
export type Education = PortfolioData["education"][number];
export type Experience = ExperienceEntry;
export type Certificate = PortfolioData["certificates"][number];
export type Pillar = PortfolioData["pillars"][number];
export type AiWork = PortfolioData["aiWork"][number];
