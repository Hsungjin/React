import { css } from '@emotion/react';

export const colorPalette = css`
  :root {
    --red: #f44336;
    --blue: #2196f3;
    --green: #4caf50;
    --white: #ffffff;
    --black: #000000;
    --gray:rgb(210, 209, 209);
    --orange: #ff9800;
    --purple: #9c27b0;
    --pink: #e91e63;
  }
`;

export const colors = {
  red: 'var(--red)',
  blue: 'var(--blue)',
  green: 'var(--green)',
  white: 'var(--white)',
  black: 'var(--black)',
  gray: 'var(--gray)',
  orange: 'var(--orange)',
};

export type Colors = keyof typeof colors;
