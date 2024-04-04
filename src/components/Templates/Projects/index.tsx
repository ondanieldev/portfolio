import React, { useMemo } from 'react';
import { Flex } from '@chakra-ui/react';

import Heading from '../../Atoms/Heading';
import Project, { IProps as IProjectProps } from '../../Molecules/Project';
import Carousel from '../../Organisms/Carousel';

const Projects: React.FC = () => {
  const projects = useMemo<IProjectProps[]>(
    () => [
      {
        title: 'Santiago',
        imageAlt: 'Santiago',
        techs: [
          'react',
          'next.js',
          'node.js',
          'typescript',
          'postgresql',
          'docker',
          'nginx',
          'github',
          'git',
        ],
        link: 'https://santiago-demo.ondaniel.com.br/',
        image: '/images/santiago-demo.png',
        description:
          'Santiago is a school management system that allows managing classes, school seasons, subscription values, students, responsibles and so on. Click on the project to try a demo version!',
      },
      {
        title: 'Orion',
        imageAlt: 'Orion',
        techs: [
          'react',
          'next.js',
          'node.js',
          'typescript',
          'postgresql',
          'mongo',
          'docker',
          'github',
          'git',
        ],
        link: 'https://orion.spiry.ro/',
        image: '/images/orion.png',
        description:
          'Orion is a SaaS that serves as a P2P marketplace assistant by providing a wide range of tools to help when trading and managing employees.',
      },
      {
        title: 'Frenchie',
        imageAlt: 'Frenchie',
        techs: ['solidity', 'go', 'github', 'git'],
        link: 'https://frenchie.tech/',
        image: '/images/frenchie.png',
        description:
          'Frenchie is a decentralized token running in the BSC network. Built using BEP20 and Solidity, audited and secured by professionals. It will be migrated to Main Net by Q1-2022.',
      },
      {
        title: 'Wellets',
        imageAlt: 'Wellets',
        techs: [
          'react',
          'node.js',
          'typescript',
          'postgresql',
          'redis',
          'docker',
          'nginx',
          'github',
          'git',
        ],
        link: 'https://wellets.ondaniel.com.br/',
        image: '/images/wellets.png',
        description:
          'Wellets is a financial management website that helps users to manage their money placed in multiple portfolios. It was developed with a focus on users engaged in the crypto world.',
      },
      {
        title: 'Microchat',
        imageAlt: 'Microchat',
        techs: [
          'react',
          'node.js',
          'typescript',
          'postgresql',
          'redis',
          'docker',
          'nginx',
          'github',
          'git',
        ],
        link: 'https://microchat.ondaniel.com.br/',
        image: '/images/microchat.png',
        description: 'Microchat is a simple chat service.',
      },
      {
        title: 'Koinzaar',
        imageAlt: 'Koinzaar',
        techs: [
          'react',
          'next.js',
          'node.js',
          'typescript',
          'mysql',
          'mongo',
          'redis',
          'docker',
          'github',
          'git',
        ],
        link: 'https://www.koinzaar.com/',
        image: '/images/koinzaar.png',
        description:
          'Koinzaar is a multi-cryptocurrency P2P Platform that enables users to buy and sell cryptocurrencies using a wide range of payment methods offered by other users from their country or worldwide.',
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
