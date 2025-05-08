import { ApplyValues } from '@/models/apply';
import {
  collection,
  addDoc,
  query,
  where,
  getDocs,
  updateDoc,
} from 'firebase/firestore';
import { store } from './firebase';
import { COLLECTIONS } from '@/constants';

export async function applyCard(applyValues: ApplyValues) {
  return await addDoc(collection(store, COLLECTIONS.CARD_APPLY), applyValues);
}

export async function updateApplyCard({
  cardId,
  userId,
  applyValues,
}: {
  cardId: string;
  userId: string;
  applyValues: Partial<ApplyValues>;
}) {
  const snapshot = query(
    collection(store, COLLECTIONS.CARD_APPLY),
    where('cardId', '==', cardId),
    where('userId', '==', userId)
  );

  const querySnapshot = await getDocs(snapshot);

  if (querySnapshot.empty) {
    throw new Error('카드 신청 정보를 찾을 수 없습니다.');
  }

  const [applied] = querySnapshot.docs;

  await updateDoc(applied.ref, applyValues);
}

export async function getAppliedCard({
  userId,
  cardId,
}: {
  userId: string;
  cardId: string;
}) {
  const snapshot = query(
    collection(store, COLLECTIONS.CARD_APPLY),
    where('userId', '==', userId),
    where('cardId', '==', cardId)
  );

  const querySnapshot = await getDocs(snapshot);

  if (querySnapshot.docs.length === 0) {
    return null;
  }

  const [applied] = querySnapshot.docs;

  return applied.data() as ApplyValues;
}
