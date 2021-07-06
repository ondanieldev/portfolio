import React, { useMemo } from 'react';
import { Flex } from '@chakra-ui/react';

import Heading from '../../Atoms/Heading';
import Project, { IProps as IProjectProps } from '../../Molecules/Project';
import Carousel from '../../Organisms/Carousel';

const Projects: React.FC = () => {
  const projects = useMemo<IProjectProps[]>(
    () => [
      {
        title: 'Wellets',
        imageAlt: 'Wellets',
        techs: [
          'typescript',
          'node.js',
          'react',
          'postgresql',
          'redis',
          'docker',
          'nginx',
          'git',
          'github',
        ],
        link: 'https://wellets.ondaniel.com.br/',
        image: '/images/wellets.png',
        description:
          'Wellets is a financial management website that helps users to manage their money placed in multiple portfolios. It was developed with a focus on users engaged in the crypto world.',
      },
      {
        title: 'Koinzaar',
        imageAlt: 'Koinzaar',
        techs: [
          'typescript',
          'node.js',
          'react',
          'next.js',
          'mysql',
          'mongo',
          'redis',
          'docker',
          'git',
          'github',
        ],
        link: 'https://www.koinzaar.com/',
        image: '/images/koinzaar.png',
        description:
          'Koinzaar a multi-cryptocurrency P2P Platform that enables users to buy and sell Cryptocurrencies using a wide range of payment methods offered by other users from their country or worldwide.',
      },
      {
        title: 'Battlestation',
        imageAlt: 'Battlestation',
        techs: [
          'typescript',
          'node.js',
          'react',
          'postgresql',
          'docker',
          'git',
          'github',
        ],
        link: 'https://dashboard.spiry.ro/',
        image: '/images/battlestation.png',
        description:
          'Battlestation is a SaaS that unifies trades of Paxful and Koinzaar to help users to manage them.',
      },
      {
        title: 'Frenchie',
        imageAlt: 'Frenchie',
        techs: ['go', 'solidity', 'git', 'github'],
        link: 'https://frenchie.tech/',
        image: '/images/frenchie.png',
        description:
          'Frenchie is a decentralized token running in the BSC network. Built using BEP20 and Solidity, audited and secured by professionals. It will be migrated to Main Net by Q1-2022.',
      },
      {
        title: 'Cowop',
        imageAlt: 'Cowop',
        techs: [
          'typescript',
          'node.js',
          'postgresql',
          'docker',
          'git',
          'github',
          'not relesead',
        ],
        link: 'https://www.leagueofdevs.com.br/',
        image: '/images/cowop.png',
        description:
          'Cowop is a technology education platform that helps users to interact with each other to offer their classes and learn about a specific technology.',
      },
    ],
    [],
  );

  return (
    <Flex direction="column" align="center">
      <Heading text="Main Projects" mb="25px" />

      <Carousel>
        {projects.map((project, i) => (
          <Project key={i} {...project} />
        ))}
      </Carousel>
    </Flex>
  );
};

export default Projects;
