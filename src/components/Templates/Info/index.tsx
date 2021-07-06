import React, { useMemo } from 'react';
import { Wrap, WrapItem } from '@chakra-ui/react';

import InfoGroup, {
  IProps as IInfoGroupProps,
} from '../../Molecules/InfoGroup';

const Info: React.FC = () => {
  const orgs = useMemo<IInfoGroupProps>(
    () => ({
      title: 'Current Orgs',
      cards: [
        {
          title: 'Spiry Capital',
          text: 'Fullstack and blockchain developer',
          link: 'https://spiry.ro/',
          image: 'https://i.imgur.com/htQBXTT.png',
          imageAlt: 'Spiry Capital',
        },
        {
          title: 'Frenchie Network',
          text: 'Fullstack and blockchain developer',
          link: 'https://frenchie.tech/',
          image: 'https://i.imgur.com/9L5bOoS.png',
          imageAlt: 'Frenchie Network',
        },
        {
          title: 'League of Devs',
          text: 'Founder & Fullcycle developer',
          link: 'https://www.leagueofdevs.com.br/',
          image: 'https://i.imgur.com/OPRDMii.png?1',
          imageAlt: 'League of Devs',
        },
      ],
    }),
    [],
  );

  const education = useMemo<IInfoGroupProps>(
    () => ({
      title: 'Education',
      cards: [
        {
          title: 'SENAI',
          text: 'Technical degree in Software Development',
          link: 'https://www.senaimg.com.br:543/',
          image: 'https://i.imgur.com/P1OJIrg.jpg',
          imageAlt: 'SENAI',
        },
        {
          title: 'UFMG',
          text: "Bachelor's degree in Information Systems",
          link: 'https://ufmg.br/',
          image: 'https://i.imgur.com/WULjXy8.jpg',
          imageAlt: 'UFMG',
        },
      ],
    }),
    [],
  );

  const achievements = useMemo<IInfoGroupProps>(
    () => ({
      title: 'Achievements',
      cards: [
        {
          title: 'FLL',
          text: '3rd place in the Minas Gerais regional of the FLL robotics tournament',
          link: 'https://www.firstlegoleague.org/',
          image: 'https://i.imgur.com/mFuuab9.jpg',
          imageAlt: 'FLL',
        },
      ],
    }),
    [],
  );

  return (
    <Wrap spacing="45px" justify="center">
      <WrapItem>
        <InfoGroup {...orgs} />
      </WrapItem>
      <WrapItem>
        <InfoGroup {...education} />
      </WrapItem>
      <WrapItem>
        <InfoGroup {...achievements} />
      </WrapItem>
    </Wrap>
  );
};

export default Info;
