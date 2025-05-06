import { css } from '@emotion/react';
import { ChangeEvent, useCallback, useState } from 'react';

import Flex from '@shared/Flex';
import TextField from '@shared/TextField';
import FixedBottomButton from '@shared/FixedBottomButton';
import Spacing from '@shared/Spacing';
import { SignupFormValues } from '@/models/signup';

import validator from 'validator';

function validate(formValues: SignupFormValues) {
  const errors: Partial<SignupFormValues> = {};

  if (validator.isEmail(formValues.email) === false) {
    errors.email = '이메일 형식이 올바르지 않습니다.';
  }

  if (formValues.password.length < 8) {
    errors.password = '비밀번호는 8자 이상이어야 합니다.';
  }

  if (formValues.passwordConfirm.length < 8) {
    errors.passwordConfirm = '비밀번호는 8자 이상이어야 합니다.';
  } else if (
    validator.equals(formValues.password, formValues.passwordConfirm) === false
  ) {
    errors.passwordConfirm = '비밀번호가 일치하지 않습니다.';
  }

  if (formValues.name.length < 2) {
    errors.name = '이름은 2자 이상이어야 합니다.';
  }

  return errors;
}

function SignupForm({ onSubmit }: { onSubmit: (formValues: SignupFormValues) => void }) {
  const [formValues, setFormValues] = useState<SignupFormValues>({
    email: '',
    password: '',
    passwordConfirm: '',
    name: '',
  });

  const [dirty, setDirty] = useState<Partial<SignupFormValues>>({});

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setFormValues({ ...formValues, [name]: value });
    },
    [formValues]
  );

  const handleBlur = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const { name } = e.target;
      setDirty({ ...dirty, [name]: true });
    },
    [dirty]
  );

  const errors = validate(formValues);

  const isSubmitable = Object.keys(errors).length === 0;

  return (
    <Flex direction="column" css={formContainerStyles}>
      <TextField
        label="이메일"
        name="email"
        placeholder="abc@example.com"
        value={formValues.email}
        onChange={handleChange}
        hasError={errors.email !== undefined && Boolean(dirty.email)}
        helpMessage={errors.email}
        onBlur={handleBlur}
      />
      <Spacing size={16} direction="vertical" />
      <TextField
        label="패스워드"
        name="password"
        type="password"
        value={formValues.password}
        onChange={handleChange}
        hasError={errors.password !== undefined && Boolean(dirty.password)}
        helpMessage={errors.password}
        onBlur={handleBlur}
      />
      <Spacing size={16} direction="vertical" />
      <TextField
        label="패스워드 재확인"
        name="passwordConfirm"
        type="password"
        value={formValues.passwordConfirm}
        onChange={handleChange}
        hasError={errors.passwordConfirm !== undefined && Boolean(dirty.passwordConfirm)}
        helpMessage={errors.passwordConfirm}
        onBlur={handleBlur}
      />
      <Spacing size={16} direction="vertical" />
      <TextField
        label="이름"
        name="name"
        placeholder="홍길동"
        value={formValues.name}
        onChange={handleChange}
        hasError={errors.name !== undefined && Boolean(dirty.name)}
        helpMessage={errors.name}
        onBlur={handleBlur}
      />

      <FixedBottomButton
        label="회원가입"
        onClick={() => {
          onSubmit(formValues);
        }}
        disabled={!isSubmitable}
      />
    </Flex>
  );
}

const formContainerStyles = css`
  padding: 24px;
`;

export default SignupForm;
