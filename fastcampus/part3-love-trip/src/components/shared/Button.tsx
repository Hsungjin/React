import {
  ButtonColor,
  ButtonSize,
  buttonColorMap,
  buttonSizeMap,
  buttonWeakMap,
} from '@styles/button';

import styled from '@emotion/styled';
import { css } from '@emotion/react';
import Flex from '@shared/Flex';
import Text from '@shared/Text';
import Spacing from './Spacing';
interface ButtonProps {
  color?: ButtonColor;
  size?: ButtonSize;
  weak?: boolean;
  full?: boolean;
  disabled?: boolean;
}

const BaseButton = styled.button<ButtonProps>(
  {
    cursor: 'pointer',
    fontWeight: 'bold',
    borderRadius: '6px',
  },
  ({ color = 'primary', weak }) =>
    weak ? buttonWeakMap[color] : buttonColorMap[color],
  ({ size = 'small' }) => buttonSizeMap[size],
  ({ full }) =>
    full
      ? css`
          display: block;
          width: 100%;
          border-radius: 0;
        `
      : undefined,
  ({ disabled }) =>
    disabled
      ? css`
          opacity: 0.25;
          cursor: not-allowed;
        `
      : undefined
);

function ButtonGroup({
  title,
  children,
}: {
  title?: string;
  children: React.ReactNode;
}) {
  return (
    <Flex direction="column">
      {title && (
        <Text typography="t6" bold>
          {title}
        </Text>
      )}
      <Spacing size={8} />
      <Flex css={buttonGroupStyle}>{children}</Flex>
    </Flex>
  );
}

const buttonGroupStyle = css`
  flex-wrap: wrap;
  gap: 10px;

  & button {
    flex: 1;
  }
`;

// <Button.ButtonGroup>
//   <Button>Button</Button>
//   <Button>Button</Button>
// </Button.ButtonGroup>

const Button = BaseButton as typeof BaseButton & {
  Group: typeof ButtonGroup;
};

Button.Group = ButtonGroup;

export default Button;
