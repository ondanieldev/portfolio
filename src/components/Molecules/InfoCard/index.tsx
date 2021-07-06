import React from 'react';
import {
  Box,
  Flex,
  Image,
  Text,
  Heading,
  LinkBox,
  LinkOverlay,
} from '@chakra-ui/react';

export interface IProps {
  image: string;
  imageAlt: string;
  text: string;
  title: string;
  subtitle: string;
  link: string;
  direction?: 'left' | 'right';
}

const InfoCard: React.FC<IProps> = ({
  image,
  imageAlt,
  text,
  title,
  link,
  subtitle,
  direction = 'left',
  ...rest
}) => {
  const Content = () => (
    <Box>
      <Heading as="h3" size="sm" mb="5px">
        {title} - {subtitle}
      </Heading>
      <Text {...rest}>{text}</Text>
    </Box>
  );

  return (
    <LinkBox>
      <LinkOverlay href={link} isExternal />
      <Flex w="100%">
        {direction === 'left' && <Content />}
        <Image
          borderRadius="full"
          boxSize="75px"
          src={image}
          alt={imageAlt}
          mr="10px"
          backgroundColor="white"
        />
        {direction === 'right' && <Content />}
      </Flex>
    </LinkBox>
  );
};

export default InfoCard;
