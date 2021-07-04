import React from 'react';

import Step from '../../Atoms/Step';
import Project from '../../Molecules/Project';

const Projects: React.FC = () => {
  return (
    <Step>
      <Project
        alt_image="Wellets"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi temporibus veniam necessitatibus hic delectus animi nobis obcaecati dolor eos ea et rem voluptas, nostrum minus, possimus sequi, reiciendis quos nulla."
        image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.NJlwxtpILDvuubb-jFi70AHaFh%26pid%3DApi&f=1"
        techs={['ReactJS', 'NodeJS', 'GraphQL']}
      />
    </Step>
  );
};

export default Projects;
