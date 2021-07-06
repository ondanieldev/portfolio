import styled, { keyframes } from 'styled-components';

const slideBlock = keyframes`
  0% {
    width: 0%;
    left: 0;

  }
  50% {
    width: 100%;
    left: 0;

  }
  100% {
    width: 0;
    left: 100%;
  }
`;

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const StackContainer = styled.div`
  position: relative;

  h1 {
    animation: ${fadeIn} 2s forwards;
    animation-delay: 1.6s;
    opacity: 0;
  }
`;

export const StackSlider = styled.span`
  width: 0%;
  height: 100%;
  background: #fff;
  position: absolute;
  animation: ${slideBlock} 2s cubic-bezier(0.74, 0.06, 0.4, 0.92) forwards;
`;
