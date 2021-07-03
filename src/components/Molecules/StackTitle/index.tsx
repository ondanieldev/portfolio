import React from 'react';
import { Avatar, Box, Flex, Heading } from '@chakra-ui/react';

const StackTitle: React.FC = () => {
  return (
    <Flex justify="center">
      <Box mb="100px" mr="100px">
        <Heading as="h1" size="4xl">
          Fullstack
        </Heading>
        <Heading as="h1" size="4xl">
          Developer
        </Heading>
      </Box>

      <Avatar
        size="2xl"
        name="Daniel Oliveira"
        src="https://avatars.githubusercontent.com/u/50562390?v=4"
      />
    </Flex>
  );
};

export default StackTitle;
