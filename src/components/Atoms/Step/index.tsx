import React from 'react';
import { Flex } from '@chakra-ui/layout';

const Step: React.FC = ({ children }) => {
  return (
    <Flex direction="column" justify="center" h="100%">
      {children}
    </Flex>
  );
};

export default Step;
