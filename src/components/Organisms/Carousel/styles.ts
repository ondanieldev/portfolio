import styled, { keyframes, css } from 'styled-components';

interface IControlProps {
  isMobile?: boolean;
}

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

export const Container = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Control = styled.div<IControlProps>`
  top: 0;
  height: 100%;
  display: flex;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.1);
  position: absolute;
  z-index: 100;
  cursor: pointer;
  transition-duration: 0.25s;
  user-select: none;

  ${({ isMobile }) =>
    isMobile &&
    css`
      bottom: -50px;
    `}

  span {
    position: relative;
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.5);
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
