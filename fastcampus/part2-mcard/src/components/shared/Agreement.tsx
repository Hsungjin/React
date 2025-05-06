import Flex from '@/components/shared/Flex';
import Text from '@/components/shared/Text';
import { colors } from '@/styles/colorPalette';

import { css } from '@emotion/react';

function Agreement({ children }: { children: React.ReactNode }) {
  return (
    <Flex as="ul" direction="column" css={agreementContainerStyles}>
      {children}
    </Flex>
  );
}

function AgreementTitle({
  children,
  checked,
  onChange,
}: {
  children: React.ReactNode;
  checked: boolean;
  onChange: (event: React.MouseEvent<HTMLDivElement>, checked: boolean) => void;
}) {
  return (
    <Flex
      as="li"
      onClick={(event) => {
        onChange(event, !checked);
      }}
    >
      <IconCheck checked={checked} />
      <Text typography="t3" bold={true}>
        {children}
      </Text>
    </Flex>
  );
}

function AgreementDescription({
  children,
  checked,
  onChange,
  link,
}: {
  children: React.ReactNode;
  checked: boolean;
  onChange: (event: React.MouseEvent<HTMLDivElement>, checked: boolean) => void;
  link?: string;
}) {
  return (
    <Flex as="li">
      <Flex onClick={(event) => onChange(event, !checked)}>
        <IconCheck checked={checked} />
        <Text typography="t6" bold={true}>
          {children}
        </Text>
      </Flex>
      {link && (
        <a href={link} target="_blank" rel="noreferrer">
          <Text typography="t6" bold={true}>
            약관 보기
          </Text>
        </a>
      )}
    </Flex>
  );
}

const agreementContainerStyles = css`
  padding: 24px;

  & li {
    cursor: pointer;
  }
`;

function IconCheck({
  checked,
  withCircle = false,
}: {
  checked: boolean;
  withCircle?: boolean;
}) {
  return (
    <svg
      height="24"
      version="1.1"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g transform="translate(0 -1028.4)">
        {withCircle && (
          <path
            d="m22 12c0 5.523-4.477 10-10 10-5.5228 0-10-4.477-10-10 0-5.5228 4.4772-10 10-10 5.523 0 10 4.4772 10 10z"
            fill={checked ? colors.blue : colors.gray}
            transform="translate(0 1029.4)"
          />
        )}

        <path
          d="m22 12c0 5.523-4.477 10-10 10-5.5228 0-10-4.477-10-10 0-5.5228 4.4772-10 10-10 5.523 0 10 4.4772 10 10z"
          fill={checked ? colors.blue : colors.gray}
          transform="translate(0 1028.4)"
        />

        <path
          d="m16 1037.4-6 6-2.5-2.5-2.125 2.1 2.5 2.5 2 2 0.125 0.1 8.125-8.1-2.125-2.1z"
          fill={checked ? colors.blue : colors.gray}
        />
        <path
          d="m16 1036.4-6 6-2.5-2.5-2.125 2.1 2.5 2.5 2 2 0.125 0.1 8.125-8.1-2.125-2.1z"
          fill={checked ? colors.white : colors.white}
        />
      </g>
    </svg>
  );
}

Agreement.Title = AgreementTitle;
Agreement.Description = AgreementDescription;

export default Agreement;
