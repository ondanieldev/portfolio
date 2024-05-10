import React, { useMemo } from 'react';
import { Badge } from '@chakra-ui/react';
import { Tech } from '../../../enums/Tech.enum';
import { techDataMap } from '../../../data/tech.data';
import { alphaValue, defaultColor, isHex } from './data';

interface IProps {
  tech: Tech;
}

const ProjectTag: React.FC<IProps> = ({ tech }) => {
  const color = useMemo(() => {
    return techDataMap[tech]?.color || defaultColor;
  }, [tech]);

  const bgColor = useMemo(() => {
    if (isHex(color)) {
      return `${color}${alphaValue}`;
    }

    // Otherwise, return plain color
    return color;
  }, [color]);

  return (
    <Badge
      py="5px"
      px="10px"
      bgColor={bgColor}
      color={color}
      textTransform="none"
    >
      {tech}
    </Badge>
  );
};

export default ProjectTag;
