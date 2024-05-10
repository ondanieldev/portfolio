import { IconType } from 'react-icons';
import {
  SiNodedotjs,
  SiTypescript,
  SiNestjs,
  SiReact,
  SiNextdotjs,
  SiDocker,
  SiGithub,
  SiGit,
  SiNginx,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiRedis,
  SiRedux,
  SiFigma,
  SiStorybook,
  SiKubernetes,
  SiBackstage,
  SiAmazonaws,
  SiGooglecloud,
  SiJest,
  SiCypress,
  SiJavascript,
  SiGithubactions,
  SiCircleci,
  SiElasticsearch,
  SiJenkins,
  SiRabbitmq,
  SiTravisci,
  SiBitbucket,
} from 'react-icons/si';

import { Tech } from '../enums/Tech.enum';

export type TechData = {
  color?: string;
  icon?: IconType;
  showOnSkillCircle?: boolean;
};

export const techDataMap: Record<Tech, TechData> = {
  Backstage: {
    color: '#35baa0',
    icon: SiBackstage,
    showOnSkillCircle: true,
  },
  'GitHub workflows': {
    color: '#ffffff',
    icon: SiGithubactions,
    showOnSkillCircle: true,
  },
  'Google Cloud Platform': {
    color: '#1a72e7',
    icon: SiGooglecloud,
    showOnSkillCircle: true,
  },
  AWS: {
    color: '#e4933d',
    icon: SiAmazonaws,
    showOnSkillCircle: true,
  },
  'Next.js': {
    color: '#ffffff',
    icon: SiNextdotjs,
    showOnSkillCircle: true,
  },
  'Node.js': {
    color: '#339933',
    icon: SiNodedotjs,
    showOnSkillCircle: true,
  },
  'React Native': {
    color: '#61DAFB',
    icon: SiReact,
    showOnSkillCircle: false,
  },
  'React.js': {
    color: '#61DAFB',
    icon: SiReact,
    showOnSkillCircle: true,
  },
  'Redux.js': {
    color: '#754abc',
    icon: SiRedux,
    showOnSkillCircle: true,
  },
  BullMQ: {
    color: '#bdbdbd',
    showOnSkillCircle: false,
  },
  CircleCI: {
    color: '#161616',
    icon: SiCircleci,
    showOnSkillCircle: false,
  },
  Clean: {},
  Cypress: {
    color: '#077681',
    icon: SiCypress,
    showOnSkillCircle: true,
  },
  DDD: {},
  Docker: {
    color: '#2496ED',
    icon: SiDocker,
    showOnSkillCircle: true,
  },
  ElastiscSearch: {
    color: '#ffd109',
    icon: SiElasticsearch,
    showOnSkillCircle: false,
  },
  Figma: {
    color: '#5651ff',
    icon: SiFigma,
    showOnSkillCircle: true,
  },
  Git: {
    color: '#F05032',
    icon: SiGit,
    showOnSkillCircle: true,
  },
  BitBucket: {
    color: '#0052cc',
    icon: SiBitbucket,
    showOnSkillCircle: false,
  },
  GitHub: {
    color: '#ffffff',
    icon: SiGithub,
    showOnSkillCircle: true,
  },
  Hexagonal: {},
  JavaScript: {
    color: '#f7e01c',
    icon: SiJavascript,
    showOnSkillCircle: true,
  },
  Jenkins: {
    color: '#355061',
    icon: SiJenkins,
    showOnSkillCircle: false,
  },
  Jest: {
    color: '#9a425c',
    icon: SiJest,
    showOnSkillCircle: true,
  },
  Kubernetes: {
    color: '#306ce5',
    icon: SiKubernetes,
    showOnSkillCircle: true,
  },
  MongoDB: {
    color: '#47A248',
    icon: SiMongodb,
    showOnSkillCircle: true,
  },
  MySQL: {
    color: '#4479A1',
    icon: SiMysql,
    showOnSkillCircle: true,
  },
  NestJS: {
    color: '#df234e',
    icon: SiNestjs,
    showOnSkillCircle: true,
  },
  Nginx: {
    color: '#009639',
    icon: SiNginx,
    showOnSkillCircle: true,
  },
  PostgreSQL: {
    color: '#4169E1',
    icon: SiPostgresql,
    showOnSkillCircle: true,
  },
  RabbitMQ: {
    color: '#fc6601',
    icon: SiRabbitmq,
    showOnSkillCircle: true,
  },
  Redis: {
    color: '#DC382D',
    icon: SiRedis,
    showOnSkillCircle: true,
  },
  Solid: {},
  Storybook: {
    color: '#f84a86',
    icon: SiStorybook,
    showOnSkillCircle: true,
  },
  TDD: {},
  TravisCI: {
    color: '#ca2b41',
    icon: SiTravisci,
    showOnSkillCircle: false,
  },
  TypeScript: {
    color: '#3178C6',
    icon: SiTypescript,
    showOnSkillCircle: true,
  },
};
