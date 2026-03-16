import type { ComponentType } from "react";
import {
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiSass,
  SiReact,
  SiNextdotjs,
  SiAngular,
  SiVuedotjs,
  SiReactquery,
  SiRedux,
  SiStyledcomponents,
  SiShadcnui,
  SiAstro,
  SiExpo,
  SiIonic,
  SiTypescript,
  SiGo,
  SiNodedotjs,
  SiNestjs,
  SiPhp,
  SiPython,
  SiRubyonrails,
  SiGraphql,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiRedis,
  SiPrisma,
  SiDrizzle,
  SiRabbitmq,
  SiDocker,
  SiKubernetes,

  SiTestinglibrary,
  SiJest,
  SiCypress,
  SiLangchain,
  SiVite,
  SiWebpack,
  SiElectron,
} from "react-icons/si";
import { FaAws } from "react-icons/fa6";
import { BsStars, BsDatabase } from "react-icons/bs";
import { LuFlaskConical, LuCodeXml, LuServer, LuBriefcase } from "react-icons/lu";

type IconComponent = ComponentType<{ className?: string; style?: React.CSSProperties }>;

type SkillEntry = { icon: IconComponent; color: string; darkColor?: string };

const skillIconMap: Record<string, SkillEntry> = {
  "HTML & CSS": { icon: SiHtml5, color: "#E34F26" },
  "CSS-in-JS": { icon: SiCss, color: "#1572B6" },
  TailwindCSS: { icon: SiTailwindcss, color: "#06B6D4" },
  "SASS/SCSS": { icon: SiSass, color: "#CC6699" },
  "React.js": { icon: SiReact, color: "#61DAFB" },
  "Next.js": { icon: SiNextdotjs, color: "#000000", darkColor: "#FFFFFF" },
  AngularJS: { icon: SiAngular, color: "#DD0031" },
  Angular: { icon: SiAngular, color: "#DD0031" },
  Vue: { icon: SiVuedotjs, color: "#4FC08D" },
  "React Query": { icon: SiReactquery, color: "#FF4154" },
  Redux: { icon: SiRedux, color: "#764ABC" },
  "styled-components": { icon: SiStyledcomponents, color: "#DB7093" },
  "Shadcn components": { icon: SiShadcnui, color: "#000000", darkColor: "#FFFFFF" },
  Astro: { icon: SiAstro, color: "#FF5D01" },
  "React Native": { icon: SiReact, color: "#61DAFB" },
  Expo: { icon: SiExpo, color: "#000020", darkColor: "#FFFFFF" },
  Ionic: { icon: SiIonic, color: "#3880FF" },
  TypeScript: { icon: SiTypescript, color: "#3178C6" },
  Golang: { icon: SiGo, color: "#00ADD8" },
  "Node.js": { icon: SiNodedotjs, color: "#339933" },
  "Nest.js": { icon: SiNestjs, color: "#E0234E" },
  PHP: { icon: SiPhp, color: "#777BB4" },
  Python: { icon: SiPython, color: "#3776AB" },
  "Ruby on Rails": { icon: SiRubyonrails, color: "#CC0000" },
  GraphQL: { icon: SiGraphql, color: "#E10098" },
  PostgreSQL: { icon: SiPostgresql, color: "#4169E1" },
  MySQL: { icon: SiMysql, color: "#4479A1" },
  MongoDB: { icon: SiMongodb, color: "#47A248" },
  Redis: { icon: SiRedis, color: "#DC382D" },
  Prisma: { icon: SiPrisma, color: "#2D3748", darkColor: "#FFFFFF" },
  Drizzle: { icon: SiDrizzle, color: "#C5F74F" },
  RabbitMQ: { icon: SiRabbitmq, color: "#FF6600" },
  Docker: { icon: SiDocker, color: "#2496ED" },
  Kubernetes: { icon: SiKubernetes, color: "#326CE5" },
  AWS: { icon: FaAws, color: "#FF9900" },
  "React Testing Library": { icon: SiTestinglibrary, color: "#E33332" },
  Jest: { icon: SiJest, color: "#C21325" },
  Cypress: { icon: SiCypress, color: "#69D3A7" },
  "AI Agents": { icon: BsStars, color: "#8B5CF6" },
  "AI SDK": { icon: BsStars, color: "#8B5CF6" },
  "AI tools": { icon: BsStars, color: "#8B5CF6" },
  LangChain: { icon: SiLangchain, color: "#1C3C3C", darkColor: "#FFFFFF" },
  "Vector Database": { icon: BsDatabase, color: "#8B5CF6" },
  Codex: { icon: BsStars, color: "#8B5CF6" },
  "Claude Code": { icon: BsStars, color: "#D97757" },
  Vite: { icon: SiVite, color: "#646CFF" },
  Webpack: { icon: SiWebpack, color: "#8DD6F9" },
  Electron: { icon: SiElectron, color: "#47848F" },
  "electron-vite": { icon: SiElectron, color: "#47848F" },
};

const categoryFallback: Record<string, SkillEntry> = {
  Frontend: { icon: LuCodeXml, color: "#6B7280", darkColor: "#9CA3AF" },
  Mobile: { icon: LuCodeXml, color: "#6B7280", darkColor: "#9CA3AF" },
  Backend: { icon: LuServer, color: "#6B7280", darkColor: "#9CA3AF" },
  Testing: { icon: LuFlaskConical, color: "#6B7280", darkColor: "#9CA3AF" },
  AI: { icon: BsStars, color: "#8B5CF6" },
  Other: { icon: LuBriefcase, color: "#6B7280", darkColor: "#9CA3AF" },
};

export function SkillIcon({ skill, category }: { skill: string; category: string }) {
  const entry = skillIconMap[skill] ?? categoryFallback[category];
  if (!entry) return null;
  const { icon: Icon, color, darkColor } = entry;
  if (darkColor) {
    return (
      <Icon
        className="size-3 shrink-0"
        style={{ "--icon-light": color, "--icon-dark": darkColor, color: "var(--icon-color)" } as React.CSSProperties}
      />
    );
  }
  return <Icon className="size-3 shrink-0" style={{ color }} />;
}
