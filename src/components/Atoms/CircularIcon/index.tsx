import React from 'react';
import { Icon } from '@chakra-ui/react';
import { IconType } from 'react-icons';

import { Container } from './styles';

interface IProps {
  icon: IconType;
}

const CircularIcon: React.FC<IProps> = ({ icon }) => {
  return (
    <Container size={15}>
      <Icon as={icon} boxSize="2em" />
    </Container>
  );
};

export default CircularIcon;
