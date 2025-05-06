import { css } from '@emotion/react';
import Flex from '@shared/Flex';
import Text from '@shared/Text';

interface TopProps {
  title: string;
  subTitle: string;
}

function Top({ title, subTitle }: TopProps) {
  return (
    <Flex direction="column" css={containerStyle}>
      <Text typography="t4" bold={true}>
        {title}
      </Text>
      <Text typography="t6">{subTitle}</Text>
    </Flex>
  );
}

const containerStyle = css`
  padding: 24px;
`;

export default Top;
