import React from 'react';
import { Flex, Heading } from '@chakra-ui/react';

import Project from '../../Molecules/Project';
import Carousel from '../../Organisms/Carousel';

const Projects: React.FC = () => {
  return (
    <Flex direction="column" align="center">
      <Heading as="h2" mb="25px">
        Projects
      </Heading>

      <Carousel>
        <Project
          alt_image="Wellets"
          description="Wellets is a financial management website that helps users to manage their money placed in multiple portfolios. It was developed with a focus on users engaged in the crypto world. These users usually have money on their bank accounts, exchanges, blockchain wallets and stuff like that. As there are a lots of places to put their money, it is easy to gets confused with their own money. To avoid that, Wellets currently provide wallet and currency management features to help users control their money with more accurately."
          image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.NJlwxtpILDvuubb-jFi70AHaFh%26pid%3DApi&f=1"
          techs={['ReactJS', 'NodeJS', 'GraphQL']}
        />
        <Project
          alt_image="Outro"
          description="2"
          image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.NJlwxtpILDvuubb-jFi70AHaFh%26pid%3DApi&f=1"
          techs={['PHP', 'Python', 'GraphQL']}
        />
        <Project
          alt_image="Outro"
          description="3"
          image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.NJlwxtpILDvuubb-jFi70AHaFh%26pid%3DApi&f=1"
          techs={['PHP', 'Python', 'GraphQL']}
        />
      </Carousel>
    </Flex>
  );
};

export default Projects;
