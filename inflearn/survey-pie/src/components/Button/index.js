import styled from 'styled-components';

import { PRIMARY, SECONDARY, TERTIARY } from '../../constant/color';

// function getColor(type1, type2) {
//   if (type1 === 'PRIMARY') {
//     return PRIMARY.BUTTON.DEFAULT.COLOR;
//   } else if (type1 === 'SECONDARY') {
//     return SECONDARY.BUTTON.DEFAULT.COLOR;
//   } else if (type1 === 'TERTIARY') {
//     return TERTIARY.BUTTON.DEFAULT.COLOR;
//   }

//   return;
// }

const colorMap = {
  PRIMARY,
  SECONDARY,
  TERTIARY,
};

const Button = styled.button`
  padding: 16px 24px;
  min-width: 200px;

  color: ${({ type }) => colorMap[type].BUTTON.DEFAULT.COLOR};
  background-color: ${({ type }) => colorMap[type].BUTTON.DEFAULT.BACKGROUND};
  border: none;
  border-radius: 4px;
  font-weight: bold;
  font-size: 18px;

  border: ${({ type }) =>
    type === 'TERTIARY'
      ? `1px solid ${colorMap[type].BUTTON.DEFAULT.BORDER}`
      : 'none'};

  &:hover {
    color: ${({ type }) => colorMap[type].BUTTON.HOVER.COLOR};
    background-color: ${({ type }) => colorMap[type].BUTTON.HOVER.BACKGROUND};
    border: ${({ type }) =>
      type === 'TERTIARY'
        ? `1px solid ${colorMap[type].BUTTON.HOVER.BORDER}`
        : 'none'};
  }

  &:active {
    color: ${({ type }) => colorMap[type].BUTTON.PRESSED.COLOR};
    background-color: ${({ type }) => colorMap[type].BUTTON.PRESSED.BACKGROUND};
    border: ${({ type }) =>
      type === 'TERTIARY'
        ? `1px solid ${colorMap[type].BUTTON.PRESSED.BORDER}`
        : 'none'};
  }

  &:disabled {
    color: ${({ type }) => colorMap[type].BUTTON.DISABLED.COLOR};
    background-color: ${({ type }) =>
      colorMap[type].BUTTON.DISABLED.BACKGROUND};
    border: ${({ type }) =>
      type === 'TERTIARY'
        ? `1px solid ${colorMap[type].BUTTON.DISABLED.BORDER}`
        : 'none'};
  }
`;

export default Button;
