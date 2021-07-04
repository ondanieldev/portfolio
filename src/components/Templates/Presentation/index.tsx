import React from 'react';
import { Flex } from '@chakra-ui/react';

import StackTitle from '../../Molecules/StackTitle';
import SocialBar from '../../Molecules/SocialBar';

const Presentation: React.FC = () => {
  return (
    <Flex direction="column" justify="center" h="100vh" w="100%">
      <StackTitle stacks={['Fullstack', 'Blockchain']} />
      <SocialBar />
    </Flex>
  );
};

export default Presentation;
