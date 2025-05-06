import {
  collection,
  getDocs,
  QuerySnapshot,
  query,
  limit,
  startAfter,
  doc,
  getDoc,
} from 'firebase/firestore';
import { store } from './firebase';
import { COLLECTIONS } from '@constants/index';
import { Card } from '@models/card';

export async function getCards(pageParam?: QuerySnapshot<Card>) {
  const cardsQuery =
    pageParam == null
      ? await query(collection(store, COLLECTIONS.CARD), limit(10))
      : await query(
          collection(store, COLLECTIONS.CARD),
          startAfter(pageParam),
          limit(10)
        );

  const querySnapshot = await getDocs(cardsQuery);
  const lastVisible = querySnapshot.docs[querySnapshot.docs.length - 1];

  const items = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...(doc.data() as Card),
  }));

  return {
    items,
    lastVisible,
  };
}


export async function getCard(id: string) {
  const sanpshot = await getDoc(doc(store, COLLECTIONS.CARD, id))
  
  return {
    id: sanpshot.id,
    ...(sanpshot.data() as Card),
  }
}

