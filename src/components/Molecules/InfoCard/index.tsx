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
  link: string;
}

const InfoCard: React.FC<IProps> = ({
  image,
  imageAlt,
  text,
  title,
  link,
  ...rest
}) => {
  return (
    <LinkBox>
      <LinkOverlay href={link} isExternal />
      <Flex w="100%">
        <Image
          borderRadius="full"
          boxSize="75px"
          src={image}
          alt={imageAlt}
          mr="10px"
        />
        <Box>
          <Heading as="h3" size="md" mb="5px">
            {title}
          </Heading>
          <Text fontSize="1.2em" {...rest}>
            {text}
          </Text>
        </Box>
      </Flex>
    </LinkBox>
  );
};

export default InfoCard;
