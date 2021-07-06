import React from 'react';
import { IconType } from 'react-icons';
import { LinkBox, LinkOverlay, Wrap } from '@chakra-ui/react';

import CircularIcon from '../../Atoms/CircularIcon';

export interface ISocialIcon {
  icon: IconType;
  link: string;
}

interface IProps {
  socials: ISocialIcon[];
}

const SocialBar: React.FC<IProps> = ({ socials }) => {
  return (
    <Wrap justify="center" spacing="50px">
      {socials.map((social, i) => (
        <LinkBox
          key={i}
          transition="transform 0.15s linear"
          _hover={{ transform: 'scale(1.2)' }}
        >
          <CircularIcon icon={social.icon} />
          <LinkOverlay href={social.link} isExternal />
        </LinkBox>
      ))}
    </Wrap>
  );
};

export default SocialBar;
