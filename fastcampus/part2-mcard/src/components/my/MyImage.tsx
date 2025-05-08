import useUser from '@hooks/auth/useUser';
import styled from '@emotion/styled';
import { colors } from '@/styles/colorPalette';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { getAuth, updateProfile } from 'firebase/auth';
import { app, store, storage } from '@/remote/firebase';
import { ChangeEvent } from 'react';
import { collection, doc, updateDoc } from 'firebase/firestore';
import { COLLECTIONS } from '@/constants';

import useUserStore from '../../stores/user';

function MyImage({
  size = 40,
  mode = 'default',
}: {
  size?: number;
  mode?: 'default' | 'upload';
}) {
  const user = useUser().user;
  const setUser = useUserStore((state) => state.setUser);

  const handleUploadImage = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    const currentUser = getAuth(app).currentUser;

    if (file == null || user == null || currentUser == null) {
      return;
    }

    const path = `users/${user.uid}/${file.name}`;

    const storageRef = ref(storage, path);
    const uploadTask = await uploadBytes(storageRef, file);

    const downloadURL = await getDownloadURL(uploadTask.ref);

    await updateProfile(currentUser, {
      photoURL: downloadURL,
    });

    await updateDoc(doc(collection(store, COLLECTIONS.USER), currentUser.uid), {
      photoURL: downloadURL,
    });

    setUser({
      ...user,
      photoURL: downloadURL,
    });
  };

  return (
    <Container>
      <img
        src={
          user?.photoURL ||
          'https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-128.png'
        }
        alt="유저의 이미지"
        width={size}
        height={size}
      />
      {mode === 'upload' && (
        <input type="file" accept="image/*" onChange={handleUploadImage} />
      )}
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  display: inline-block;
  cursor: pointer;

  & img {
    border-radius: 100%;
    background-color: ${colors.gray};
  }

  & input[type='file'] {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    cursor: pointer;
  }
`;

export default MyImage;
