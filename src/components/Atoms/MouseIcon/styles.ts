import styled, { keyframes } from 'styled-components';

const updown = keyframes`
  0% {
    -webkit-transform: translate(0, 0);
    transform: translate(0, 0);
  }
  50% {
    -webkit-transform: translate(0, 5px);
    transform: translate(0, 5px);
  }
  100% {
    -webkit-transform: translate(0, 0);
    transform: translate(0, 0);
  }
`;

export const Container = styled.div`
  position: fixed;
  left: 50%;
  bottom: 30px;
  width: 40px;
  height: 40px;
  margin-left: -20px;
  padding-left: 7px;
  cursor: pointer;
  z-index: 100;
  box-sizing: border-box;
`;

export const Mouse = styled.svg`
  width: 25px;
  opacity: 1;
  transition: opacity 0.5s;
`;

export const Stroke = styled.path`
  stroke: #a0aec0;
`;

export const Scroller = styled.path`
  fill: #a0aec0;
  animation: ${updown} 1s infinite;
`;
