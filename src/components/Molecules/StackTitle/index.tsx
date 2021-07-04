import React, { useEffect, useState } from 'react';
import { Avatar, Box, Flex, Heading } from '@chakra-ui/react';

import { StackContainer, StackSlider } from './styles';

interface IProps {
  stacks: string[];
}

const StackTitle: React.FC<IProps> = ({ stacks }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const changeStack = setTimeout(() => {
      const maxIndex = stacks.length - 1;
      console.log(current, maxIndex);
      if (current === maxIndex) {
        setCurrent(0);
      } else {
        setCurrent(current + 1);
      }
    }, 5000);
    return () => clearTimeout(changeStack);
  }, [stacks, current]);

  return (
    <Flex justify="center">
      <Box mb="100px" mr="100px">
        <StackContainer key={current}>
          <StackSlider />
          <Heading as="h1" size="4xl">
            {stacks[current]}
          </Heading>
        </StackContainer>
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
