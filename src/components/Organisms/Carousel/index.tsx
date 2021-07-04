import React, { useCallback, useState } from 'react';
import { Icon } from '@chakra-ui/react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

import { Forward, Backward, Container, Slide } from './styles';

const Carousel: React.FC = ({ children }) => {
  const [current, setCurrent] = useState(0);

  const handleBackward = useCallback(() => {
    if (!Array.isArray(children)) {
      return;
    }

    if (current === 0) {
      setCurrent(children.length - 1);
      return;
    }

    setCurrent(current - 1);
  }, [children, current]);

  const handleForward = useCallback(() => {
    if (!Array.isArray(children)) {
      return;
    }

    if (current === children.length - 1) {
      setCurrent(0);
      return;
    }

    setCurrent(current + 1);
  }, [children, current]);

  return (
    <Container>
      <Backward onClick={handleBackward}>
        <Icon as={FaAngleLeft} boxSize={25} />
      </Backward>

      <Slide>
        <div key={current}>{children[current] || children || <></>}</div>
      </Slide>

      <Forward onClick={handleForward}>
        <Icon as={FaAngleRight} boxSize={25} />
      </Forward>
    </Container>
  );
};

export default Carousel;
