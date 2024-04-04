import React from 'react';
import { Stack, Text } from '@chakra-ui/react';

import Heading from '../../Atoms/Heading';
import BreakingNews from '../../Molecules/BreakingNews';

const About: React.FC = () => {
  return (
    <Stack>
      <Heading text="About me" alignSelf="center" />
      <Text textAlign="justify" fontSize="1.2em">
        I'm a full stack software engineer with more than 4 years of office and
        remote work experience. I excel in comprehending project requirements,
        conceptualizing software designs, creating software diagrams,
        managing/guiding other developers and implementing front-end, back-end,
        DevOps, and mobile solutions
      </Text>
      <BreakingNews text="Currently learning Rust and Solana Smart Contracts" />
    </Stack>
  );
};

export default About;
