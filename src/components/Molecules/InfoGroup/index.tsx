import React from 'react';
import { Stack, useBreakpointValue } from '@chakra-ui/react';

import Heading from '../../Atoms/Heading';
import InfoCard, { IProps as IInfoCardProps } from '../InfoCard';

export interface IProps {
  title: string;
  cards: IInfoCardProps[];
}

const InfoGroup: React.FC<IProps> = ({ cards, title }) => {
  const maxWidth = useBreakpointValue({
    base: '100%',
    sm: '500px',
    md: '300px',
  });

  return (
    <Stack spacing="25px" maxW={maxWidth}>
      <Heading mb="10px" text={title} />
      {cards.map((card, i) => (
        <InfoCard
          {...card}
          direction={i % 2 === 0 ? 'right' : 'left'}
          key={i}
        />
      ))}
    </Stack>
  );
};

export default InfoGroup;
