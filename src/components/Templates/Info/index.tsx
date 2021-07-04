import React, { useMemo } from 'react';
import { Wrap, WrapItem } from '@chakra-ui/react';

import Step from '../../Atoms/Step';
import InfoGroup, {
  IProps as IInfoGroupProps,
} from '../../Molecules/InfoGroup';

const Info: React.FC = () => {
  const education = useMemo<IInfoGroupProps>(
    () => ({
      title: 'Education',
      cards: [
        {
          image: 'https://bit.ly/sage-adebayo',
          imageAlt: 'Segun Adebayo',
          text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        },
        {
          image: 'https://bit.ly/sage-adebayo',
          imageAlt: 'Segun Adebayo',
          text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        },
      ],
    }),
    [],
  );

  return (
    <Step>
      <Wrap spacing="20px" justify="center" align="center">
        <WrapItem>
          <InfoGroup {...education} />
        </WrapItem>
        <WrapItem>
          <InfoGroup {...education} />
        </WrapItem>
        <WrapItem>
          <InfoGroup {...education} />
        </WrapItem>
      </Wrap>
    </Step>
  );
};

export default Info;
