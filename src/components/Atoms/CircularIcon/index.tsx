import React from 'react';
import { Icon } from '@chakra-ui/react';
import { IconType } from 'react-icons';

import { Container } from './styles';

interface IProps {
  icon: IconType;
}

const CircularIcon: React.FC<IProps> = ({ icon }) => {
  return (
    <Container>
      <Icon as={icon} boxSize="25px" />
    </Container>
  );
};

export default CircularIcon;
