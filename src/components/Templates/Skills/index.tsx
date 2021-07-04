import React, { useMemo } from 'react';
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
  SiIonic,
} from 'react-icons/si';

import SolidityIcon from '../../Atoms/SolidityIcon';
import SkillsCircle, { ICircle } from '../../Molecules/SkillsCircle';

const Skills: React.FC = () => {
  const backend = useMemo<ICircle>(
    () => ({
      circleSize: 500,
      itemSize: 50,
      icons: [
        { icon: SiNodeDotJs, color: '#339933' },
        { icon: SiTypescript, color: '#3178C6' },
        { icon: SiGo, color: '#00ADD8' },
        { icon: SiPhp, color: '#777BB4' },
        { icon: SolidityIcon, color: '#363636' },
      ],
    }),
    [],
  );

  const frontend = useMemo<ICircle>(
    () => ({
      circleSize: 200,
      itemSize: 50,
      icons: [
        { icon: SiReact, color: '#61DAFB' },
        { icon: SiNextDotJs, color: '#000000' },
        { icon: SiIonic, color: '#3880FF' },
      ],
    }),
    [],
  );

  const devops = useMemo<ICircle>(
    () => ({
      circleSize: 350,
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

  return <SkillsCircle circles={[frontend, devops, backend]} />;
};

export default Skills;
