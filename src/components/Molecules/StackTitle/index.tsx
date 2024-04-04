import React, { useEffect, useState } from 'react';
import {
  Avatar,
  Box,
  Flex,
  Heading,
  useBreakpointValue,
} from '@chakra-ui/react';

import { StackContainer, StackSlider } from './styles';

interface IProps {
  stacks: string[];
  name: string;
  photo: string;
}

const StackTitle: React.FC<IProps> = ({ stacks, name, photo }) => {
  const [current, setCurrent] = useState(0);

  const titleSize = useBreakpointValue({ base: '3xl', sm: '4xl' });
  const avatarSize = useBreakpointValue({
    base: 'lg',
    sm: '2xl',
  });
  const avatarMargin = useBreakpointValue({ base: '0', md: '100px' });

  useEffect(() => {
    const changeStack = setTimeout(() => {
      const maxIndex = stacks.length - 1;
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
      <Flex justify="space-between" w="100%" maxW="700px">
        <Box mb="100px" mr={avatarMargin}>
          <StackContainer key={current}>
            <StackSlider />
            <Heading as="h1" size={titleSize}>
              {stacks[current]}
            </Heading>
          </StackContainer>
          <Heading as="h1" size={titleSize}>
            Software Engineer
          </Heading>
        </Box>

        <Avatar
          size={avatarSize}
          name={name}
          src={photo}
          backgroundColor="transparent"
        />
      </Flex>
    </Flex>
  );
};

export default StackTitle;
