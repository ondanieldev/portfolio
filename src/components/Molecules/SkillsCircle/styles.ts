import styled, {
  css,
  FlattenInterpolation,
  keyframes,
  ThemeProps,
} from 'styled-components';

interface IProps {
  itemCount: number;
  circleSize: number;
  itemSize: number;
  isMobile?: boolean;
}

interface IWrapperProps {
  size: number;
  isMobile?: boolean;
}

interface IPlanetProps extends IProps {
  currentItem: number;
}

interface IInitialPosition {
  rotate: number;
  translate: number;
}

const planetRotation = ({ rotate, translate }: IInitialPosition) => {
  const newRotate = 360 + rotate;

  return keyframes`
    from {
      transform: rotate(${rotate}deg) translate($translate}px) rotate(${-rotate}deg);
    }
    to {
      transform: rotate(${newRotate}deg) translate(${translate}px) rotate(${-newRotate}deg);
    }
  `;
};

const calcInitialPosition = ({
  circleSize,
  itemCount,
  currentItem,
}: IPlanetProps): IInitialPosition => {
  const angle = 360 / itemCount;
  const rotate = (currentItem - 1) * angle;
  const translate = circleSize / 2;

  return { rotate, translate };
};

const calcStyles = ({ circleSize, itemCount, itemSize }: IProps) => {
  const styles = [] as FlattenInterpolation<ThemeProps<any>>[];

  for (let i = 1; i <= itemCount; ++i) {
    const { rotate, translate } = calcInitialPosition({
      circleSize,
      itemCount,
      itemSize,
      currentItem: i,
    });

    const style = css`
      &:nth-of-type(${i}) {
        transform: rotate(${rotate}deg) translate(${translate}px)
          rotate(${-rotate}deg);
        animation: ${() => planetRotation({ rotate, translate })}
          ${(circleSize * 20) / 100}s linear infinite;
      }
    `;

    styles.push(style);
  }

  return styles;
};

export const Wrapper = styled.div<IWrapperProps>`
  width: 100%;
  height: ${({ size }) => size}px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  ${({ isMobile }) =>
    isMobile &&
    css`
      flex-direction: column;
      height: 100%;
    `}
`;

export const Container = styled.div<IProps>`
  position: absolute;
  padding: 0;
  width: ${({ circleSize }) => circleSize}px;
  height: ${({ circleSize }) => circleSize}px;
  border-radius: 50%;
  border: 1px dotted #4a5568;

  ${({ isMobile }) =>
    isMobile &&
    css`
      position: relative;

      & + div {
        margin-top: 75px;
      }
    `}

  svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transition: 0.15s;
    width: ${({ itemSize }) => itemSize}px;
    height: ${({ itemSize }) => itemSize}px;
    margin: ${({ itemSize }) => (itemSize / 2) * -1}px;

    ${props => calcStyles(props)}
  }
`;
