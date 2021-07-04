import React from 'react';
import { NextPage } from 'next';
import { Container, Stack } from '@chakra-ui/react';

import Head from '../components/Atoms/Head';
import MouseIcon from '../components/Atoms/MouseIcon';
import Presentation from '../components/Templates/Presentation';
import Projects from '../components/Templates/Projects';
import Skills from '../components/Templates/Skills';
import Info from '../components/Templates/Info';

const Home: NextPage = () => {
  return (
    <Container maxW="container.lg">
      <Head title="Daniel Oliveira" />

      <Presentation />
      <Stack spacing="150px" mb="150px">
        <Skills />
        <Projects />
        <Info />
      </Stack>

      <MouseIcon />
    </Container>
  );
};

export default Home;
