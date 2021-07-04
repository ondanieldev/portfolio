import React, { useMemo } from 'react';
import { Icon } from '@chakra-ui/react';
import { IconType } from 'react-icons';
import {
  SiNodeDotJs,
  SiTypescript,
  SiGo,
  SiPhp,
  SiReact,
  SiNextDotJs,
  SiDocker,
  SiGithub,
  SiGit,
  SiNginx,
} from 'react-icons/si';

import { Wrapper, Container } from './styles';

interface ICircle {
  circleSize: number;
  itemCount: number;
  itemSize: number;
  icons: {
    icon: IconType;
    color: string;
  }[];
}

const SkillsCircle: React.FC = () => {
  const backend = useMemo<ICircle>(
    () => ({
      circleSize: 200,
      itemCount: 4,
      itemSize: 50,
      icons: [
        { icon: SiNodeDotJs, color: '#339933' },
        { icon: SiTypescript, color: '#3178C6' },
        { icon: SiGo, color: '#00ADD8' },
        { icon: SiPhp, color: '#777BB4' },
      ],
    }),
    [],
  );

  const frontend = useMemo<ICircle>(
    () => ({
      circleSize: 350,
      itemCount: 2,
      itemSize: 50,
      icons: [
        { icon: SiReact, color: '#61DAFB' },
        { icon: SiNextDotJs, color: '#000000' },
      ],
    }),
    [],
  );

  const devops = useMemo<ICircle>(
    () => ({
      circleSize: 500,
      itemCount: 4,
      itemSize: 50,
      icons: [
        { icon: SiDocker, color: '#2496ED' },
        { icon: SiGithub, color: '#181717' },
        { icon: SiGit, color: '#F05032' },
        { icon: SiNginx, color: '#009639' },
      ],
    }),
    [],
  );

  return (
    <Wrapper>
      <Container
        circleSize={backend.circleSize}
        itemCount={backend.itemCount}
        itemSize={backend.itemSize}
      >
        {backend.icons.map(icon => (
          <Icon as={icon.icon} color={icon.color} />
        ))}
      </Container>

      <Container
        circleSize={frontend.circleSize}
        itemCount={frontend.itemCount}
        itemSize={frontend.itemSize}
      >
        {frontend.icons.map(icon => (
          <Icon as={icon.icon} color={icon.color} />
        ))}
      </Container>

      <Container
        circleSize={devops.circleSize}
        itemCount={devops.itemCount}
        itemSize={devops.itemSize}
      >
        {devops.icons.map(icon => (
          <Icon as={icon.icon} color={icon.color} />
        ))}
      </Container>
    </Wrapper>
  );
};

export default SkillsCircle;
