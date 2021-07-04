import React from 'react';
import { Heading } from '@chakra-ui/react';

import Step from '../../Atoms/Step';
import SkillsCircle from '../../Molecules/SkillsCircle';

const Skills: React.FC = () => {
  return (
    <Step>
      <Heading as="h2" lineHeight="0px">
        Skills
      </Heading>

      <SkillsCircle />
    </Step>
  );
};

export default Skills;
