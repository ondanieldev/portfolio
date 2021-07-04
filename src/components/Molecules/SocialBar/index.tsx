import React, { useMemo } from 'react';
import { IconType } from 'react-icons';
import { Flex, LinkBox, LinkOverlay, Spacer } from '@chakra-ui/react';
import {
  FaInstagram,
  FaGithub,
  FaTwitter,
  FaTelegram,
  FaEnvelope,
} from 'react-icons/fa';

import CircularIcon from '../../Atoms/CircularIcon';

interface ISocialIcon {
  icon: IconType;
  link: string;
}

const SocialBar: React.FC = () => {
  const socials = useMemo<ISocialIcon[]>(
    () => [
      {
        icon: FaInstagram,
        link: 'https://www.instagram.com/devdanieloliveira/',
      },
      { icon: FaGithub, link: 'https://github.com/stemDaniel' },
      { icon: FaTwitter, link: 'https://github.com/stemDaniel' },
      { icon: FaTelegram, link: 'https://t.me/ondaniel' },
      { icon: FaEnvelope, link: 'mailto:me@ondaniel.com.br' },
    ],
    [],
  );

  return (
    <Flex justify="center">
      <Spacer />
      {socials.map((social, i) => (
        <>
          <LinkBox key={i}>
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
