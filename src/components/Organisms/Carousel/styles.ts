import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: scale(1.3);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Control = styled.div`
  position: absolute;
  z-index: 100;
  cursor: pointer;
  transition-duration: 0.25s;
  user-select: none;

  span {
    position: relative;
  }

  &:hover {
    transform: scale(1.2);
  }
`;

export const Forward = styled(Control)`
  right: 0;
`;

export const Backward = styled(Control)`
  left: 0;
`;

export const Slide = styled.div`
  width: 100%;

  > div {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    animation-name: ${fadeIn};
    animation-duration: 0.5s;
    animation-fill-mode: forwards;
  }
`;
