import React, { useMemo } from 'react';
import { IconType } from 'react-icons';
import { Flex, LinkBox, LinkOverlay, Spacer } from '@chakra-ui/react';
import {
  FaInstagram,
  FaGithub,
  FaTwitter,
  FaTelegramPlane,
  FaEnvelope,
  FaLinkedin,
} from 'react-icons/fa';

import CircularIcon from '../../Atoms/CircularIcon';

interface ISocialIcon {
  icon: IconType;
  link: string;
}

const SocialBar: React.FC = () => {
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
    <Flex justify="center">
      <Spacer />
      {socials.map((social, i) => (
        <>
          <LinkBox
            key={i}
            transition="transform 0.15s linear"
            _hover={{ transform: 'scale(1.2)' }}
          >
            <CircularIcon icon={social.icon} />
            <LinkOverlay href={social.link} />
          </LinkBox>
          <Spacer />
        </>
      ))}
    </Flex>
  );
};

export default SocialBar;
