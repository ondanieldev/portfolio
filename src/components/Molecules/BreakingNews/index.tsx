import React from 'react';
import { Flex, Icon, Heading } from '@chakra-ui/react';
import { FaFire } from 'react-icons/fa';

interface IProps {
  text: string;
}

const BreakingNews: React.FC<IProps> = ({ text }) => {
  return (
    <Flex alignItems="center">
      <Icon as={FaFire} mr="10px" color="red.500" />
      <Heading size="md" as="h3">
        {text}
      </Heading>
    </Flex>
  );
};

export default BreakingNews;
