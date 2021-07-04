import React from 'react';
import { IconType } from 'react-icons';
import { Flex, LinkBox, LinkOverlay, Spacer } from '@chakra-ui/react';

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
