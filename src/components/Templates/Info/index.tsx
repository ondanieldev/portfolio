import React, { useMemo } from 'react';
import { Wrap, WrapItem } from '@chakra-ui/react';

import InfoGroup, {
  IProps as IInfoGroupProps,
} from '../../Molecules/InfoGroup';

const Info: React.FC = () => {
  const orgs = useMemo<IInfoGroupProps>(
    () => ({
      title: 'Worked orgs',
      cards: [
        {
          title: 'Spiry Capital',
          text: 'Full stack and blockchain developer',
          link: 'https://spiry.ro/',
          image: '/images/spiry-logo.png',
          imageAlt: 'Spiry Capital',
        },
        {
          title: 'Postmetria',
          text: 'Full stack developer',
          link: 'https://postmetria.com.br/',
          image: '/images/postmetria-logo.png',
          imageAlt: 'Postmetria',
        },
        {
          title: 'Frenchie Network',
          text: 'Full stack and blockchain developer',
          link: 'https://frenchie.tech/',
          image: '/images/frenchie-logo.png',
          imageAlt: 'Frenchie Network',
        },
        {
          title: 'Colégio Santiago',
          text: 'Robotics teacher and full stack developer',
          link: 'https://colegiosantiago.com.br/',
          image: '/images/santiago-logo.png',
          imageAlt: 'Frenchie Network',
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
          image: '/images/senai-logo.png',
          imageAlt: 'SENAI',
        },
        {
          title: 'UFMG',
          text: "Incomplete bachelor's degree in Information Systems",
          link: 'https://ufmg.br/',
          image: '/images/ufmg-logo.png',
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
          image: '/images/fll-logo.png',
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
