import React, { useMemo } from 'react';
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
  Link,
} from '@chakra-ui/react';

import ProjectTag from '../../Atoms/ProjectTag';
import {
  ArchitectureTech,
  BackEndTech,
  CiTech,
  DatabaseTech,
  DevopsTech,
  FrontendTech,
  GeneralTech,
  MessagebrokerTech,
  MobileTech,
  QaTech,
  Tech,
  VersioningTech,
} from '../../../enums/Tech.enum';

export interface IProps {
  image: string;
  imageAlt: string;
  techs: {
    general?: GeneralTech[];
    architecture?: ArchitectureTech[];
    backEnd?: BackEndTech[];
    ci?: CiTech[];
    database?: DatabaseTech[];
    devops?: DevopsTech[];
    frontend?: FrontendTech[];
    messagebroker?: MessagebrokerTech[];
    mobile?: MobileTech[];
    qa?: QaTech[];
    versioning?: VersioningTech[];
  };
  description: string;
  title: string;
  link?: string;
  subLinks?: {
    text: string;
    href: string;
  }[][];
}

const Project: React.FC<IProps> = ({
  imageAlt,
  description,
  image,
  techs,
  title,
  link,
  subLinks,
}) => {
  const techsList = useMemo<Tech[]>(
    () =>
      Object.values(techs)
        .filter(Boolean)
        .reduce(
          (resultArr, currArr) =>
            [
              ...resultArr,
              ...currArr.sort((a: string, b: string) => a.localeCompare(b)),
            ] as Tech[],
          [],
        ),
    [techs],
  );

  return (
    <LinkBox w="100%" borderWidth="2px" borderRadius="5px" overflow="hidden">
      {link && <LinkOverlay href={link} isExternal />}

      <Image objectFit="cover" w="100%" h="300px" src={image} alt={imageAlt} />

      <Box p="15px">
        <Heading mb="10px" as="h3" size="md">
          {title}
        </Heading>

        <Wrap direction="row" spacing="15px">
          {techsList.map((tech, i) => (
            <WrapItem key={i}>
              <ProjectTag tech={tech} />
            </WrapItem>
          ))}
        </Wrap>

        <Text mt="10px" fontSize="1.2em">
          {description}
        </Text>

        {subLinks?.length &&
          subLinks.map(group => (
            <Box mt="10px">
              <Wrap direction="row" spacing="15px" justify="center">
                {group.map(({ href, text }) => (
                  <Link
                    rel="noreferrer"
                    target="_blank"
                    href={href}
                    textDecoration="underline"
                    color="blue.500"
                  >
                    {text}
                  </Link>
                ))}
              </Wrap>
            </Box>
          ))}
      </Box>
    </LinkBox>
  );
};

export default Project;
