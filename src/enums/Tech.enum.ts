export const architectureTechs = [
  'Backstage',
  'Clean',
  'Hexagonal',
  'DDD',
  'Solid',
  'TDD',
] as const;
export const backEndTechs = [
  'Apollo GraphQL',
  'Express.js',
  'Node.js',
  'NestJS',
] as const;
export const ciTechs = [
  'CircleCI',
  'GitHub workflows',
  'Jenkins',
  'TravisCI',
] as const;
export const databaseTechs = [
  'ElastiscSearch',
  'MongoDB',
  'MySQL',
  'PostgreSQL',
  'Redis',
] as const;
export const devopsTechs = [
  'AWS',
  'Docker',
  'Google Cloud Platform',
  'Kubernetes',
  'Nginx',
] as const;
export const frontendTechs = [
  'Figma',
  'Next.js',
  'React.js',
  'Redux.js',
  'Storybook',
] as const;
export const generalTechs = ['JavaScript', 'TypeScript'] as const;
export const messagebrokerTechs = ['BullMQ', 'RabbitMQ'] as const;
export const mobileTechs = ['React Native'] as const;
export const qaTechs = ['Cypress', 'Jest'] as const;
export const versioningTechs = ['BitBucket', 'Git', 'GitHub'] as const;

export type ArchitectureTech = typeof architectureTechs[number];
export type BackEndTech = typeof backEndTechs[number];
export type CiTech = typeof ciTechs[number];
export type DatabaseTech = typeof databaseTechs[number];
export type DevopsTech = typeof devopsTechs[number];
export type FrontendTech = typeof frontendTechs[number];
export type GeneralTech = typeof generalTechs[number];
export type MessagebrokerTech = typeof messagebrokerTechs[number];
export type MobileTech = typeof mobileTechs[number];
export type QaTech = typeof qaTechs[number];
export type VersioningTech = typeof versioningTechs[number];

export type Tech =
  | ArchitectureTech
  | BackEndTech
  | CiTech
  | DatabaseTech
  | DevopsTech
  | FrontendTech
  | GeneralTech
  | MessagebrokerTech
  | MobileTech
  | QaTech
  | VersioningTech;
