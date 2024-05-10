import React from 'react';
import { Flex } from '@chakra-ui/react';

import Heading from '../../Atoms/Heading';
import Carousel from '../../Organisms/Carousel';
import { projects } from './data';
import Project from '../../Molecules/Project';

const Projects: React.FC = () => {
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
