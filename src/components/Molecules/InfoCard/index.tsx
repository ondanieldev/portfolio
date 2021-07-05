import React from 'react';
import { Flex, Image, Text } from '@chakra-ui/react';

export interface IProps {
  image: string;
  imageAlt: string;
  text: string;
  direction?: 'left' | 'right';
}

const InfoCard: React.FC<IProps> = ({
  image,
  imageAlt,
  text,
  direction = 'left',
  ...rest
}) => {
  return (
    <Flex w="100%">
      {direction === 'left' && <Text {...rest}>{text}</Text>}
      <Image
        borderRadius="full"
        boxSize="75px"
        src={image}
        alt={imageAlt}
        mr="10px"
      />
      {direction === 'right' && <Text {...rest}>{text}</Text>}
    </Flex>
  );
};

export default InfoCard;
