import styled, { css } from 'styled-components';

interface IProps {
  itemCount: number;
  circleSize: number;
  itemSize: number;
}

const calcRotate = ({ circleSize, itemCount }: IProps) => {
  let styles = '';
  let rot = 0;
  const angle = 360 / itemCount;

  for (let i = 1; i <= itemCount; ++i) {
    styles += css`
      &:nth-of-type(${i}) {
        transform: rotate(${rot}deg) translate(${circleSize / 2}px)
          rotate(${rot * -1}deg);
      }
    `;
    rot += angle;
  }

  return styles.replace(/,/g, '');
};

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div<IProps>`
  position: absolute;
  padding: 0;
  width: ${({ circleSize }) => circleSize}px;
  height: ${({ circleSize }) => circleSize}px;
  border-radius: 50%;
  border: 1px dotted #4a5568;

  svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transition: 0.15s;
    width: ${({ itemSize }) => itemSize}px;
    height: ${({ itemSize }) => itemSize}px;
    margin: ${({ itemSize }) => (itemSize / 2) * -1}px;

    ${props => calcRotate(props)}
  }
`;
