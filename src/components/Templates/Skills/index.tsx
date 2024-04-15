import { useBreakpointValue } from '@chakra-ui/media-query';
import React, { useMemo } from 'react';
import {
  SiNodedotjs,
  SiTypescript,
  SiNestjs,
  SiPhp,
  SiReact,
  SiNextdotjs,
  SiDocker,
  SiGithub,
  SiGit,
  SiNginx,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiRedis,
  SiRedux,
  SiFigma,
  SiStorybook,
  SiKubernetes,
  SiBackstage,
  SiAmazonaws,
  SiGooglecloud,
  SiJest,
  SiCypress,
  SiJavascript,
} from 'react-icons/si';

import SkillsCircle, { ICircle } from '../../Molecules/SkillsCircle';

const baseItemSize = 50;

const baseCircleSize = 200;

const Skills: React.FC = () => {
  const circleSizeMultiplier = useBreakpointValue({
    base: 0,
    sm: 150,
  });

  const frontend = useMemo<ICircle>(
    () => ({
      circleSize: baseCircleSize,
      itemSize: baseItemSize,
      icons: [
        { icon: SiReact, color: '#61DAFB' },
        { icon: SiNextdotjs, color: '#fff' },
        { icon: SiRedux, color: '#754abc' },
      ],
    }),
    [],
  );

  const backend = useMemo<ICircle>(
    () => ({
      circleSize: baseCircleSize + 1 * circleSizeMultiplier,
      itemSize: baseItemSize,
      icons: [
        { icon: SiJavascript, color: '#f7e01c' },
        { icon: SiTypescript, color: '#3178C6' },
        { icon: SiNodedotjs, color: '#339933' },
        { icon: SiNestjs, color: '#df234e' },
        { icon: SiPhp, color: '#777BB4' },
      ],
    }),
    [circleSizeMultiplier],
  );

  const devops = useMemo<ICircle>(
    () => ({
      circleSize: baseCircleSize + 3 * circleSizeMultiplier,
      itemSize: baseItemSize,
      icons: [
        { icon: SiNginx, color: '#009639' },
        { icon: SiDocker, color: '#2496ED' },
        { icon: SiKubernetes, color: '#306ce5' },
        { icon: SiAmazonaws, color: '#e4933d' },
        { icon: SiGooglecloud, color: '#1a72e7' },
        { icon: SiMysql, color: '#4479A1' },
        { icon: SiPostgresql, color: '#4169E1' },
        { icon: SiMongodb, color: '#47A248' },
        { icon: SiRedis, color: '#DC382D' },
      ],
    }),
    [circleSizeMultiplier],
  );

  const general = useMemo<ICircle>(
    () => ({
      circleSize: baseCircleSize + 2 * circleSizeMultiplier,
      itemSize: baseItemSize,
      icons: [
        { icon: SiGit, color: '#F05032' },
        { icon: SiGithub, color: '#fff' },
        { icon: SiJest, color: '#9a425c' },
        { icon: SiCypress, color: '#077681' },
        { icon: SiStorybook, color: '#f84a86' },
        { icon: SiFigma, color: '#5651ff' },
        { icon: SiBackstage, color: '#35baa0' },
      ],
    }),
    [circleSizeMultiplier],
  );

  return <SkillsCircle circles={[frontend, backend, general, devops]} />;
};

export default Skills;
