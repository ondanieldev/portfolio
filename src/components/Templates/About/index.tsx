import React from 'react';
import { Stack, Text } from '@chakra-ui/react';

import Heading from '../../Atoms/Heading';
import BreakingNews from '../../Molecules/BreakingNews';

const About: React.FC = () => {
  return (
    <Stack>
      <Heading text="About me" alignSelf="center" />
      <Text textAlign="justify" fontSize="1.2em" />
      <BreakingNews text="Learning Go and Solidity" />
      <BreakingNews text="Working hard at Spiry Capital" />
      <BreakingNews text="Planning to learn more about AI and robotics" />
    </Stack>
  );
};

export default About;
