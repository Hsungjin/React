import { collection, doc, writeBatch } from 'firebase/firestore';

import Button from '@shared/Button';

import { store } from '@remote/firebase';
import { adBanners } from '@mock/data.ts';
import { COLLECTIONS } from '@/constants';

function AddBannerListButton() {
  const handleButtonClick = async () => {
    const batch = writeBatch(store);

    adBanners.forEach((banner) => {
      const docRef = doc(collection(store, COLLECTIONS.ADBANNER));

      batch.set(docRef, banner);
    });

    await batch.commit();

    alert('배너 리스트 추가완료!');
  };

  return (
    <div>
      <Button onClick={handleButtonClick}>배너 리스트 추가하기</Button>
    </div>
  );
}

export default AddBannerListButton;
