import React from 'react';
import { NextPage } from 'next';
import { Container, Heading } from '@chakra-ui/react';

import Head from '../components/Head';

const Home: NextPage = () => {
  return (
    <Container>
      <Head title="Daniel Oliveira" />

      <Heading color="teal.300">Hello, world!</Heading>
    </Container>
  );
};

export default Home;
