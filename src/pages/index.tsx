import React from 'react';
import { NextPage } from 'next';
import { Container, Flex } from '@chakra-ui/react';

import Head from '../components/Atoms/Head';
import StackTitle from '../components/Molecules/StackTitle';
import SocialBar from '../components/Molecules/SocialBar';
import MouseIcon from '../components/Atoms/MouseIcon';

const Home: NextPage = () => {
  return (
    <Container maxW="container.md" h="100vh">
      <Head title="Daniel Oliveira" />

      <Flex direction="column" justify="center" h="80%">
        <StackTitle />
        <SocialBar />
      </Flex>

      <MouseIcon />
    </Container>
  );
};

export default Home;
