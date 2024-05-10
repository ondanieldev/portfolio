import { IProps as IProjectProps } from '../../Molecules/Project';

export const projects: IProjectProps[] = [
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
