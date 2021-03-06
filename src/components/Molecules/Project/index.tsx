import React from 'react';
// import Image from 'next/image';
import {
  Box,
  Heading,
  Image,
  Text,
  Wrap,
  WrapItem,
  LinkBox,
  LinkOverlay,
} from '@chakra-ui/react';

import ProjectTag from '../../Atoms/ProjectTag';

export interface IProps {
  image: string;
  imageAlt: string;
  techs: string[];
  description: string;
  title: string;
  link: string;
}

const Project: React.FC<IProps> = ({
  imageAlt,
  description,
  image,
  techs,
  title,
  link,
}) => {
  return (
    <LinkBox w="100%" borderWidth="2px" borderRadius="5px" overflow="hidden">
      <LinkOverlay href={link} isExternal />

      <Image objectFit="cover" w="100%" h="300px" src={image} alt={imageAlt} />

      <Box p="15px">
        <Heading mb="10px" as="h3" size="md">
          {title}
        </Heading>

        <Wrap direction="row" spacing="15px">
          {techs.map((tech, i) => (
            <WrapItem key={i}>
              <ProjectTag text={tech} />
            </WrapItem>
          ))}
        </Wrap>

        <Text mt="10px" fontSize="1.2em">
          {description}
        </Text>
      </Box>
    </LinkBox>
  );
};

export default Project;
