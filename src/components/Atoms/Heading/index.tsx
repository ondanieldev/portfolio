import React from 'react';
import { HeadingProps } from '@chakra-ui/react';

import { Container } from './styles';

interface IProps extends HeadingProps {
  text: string;
}

const Heading: React.FC<IProps> = ({ text, ...rest }) => {
  return (
    <Container text={text} {...rest}>
      {text}
    </Container>
  );
};

export default Heading;
