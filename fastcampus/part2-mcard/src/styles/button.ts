import { css } from '@emotion/react';
import { colors } from './colorPalette';

export const buttonColorMap = {
  primary: css`
    background-color: ${colors.blue};
    color: ${colors.white};
  `,

  success: css`
    background-color: ${colors.green};
    color: ${colors.white};
  `,

  error: css`
    background-color: ${colors.red};
    color: ${colors.white};
  `,
};

export const buttonWeakMap = {
  primary: css`
    background-color: ${colors.white};
    color: ${colors.blue};
    border: 1px solid ${colors.blue};
  `,

  success: css`
    background-color: ${colors.white};
    color: ${colors.green};
    border: 1px solid ${colors.green};
  `,

  error: css`
    background-color: ${colors.white};
    color: ${colors.red};
    border: 1px solid ${colors.red};
  `,
};

export const buttonSizeMap = {
  small: css`
    font-size: 12px;
    padding: 8px 16px;
  `,

  medium: css`
    font-size: 14px;
    padding: 16px 24px;
  `,

  large: css`
    font-size: 16px;
    padding: 24px 32px;
  `,
};

export type ButtonColor = keyof typeof buttonColorMap;
export type ButtonWeak = keyof typeof buttonWeakMap;
export type ButtonSize = keyof typeof buttonSizeMap;
