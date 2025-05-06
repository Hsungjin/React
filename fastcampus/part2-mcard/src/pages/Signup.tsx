import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { setDoc, doc, collection } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

import { auth } from '@remote/firebase';

import { SignupFormValues } from '@/models/signup';
import Form from '@components/signup/Form';
import { COLLECTIONS } from '@/constants';
import { store } from '@remote/firebase';

function SignupPage() {
  const navigate = useNavigate();

  const handleSubmit = async (formValues: SignupFormValues) => {
    const { email, password, name } = formValues;

    const { user } = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    await updateProfile(user, {
      displayName: name,
    });

    const newUser = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
    };

    await setDoc(doc(collection(store, COLLECTIONS.USER), user.uid), newUser);

    navigate('/');
  };

  return (
    <div>
      <Form onSubmit={handleSubmit} />
    </div>
  );
}

export default SignupPage;
