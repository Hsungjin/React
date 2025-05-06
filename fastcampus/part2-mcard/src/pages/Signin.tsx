import SigninForm from '@/components/signin/Form';

import { SigninFormValues } from '@/models/signin';
import { useCallback } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@remote/firebase';
import { useAlertContext } from '@/contexts/AlertContext';
import { FirebaseError } from 'firebase/app';
import { useNavigate } from 'react-router-dom';
function SigninPage() {
  const { open } = useAlertContext();
  const navigate = useNavigate();

  const handleSubmit = useCallback(async (formValues: SigninFormValues) => {
    const { email, password } = formValues;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/');
    } catch (error) {
      if (error instanceof FirebaseError) {
        if (error.code === 'auth/wrong-password') {
          open({
            title: '이메일 또는 비밀번호가 올바르지 않습니다.',
            onButtonClick: () => {
              console.log('button clicked');
            },
          });
          return;
        }
      }

      // 일반적인 에러
      open({
        title: '로그인에 실패했습니다.',
        onButtonClick: () => {
          console.log('button clicked');
        },
      });
    }
  }, []);
  return (
    <div>
      <SigninForm onSubmit={handleSubmit} />
    </div>
  );
}

export default SigninPage;
