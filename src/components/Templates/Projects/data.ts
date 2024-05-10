import { IProps as IProjectProps } from '../../Molecules/Project';

export const projects: IProjectProps[] = [
  {
    title: 'Rabbits',
    imageAlt: 'Rabbits',
    techs: {
      architecture: ['Solid'],
      backEnd: ['NestJS', 'Node.js'],
      ci: ['GitHub workflows'],
      database: ['PostgreSQL', 'Redis'],
      devops: ['AWS', 'Nginx'],
      frontend: ['Figma', 'Redux.js', 'Storybook'],
      general: ['TypeScript'],
      mobile: ['React Native'],
      qa: ['Jest'],
      versioning: ['Git', 'GitHub'],
    },
    image: '/images/rabbits.svg',
    description:
      "Rabbits is an app that aims to help people to improve their routine by managing habits, reminders and events. I want to improve the app continuously in order to add more ways to help people to manage their lives. Given this idea, project's roadmap includes modules for managing house storage, finance, pets and plants!",
    subLinks: [
      [
        {
          href: 'https://rabbits-api.ondaniel.com.br',
          text: 'API',
        },
        {
          href: '#',
          text: 'Google Play Store',
        },
      ],
      [
        {
          href: 'https://github.com/ondanieldev/rabbits-api-insomnia',
          text: 'API Insomnia',
        },
        {
          href: 'https://github.com/ondanieldev/rabbits-api',
          text: 'API Repository',
        },
        {
          href: 'https://rabbits-api.ondaniel.com.br/api',
          text: 'API Specification',
        },
        {
          href: 'https://www.figma.com/file/ipDwne7ajgybxQml25PKn6/Rabbits?type=design&node-id=0%3A1&mode=design&t=q69bOm7uSXI063jO-1',
          text: 'Figma',
        },

        {
          href: 'https://github.com/ondanieldev/rabbits-mobile',
          text: 'Mobile Repository',
        },
        {
          href: 'https://ondanieldev.notion.site/Rabbits-Roadmap-05a85728e4d946cd8b4fb51dea256ce0?pvs=4',
          text: 'Roadmap',
        },
      ],
    ],
  },
  {
    title: 'Santiago',
    imageAlt: 'Santiago',
    techs: {
      architecture: ['Solid', 'TDD'],
      backEnd: ['Node.js'],
      ci: ['GitHub workflows'],
      database: ['MongoDB', 'PostgreSQL', 'Redis'],
      devops: ['Docker', 'Nginx'],
      frontend: ['Figma', 'Next.js', 'Redux.js', 'React.js'],
      general: ['TypeScript'],
      versioning: ['Git', 'GitHub'],
    },
    image: '/images/santiago-demo.png',
    description:
      'Santiago is a school management system that allows managing classes, school seasons, subscription values, students, responsibles and so on. Click on the project to try a demo version!',
    subLinks: [
      [
        {
          href: 'https://api.colegiosantiago.com.br',
          text: 'API',
        },
        {
          href: 'https://santiago-frontend.vercel.app',
          text: 'Website',
        },
        {
          href: 'https://santiago-demo.ondaniel.com.br/',
          text: 'Website [Demo]',
        },
      ],
    ],
  },
  {
    title: 'Orion',
    imageAlt: 'Orion',
    techs: {
      architecture: ['Solid'],
      backEnd: ['NestJS', 'Node.js'],
      ci: ['GitHub workflows'],
      database: ['MongoDB', 'PostgreSQL', 'Redis'],
      devops: ['AWS', 'Docker', 'Nginx', 'Kubernetes'],
      frontend: ['Next.js', 'Redux.js', 'React.js'],
      general: ['TypeScript'],
      messagebroker: ['RabbitMQ', 'BullMQ'],
      versioning: ['Git', 'GitHub'],
    },
    image: '/images/orion.png',
    description:
      'Orion is a SaaS that serves as a P2P marketplace assistant by providing a wide range of tools to help when trading and managing employees.',
    subLinks: [
      [
        {
          href: 'https://orion-api.spiry.ro/',
          text: 'API',
        },
        {
          href: 'https://orion.spiry.ro/',
          text: 'Website',
        },
      ],
    ],
  },
  {
    title: 'Pokedex',
    imageAlt: 'Pokedex',
    techs: {
      architecture: ['Solid'],
      backEnd: ['Node.js'],
      ci: ['GitHub workflows'],
      database: ['PostgreSQL', 'Redis'],
      devops: ['Docker', 'Nginx'],
      frontend: ['React.js'],
      general: ['TypeScript'],
      versioning: ['Git', 'GitHub'],
    },
    image: '/images/pokedex.png',
    description:
      'Pokedex is a company test consisting on consuming a Pokemon API through a own API and display its data.',
    subLinks: [
      [
        {
          href: 'https://pokedex-api.ondaniel.com.br/',
          text: 'API',
        },
        {
          href: 'https://pokedex.ondaniel.com.br/',
          text: 'Website',
        },
        {
          href: 'https://github.com/ondanieldev/pokedex',
          text: 'Repository',
        },
      ],
    ],
  },
  {
    title: 'Wellets',
    imageAlt: 'Wellets',
    techs: {
      architecture: ['Solid'],
      backEnd: ['Node.js'],
      ci: ['GitHub workflows'],
      database: ['MongoDB', 'PostgreSQL', 'Redis'],
      devops: ['Docker', 'Nginx'],
      frontend: ['React.js', 'Redux.js'],
      general: ['TypeScript'],
      versioning: ['Git', 'GitHub'],
    },
    image: '/images/wellets.png',
    description:
      'Wellets is a financial management website that helps users to manage their money placed in multiple portfolios. It was developed with a focus on users engaged in the crypto world.',
    subLinks: [
      [
        {
          href: 'https://wellets-api.ondaniel.com.br/',
          text: 'API',
        },
        {
          href: 'https://wellets.ondaniel.com.br/',
          text: 'Website',
        },
      ],
      [
        {
          href: 'https://github.com/ondanieldev/wellets-backend',
          text: 'Back-end Repository',
        },
        {
          href: 'https://github.com/ondanieldev/wellets-frontend',
          text: 'Front-end Repository',
        },
      ],
    ],
  },
  {
    title: 'Microchat',
    imageAlt: 'Microchat',
    techs: {
      architecture: ['Solid'],
      backEnd: ['Node.js'],
      ci: ['GitHub workflows'],
      database: ['PostgreSQL'],
      devops: ['Docker', 'Nginx'],
      frontend: ['React.js', 'Redux.js'],
      general: ['TypeScript'],
      versioning: ['Git', 'GitHub'],
    },
    image: '/images/microchat.png',
    description: 'Microchat is a simple chat service.',
    subLinks: [
      [
        {
          href: 'https://microchat-api.ondaniel.com.br/',
          text: 'API',
        },
        {
          href: 'https://microchat.ondaniel.com.br/',
          text: 'Website',
        },
        {
          href: 'https://github.com/ondanieldev/microchat',
          text: 'Repository',
        },
      ],
    ],
  },
  {
    title: 'Koinzaar',
    imageAlt: 'Koinzaar',
    techs: {
      architecture: ['Solid'],
      backEnd: ['Node.js'],
      ci: ['GitHub workflows'],
      database: ['MongoDB', 'PostgreSQL', 'Redis'],
      devops: ['Docker', 'Nginx', 'AWS', 'Kubernetes'],
      frontend: ['Redux.js', 'Next.js', 'React.js'],
      general: ['TypeScript'],
      versioning: ['Git', 'GitHub'],
    },
    image: '/images/koinzaar.png',
    description:
      'Koinzaar is a multi-cryptocurrency P2P Platform that enables users to buy and sell cryptocurrencies using a wide range of payment methods offered by other users from their country or worldwide.',
  },
];
