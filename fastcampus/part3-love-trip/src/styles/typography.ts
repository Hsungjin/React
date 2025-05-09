import { css } from '@emotion/react';

export const typographyMap = {
  t1: css`
    font-size: 30px;
    line-height: 32px;
    letter-spacing: -0.01em;
  `,
  t2: css`
    font-size: 26px;
    line-height: 28px;
    letter-spacing: -0.01em;
  `,
  t3: css`
    font-size: 22px;
    line-height: 24px;
    letter-spacing: -0.01em;
  `,
  t4: css`
    font-size: 18px;
    line-height: 20px;
    letter-spacing: -0.01em;
  `,
  t5: css`
    font-size: 14px;
    line-height: 16px;
    letter-spacing: -0.01em;
  `,
  t6: css`
    font-size: 12px;
    line-height: 14px;
    letter-spacing: -0.01em;
  `,
  t7: css`
    font-size: 10px;
    line-height: 12px;
    letter-spacing: -0.01em;
  `,
};

export type Typography = keyof typeof typographyMap;