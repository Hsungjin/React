import { collection, doc, writeBatch } from 'firebase/firestore';

import Button from '@shared/Button';

import { store } from '@remote/firebase';
import { card_list } from '@mock/data.ts';
import { COLLECTIONS } from '@/constants';

function CardListAddButton() {
  const handleButtonClick = async () => {
    const batch = writeBatch(store);

    card_list.forEach((card) => {
      const docRef = doc(collection(store, COLLECTIONS.CARD));

      batch.set(docRef, card);
    });

    await batch.commit();

    alert('카드 리스트 추가완료!');
  };

  return (
    <div>
      <Button onClick={handleButtonClick}>카드리스트 추가하기</Button>
    </div>
  );
}

export default CardListAddButton;
