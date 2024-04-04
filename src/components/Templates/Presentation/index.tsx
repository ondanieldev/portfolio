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
  const stacks = useMemo<string[]>(() => ['Full Stack'], []);

  const socials = useMemo<ISocialIcon[]>(
    () => [
      { icon: FaEnvelope, link: 'mailto:me@ondaniel.com.br' },
      { icon: FaGithub, link: 'https://github.com/ondanieldev' },
      { icon: FaLinkedin, link: 'https://www.linkedin.com/in/ondanieldev/' },
      { icon: FaTelegramPlane, link: 'https://t.me/ondanieldev' },
    ],
    [],
  );

  return (
    <Flex direction="column" justify="center" h="100vh" w="100%">
      <StackTitle
        stacks={stacks}
        name="Daniel Oliveira"
        photo="/images/avatar.png"
      />
      <SocialBar socials={socials} />
    </Flex>
  );
};

export default Presentation;
