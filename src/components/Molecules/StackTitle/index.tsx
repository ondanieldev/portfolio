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

  const containerJustify = useBreakpointValue({
    base: 'space-between',
    md: 'center',
  });
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
    <Flex justify={containerJustify}>
      <Box mb="100px" mr={avatarMargin}>
        <StackContainer key={current}>
          <StackSlider />
          <Heading as="h1" size={titleSize}>
            {stacks[current]}
          </Heading>
        </StackContainer>
        <Heading as="h1" size={titleSize}>
          Developer
        </Heading>
      </Box>

      <Avatar size={avatarSize} name={name} src={photo} bg="white" />
    </Flex>
  );
};

export default StackTitle;
