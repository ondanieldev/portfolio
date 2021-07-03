import React from 'react';
import { Flex } from '@chakra-ui/react';

import Step from '../../Atoms/Step';
import StackTitle from '../../Molecules/StackTitle';
import SocialBar from '../../Molecules/SocialBar';

const Presentation: React.FC = () => {
  return (
    <Step>
      <Flex direction="column" justify="center" h="80%">
        <StackTitle />
        <SocialBar />
      </Flex>
    </Step>
  );
};

export default Presentation;
