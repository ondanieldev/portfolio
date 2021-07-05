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
      { icon: FaGithub, link: 'https://github.com/stemDaniel' },
      {
        icon: FaInstagram,
        link: 'https://www.instagram.com/devdanieloliveira/',
      },
      { icon: FaLinkedin, link: 'https://www.linkedin.com/in/ondaniel/' },
      { icon: FaTelegramPlane, link: 'https://t.me/ondaniel' },
      { icon: FaTwitter, link: 'https://github.com/stemDaniel' },
    ],
    [],
  );

  return (
    <Flex direction="column" justify="center" h="100vh" w="100%">
      <StackTitle
        stacks={stacks}
        name="Daniel Oliveira"
        photo="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fst.elohell.net%2Fpublic%2Fchill%2F83eac3fc45a884d252f24a08d6cdad98.png&f=1&nofb=1"
      />
      <SocialBar socials={socials} />
    </Flex>
  );
};

export default Presentation;
