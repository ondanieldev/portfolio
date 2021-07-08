import React, { useMemo } from 'react';
import { Badge } from '@chakra-ui/react';

interface IProps {
  text: string;
}

const ProjectTag: React.FC<IProps> = ({ text }) => {
  const color = useMemo(() => {
    switch (text) {
      case 'react':
        return 'blue';
      case 'electron':
        return 'teal';
      case 'next.js':
        return 'gray';
      case 'typescript':
        return 'blue';
      case 'php':
        return 'purple';
      case 'solidity':
        return 'gray';
      case 'go':
        return 'blue';
      case 'node.js':
        return 'green';
      case 'github':
        return 'gray';
      case 'git':
        return 'orange';
      case 'postgresql':
        return 'purple';
      case 'mysql':
        return 'blue';
      case 'mongo':
        return 'green';
      case 'redis':
        return 'red';
      case 'docker':
        return 'blue';
      case 'nginx':
        return 'green';
      case 'not relesead yet':
        return 'red';
      default:
        return 'white';
    }
  }, [text]);

  return (
    <Badge py="5px" px="10px" colorScheme={color}>
      {text}
    </Badge>
  );
};

export default ProjectTag;
