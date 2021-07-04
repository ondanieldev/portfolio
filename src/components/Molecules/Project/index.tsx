import React from 'react';
import { Box, Image, Stack, Text } from '@chakra-ui/react';

import ProjectTag from '../../Atoms/ProjectTag';

interface IProps {
  image: string;
  imageAlt: string;
  techs: string[];
  description: string;
}

const Project: React.FC<IProps> = ({ imageAlt, description, image, techs }) => {
  return (
    <Box
      w="100%"
      maxW="600px"
      borderWidth="2px"
      borderRadius="5px"
      overflow="hidden"
    >
      <Image w="100%" maxH="300px" src={image} alt={imageAlt} />

      <Box p="15px">
        <Stack direction="row" spacing="15px">
          {techs.map((tech, i) => (
            <ProjectTag key={i} text={tech} />
          ))}
        </Stack>

        <Text mt="10px" fontWeight="semibold">
          {description}
        </Text>
      </Box>
    </Box>
  );
};

export default Project;
