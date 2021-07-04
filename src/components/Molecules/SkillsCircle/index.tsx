import React, { useMemo } from 'react';
import { Heading, Icon } from '@chakra-ui/react';
import { IconType } from 'react-icons';

import { Wrapper, Container } from './styles';

export interface ICircle {
  circleSize: number;
  itemSize: number;
  icons: {
    icon: IconType;
    color: string;
  }[];
}

export interface IProps {
  circles: ICircle[];
}

const SkillsCircle: React.FC<IProps> = ({ circles }) => {
  const size = useMemo(() => {
    const index = circles.length - 1;
    return circles[index].circleSize + circles[index].itemSize;
  }, [circles]);

  return (
    <Wrapper size={size}>
      <Heading as="h2">Skills</Heading>

      {circles.map(circle => (
        <Container
          circleSize={circle.circleSize}
          itemCount={circle.icons.length}
          itemSize={circle.itemSize}
        >
          {circle.icons.map(icon => (
            <Icon as={icon.icon} color={icon.color} />
          ))}
        </Container>
      ))}
    </Wrapper>
  );
};

export default SkillsCircle;