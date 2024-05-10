import { useBreakpointValue } from '@chakra-ui/media-query';
import React, { useMemo } from 'react';

import SkillsCircle, { ICircle } from '../../Molecules/SkillsCircle';
import { baseCircleSize, baseItemSize, circleIcons } from './data';

const Skills: React.FC = () => {
  const circleSizeMultiplier = useBreakpointValue({
    base: 0,
    sm: 150,
  });

  const circles = useMemo<ICircle[]>(
    () =>
      circleIcons.map((circleIcon, index) => ({
        circleSize: baseCircleSize + index * circleSizeMultiplier,
        itemSize: baseItemSize,
        icons: circleIcon,
      })),
    [circleSizeMultiplier],
  );

  return <SkillsCircle circles={circles} />;
};

export default Skills;
