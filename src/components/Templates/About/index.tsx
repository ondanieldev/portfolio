import React from 'react';
import { Stack, Text } from '@chakra-ui/react';

import Heading from '../../Atoms/Heading';
import BreakingNews from '../../Molecules/BreakingNews';

const About: React.FC = () => {
  return (
    <Stack>
      <Heading text="About me" alignSelf="center" />
      <Text textAlign="justify" fontSize="1.2em">
        I&apos;m 18 years old and I started to be interested in programming at
        14. I work mainly with NodeJS, ReactJS and TypeScript. I&apos;m
        currently studying Information Systems at the Federal University of
        Minas Gerais (UFMG) in order to obtain opportunities to learn robotics
        from a scientific point of view. I&apos;m also learning about blockchain
        and smart contracts on my own. In short, I love robotics, machine
        learning, artificial intelligence, IoT, web development, linux, and much
        more!
      </Text>
      <BreakingNews text="Learning Go and Solidity" />
      <BreakingNews text="Working hard at Spiry Capital" />
      <BreakingNews text="Planning to learn more about AI and robotics" />
    </Stack>
  );
};

export default About;
