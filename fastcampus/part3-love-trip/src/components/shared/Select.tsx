import { Option } from '@/models/apply';
import { colors } from '@/styles/colorPalette';
import styled from '@emotion/styled';
import { forwardRef } from 'react';

import Flex from '@shared/Flex';
import Text from '@shared/Text';

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  options: Option[];
  placeholder?: string;
}

const BaseSelect = styled.select`
  height: 52px;
  background-color: ${colors.gray};
  border: none;
  border-radius: 16px;
  padding: 0 16px;
  cursor: pointer;

  &:required:invalid {
    color: #9999;
  }
`;

const Select = forwardRef<HTMLSelectElement, SelectProps>(function Select(
  { label, options, placeholder, value, ...props },
  ref,
) {
  return (
    <Flex direction="column">
      <Text
        typography="t7"
        color="black"
        display="inline-block"
        style={{ marginBottom: 8 }}
      >
        {label}
      </Text>
      <BaseSelect required={true} ref={ref} value={value} {...props}>
        <option disabled={true} hidden={true} value="">
          {placeholder}
        </option>
        {options.map(({ label, value }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </BaseSelect>
    </Flex>
  );
});

export default Select;