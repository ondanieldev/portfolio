import React, { useMemo } from 'react';
import { Flex } from '@chakra-ui/react';
import {
  FaInstagram,
  FaGithub,
  FaTwitter,
  FaTelegramPlane,
  FaEnvelope,
  FaLinkedin,
} from 'react-icons/fa';

import StackTitle from '../../Molecules/StackTitle';
import SocialBar, { ISocialIcon } from '../../Molecules/SocialBar';

const Presentation: React.FC = () => {
  const stacks = useMemo<string[]>(() => ['Fullstack', 'Blockchain'], []);

  const socials = useMemo<ISocialIcon[]>(
    () => [
      { icon: FaEnvelope, link: 'mailto:me@ondaniel.com.br' },
      { icon: FaGithub, link: 'https://github.com/ondanieldev' },
      {
        icon: FaInstagram,
        link: 'https://www.instagram.com/ondanieldev/',
      },
      { icon: FaLinkedin, link: 'https://www.linkedin.com/in/ondanieldev/' },
      { icon: FaTelegramPlane, link: 'https://t.me/ondanieldev' },
      { icon: FaTwitter, link: 'https://github.com/ondanieldev' },
    ],
    [],
  );

  return (
    <Flex direction="column" justify="center" h="100vh" w="100%">
      <StackTitle
        stacks={stacks}
        name="Daniel Oliveira"
        photo="/images/avatar.jpg"
      />
      <SocialBar socials={socials} />
    </Flex>
  );
};

export default Presentation;
