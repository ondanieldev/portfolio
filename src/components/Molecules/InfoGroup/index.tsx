import React from 'react';
import { Stack } from '@chakra-ui/react';

import Heading from '../../Atoms/Heading';
import InfoCard, { IProps as IInfoCardProps } from '../InfoCard';

export interface IProps {
  title: string;
  cards: IInfoCardProps[];
}

const InfoGroup: React.FC<IProps> = ({ cards, title }) => {
  return (
    <Stack spacing="20px">
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
