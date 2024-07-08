import React from 'react';
import { Stack, Text } from '@chakra-ui/react';

import Heading from '../../Atoms/Heading';
import BreakingNews from '../../Molecules/BreakingNews';

const About: React.FC = () => {
  return (
    <Stack>
      <Heading text="About me" alignSelf="center" />
      <Text textAlign="justify" fontSize="1.2em">
        Full Stack Software Engineer with four years of experience building
        robust and scalable projects including responsive UIs, GraphQL and
        RESTful APIs and multi-platform mobile apps. Proficient in TypeScript,
        JavaScript and Node.js. Experience working with versioning tools,
        DevOps, SQL and NoSQL databases, message brokers, documentation tools,
        modern frameworks, QA tools and team management. Recently turned a
        legacy JavaScript dashboard into a TypeScript SaaS to assist trading on
        P2P crypto marketplaces.
      </Text>
      <BreakingNews text="Currently learning Rust and Solana Smart Contracts" />
    </Stack>
  );
};

export default About;
