import { colors } from '@/styles/colorPalette';
import styled from '@emotion/styled';

import Text from '@/components/shared/Text';

interface BadgeProps {
  label: string;
}

function Badge({ label }: BadgeProps) {
  return (
    <BadgeContainer>
      <Text bold={true} typography="t7" color="white">
        {label}
      </Text>
    </BadgeContainer>
  );
}

const BadgeContainer = styled.div`
  border-radius: 12px;
  background-color: ${colors.blue};
  padding: 4px 8px;
`;

export default Badge;
