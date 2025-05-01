import { collection, getDocs } from 'firebase/firestore';
import { store } from './firebase';
import { COLLECTIONS } from '@constants/index';
import { Card } from '@models/card';

export async function getCards() {
  const querySnapshot = await getDocs(collection(store, COLLECTIONS.CARD));
  return querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...(doc.data() as Card),
  }));
}
