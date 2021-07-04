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
  SiElectron,
  SiPostgresql,
  SiMysql,
  SiMongodb,
} from 'react-icons/si';

import SolidityIcon from '../../Atoms/SolidityIcon';
import SkillsCircle, { ICircle } from '../../Molecules/SkillsCircle';

const Skills: React.FC = () => {
  const frontend = useMemo<ICircle>(
    () => ({
      circleSize: 200,
      itemSize: 50,
      icons: [
        { icon: SiNextDotJs, color: '#fff' },
        { icon: SiElectron, color: '#47848F' },
        { icon: SiReact, color: '#61DAFB' },
      ],
    }),
    [],
  );

  const backend = useMemo<ICircle>(
    () => ({
      circleSize: 350,
      itemSize: 50,
      icons: [
        { icon: SiPhp, color: '#777BB4' },
        { icon: SolidityIcon, color: '#363636' },
        { icon: SiGo, color: '#00ADD8' },
        { icon: SiNodeDotJs, color: '#339933' },
        { icon: SiTypescript, color: '#3178C6' },
      ],
    }),
    [],
  );

  const devops = useMemo<ICircle>(
    () => ({
      circleSize: 500,
      itemSize: 50,
      icons: [
        { icon: SiDocker, color: '#2496ED' },
        { icon: SiNginx, color: '#009639' },
        { icon: SiGithub, color: '#fff' },
        { icon: SiGit, color: '#F05032' },
        { icon: SiPostgresql, color: '#4169E1' },
        { icon: SiMysql, color: '#4479A1' },
        { icon: SiMongodb, color: '#47A248' },
      ],
    }),
    [],
  );

  return <SkillsCircle circles={[frontend, backend, devops]} />;
};

export default Skills;
