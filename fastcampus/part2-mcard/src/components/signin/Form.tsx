import Flex from '@shared/Flex';
import TextField from '@shared/TextField';
import Spacing from '@shared/Spacing';
import Button from '@shared/Button';
import Text from '@shared/Text';

import { useCallback, useMemo, useState } from 'react';
import { css } from '@emotion/react';
import { Link } from 'react-router-dom';
import { colors } from '@/styles/colorPalette';
import validator from 'validator';
import { SigninFormValues } from '@/models/signin';

function SigninForm({ onSubmit }: { onSubmit: (formValues: SigninFormValues) => void }) {
  const [formValues, setFormValues] = useState({
    email: '',
    password: '',
  });

  const handelChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormValues({ ...formValues, [e.target.name]: e.target.value });
    },
    [formValues]
  );

  const errors = useMemo(() => validate(formValues), [formValues]);

  const isPossibleSubmit = Object.keys(errors).length === 0;

  const handleSubmit = useCallback(() => {
    onSubmit(formValues);
  }, [formValues, onSubmit]);

  return (
    <Flex direction="column" css={formContainerStyles}>
      <TextField
        label="이메일"
        name="email"
        value={formValues.email}
        onChange={handelChange}
        placeholder="abc@example.com"
      />
      <Spacing size={16} />
      <TextField
        label="비밀번호"
        name="password"
        value={formValues.password}
        onChange={handelChange}
        placeholder="********"
        type="password"
      />
      <Spacing size={32} />
      <Button size="medium" disabled={!isPossibleSubmit} onClick={handleSubmit}>
        로그인
      </Button>

      <Spacing size={16} />
      <Link to="/signup" css={linkStyles}>
        <Text typography="t7">아직 계정이 없으신가요?</Text>
      </Link>
    </Flex>
  );
}

function validate(formValues: SigninFormValues) {
  const errors: Partial<SigninFormValues> = {};

  if (validator.isEmail(formValues.email) === false) {
    errors.email = '이메일 형식이 올바르지 않습니다.';
  }

  if (formValues.password.length < 8) {
    errors.password = '비밀번호는 8자 이상이어야 합니다.';
  }

  return errors;
}

const formContainerStyles = css`
  padding: 24px;
`;

const linkStyles = css`
  text-align: center;

  & > span:hover {
    color: ${colors.blue};
  }
`;

export default SigninForm;
