import styled, { keyframes } from 'styled-components';
import { Heading } from '@chakra-ui/react';

interface IProps {
  text: string;
}

const glitch = keyframes`
  2%,64%{
    transform: translate(2px,0) skew(0deg);
  }
  4%,60%{
    transform: translate(-2px,0) skew(0deg);
  }
  62%{
    transform: translate(0,0) skew(5deg); 
  }
`;

const glitchTop = keyframes`
  2%,64%{
    transform: translate(2px,-2px);
  }
  4%,60%{
    transform: translate(-2px,2px);
  }
  62%{
    transform: translate(13px,-1px) skew(-13deg); 
  }
`;

const glitchBotom = keyframes`
  2%,64%{
    transform: translate(-2px,0);
  }
  4%,60%{
    transform: translate(-2px,0);
  }
  62%{
    transform: translate(-22px,5px) skew(21deg); 
  }

`;

export const Container = styled(Heading)<IProps>`
  animation: ${glitch} 1s linear infinite;

  &:before,
  &:after {
    content: '${({ text }) => text}';
    position: absolute;
    left: 0;
    opacity: 0.5;
    color: #a0aec0;
  }

  &:before {
    animation: ${glitchTop} 1s linear infinite;
    clip-path: polygon(0 0, 100% 0, 100% 33%, 0 33%);
  }

  &:after {
    animation: ${glitchBotom} 1.5s linear infinite;
    clip-path: polygon(0 67%, 100% 67%, 100% 100%, 0 100%);
  }
`;
