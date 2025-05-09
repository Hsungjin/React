import { createPortal } from 'react-dom';

import { css, keyframes } from '@emotion/react';
import styled from '@emotion/styled';

import Button from '@components/shared/Button';
import { colors } from '@/styles/colorPalette';

interface FixedBottomButtonProps {
  label: string;
  onClick: () => void;
  disabled?: boolean;
}

function FixedBottomButton({
  label,
  onClick,
  disabled,
}: FixedBottomButtonProps) {
  const $portal = document.getElementById('root-portal');

  if ($portal == null) {
    return null;
  }

  return createPortal(
    <Container>
      <Button
        size="medium"
        full={true}
        onClick={onClick}
        css={buttonStyle}
        disabled={disabled}
      >
        {label}
      </Button>
    </Container>,
    $portal
  );
}

const slideUp = keyframes`
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
`;

const Container = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${colors.white};
  padding: 20px;
  animation: ${slideUp} 0.5s ease-in-out forwards;
`;

const buttonStyle = css`
  border-radius: 8px;
`;

export default FixedBottomButton;
