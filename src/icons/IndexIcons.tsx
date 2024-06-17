import { ReactNode } from 'react'
import {
  HtmlIcon,
  AngularIcon,
  FigmaIcon,
  FirebaseIcon,
  GitIcon,
  BootstrapIcon,
  MySqlIcon,
  NextjsIcon,
  SASSIcon,
  JavaScriptIcon,
  ReactIcon,
  TailwindIcon,
  TypeScriptIcon,
  CssIcon,
  PhpIcon,
  VitestIcon,
  WordpressIcon
} from './SkillsIcons'

export const ICONS: Record<string, ReactNode> = {
  'Next.js': <NextjsIcon />,
  JavaScript: <JavaScriptIcon />,
  Angular: <AngularIcon />,
  React: <ReactIcon />,
  Tailwind: <TailwindIcon />,
  TypeScript: <TypeScriptIcon />,
  Bootstrap: <BootstrapIcon />,
  MySQL: <MySqlIcon />,
  Git: <GitIcon />,
  Html: <HtmlIcon />,
  Css: <CssIcon />,
  Figma: <FigmaIcon />,
  SASS: <SASSIcon />,
  Firebase: <FirebaseIcon />,
  Php: <PhpIcon />,
  Wordpress: <WordpressIcon />,
  Vitest: <VitestIcon />
}
