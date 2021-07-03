import styled from 'styled-components';

interface IProps {
  size?: number;
  color?: string;
}

export const Container = styled.div<IProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${({ size }) => size || 10}px;
  border: 2px solid ${({ color }) => color || '#ffffff'};
  border-radius: 50%;
`;
