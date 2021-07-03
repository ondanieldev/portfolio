import React from 'react';
import { NextPage } from 'next';
import { Container } from '@chakra-ui/react';

import Head from '../components/Atoms/Head';
import MouseIcon from '../components/Atoms/MouseIcon';
import Presentation from '../components/Templates/Presentation';
import Projects from '../components/Templates/Projects';

const Home: NextPage = () => {
  return (
    <Container maxW="container.md" h="100vh">
      <Head title="Daniel Oliveira" />

      <Presentation />
      <Projects />

      <MouseIcon />
    </Container>
  );
};

export default Home;
