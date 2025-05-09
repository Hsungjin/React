import { colors } from '@/styles/colorPalette';
import styled from '@emotion/styled';
import Dimmend from '@shared/Dimmend';
import Flex from '@shared/Flex';
import Text from '@shared/Text';
import Button from '@shared/Button';

interface AlertProps {
  open?: boolean;
  title: React.ReactNode;
  description?: React.ReactNode;
  buttonLabel?: string;
  onButtonClick: () => void;
}

function Alert({
  open,
  title,
  description,
  buttonLabel,
  onButtonClick,
}: AlertProps) {
  if (open === false) {
    return null;
  }

  return (
    <Dimmend>
      <AlertContainer>
        <Text
          typography="t4"
          bold={true}
          display="block"
          style={{ marginBottom: 6 }}
        >
          {title}
        </Text>
        {description ? <Text typography="t7">{description}</Text> : null}
        <Flex justify="flex-end">
          <Button
            onClick={onButtonClick}
            weak={true}
            style={{ marginTop: 12, border: 'none' }}
          >
            {buttonLabel}
          </Button>
        </Flex>
      </AlertContainer>
    </Dimmend>
  );
}

const AlertContainer = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: ${colors.white};
  overflow: hidden;
  z-index: var(--alert-z-index);
  width: 300px;
  padding: 20px;
  box-sizing: border-box;
  border-radius: 10px;
  text-align: left;
`;

export default Alert;
