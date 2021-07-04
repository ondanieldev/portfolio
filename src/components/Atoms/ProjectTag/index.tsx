import React, { useMemo } from 'react';
import { Badge } from '@chakra-ui/react';

interface IProps {
  text: string;
}

const ProjectTag: React.FC<IProps> = ({ text }) => {
  const color = useMemo(() => {
    switch (text) {
      case 'ReactJS':
        return 'blue';
      case 'NodeJS':
        return 'green';
      default:
        return 'gray';
    }
  }, [text]);

  return (
    <Badge py="5px" px="10px" colorScheme={color}>
      {text}
    </Badge>
  );
};

export default ProjectTag;
