import React from 'react';
import { Heading as BaseHeading, HeadingProps } from '@chakra-ui/react';

// import { Container } from './styles';

interface IProps extends HeadingProps {
  text: string;
}

const Heading: React.FC<IProps> = ({ text, ...rest }) => {
  return (
    <BaseHeading text={text} {...rest}>
      {text}
    </BaseHeading>
  );
};

export default Heading;
