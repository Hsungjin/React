import {
  query,
  collection,
  where,
  orderBy,
  getDocs,
  deleteDoc,
  writeBatch,
  setDoc,
  doc,
  limit,
} from 'firebase/firestore'

import { store } from './firebase'
import { COLLECTIONS } from '@/constants'
import type { Like } from '@/models/like'
import type { Hotel } from '@/models/hotel'

export async function getLikes({ userId }: { userId: string }) {
  const snapshot = await getDocs(
    query(
      collection(store, COLLECTIONS.LIKE),
      where('userId', '==', userId),
      orderBy('order', 'asc'),
    ),
  )

  return snapshot.docs.map(
    (doc) =>
      ({
        id: doc.id,
        ...doc.data(),
      }) as Like,
  )
}

export async function toggleLike({
  hotel,
  userId,
}: {
  hotel: Pick<Hotel, 'name' | 'id' | 'nameImageUrl'>
  userId: string
}) {
  const findSnapshot = await getDocs(
    query(
      collection(store, COLLECTIONS.LIKE),
      where('userId', '==', userId),
      where('hotelId', '==', hotel.id),
    ),
  )

  if (findSnapshot.docs.length > 0) {
    const removeTarget = findSnapshot.docs[0]
    const removeTargetOrder = removeTarget.data().order

    const updateTargetSnapshot = await getDocs(
      query(
        collection(store, COLLECTIONS.LIKE),
        where('userId', '==', userId),
        where('order', '>', removeTargetOrder),
      ),
    )

    if (updateTargetSnapshot.empty) {
      return deleteDoc(removeTarget.ref)
    } else {
      const batch = writeBatch(store)

      updateTargetSnapshot.docs.forEach((doc) => {
        const data = doc.data()
        batch.update(doc.ref, {
          order: data.order - 1,
        })
      })

      await batch.commit()

      return deleteDoc(removeTarget.ref)
    }
  } else {
    const lastLikeSnapshot = await getDocs(
      query(
        collection(store, COLLECTIONS.LIKE),
        where('userId', '==', userId),
        orderBy('order', 'desc'),
        limit(1),
      ),
    )

    const lastOrder =
      lastLikeSnapshot.docs.length > 0
        ? lastLikeSnapshot.docs[0].data().order
        : 0

    const newLike = {
      order: lastOrder + 1,
      hotelId: hotel.id,
      hotelName: hotel.name,
      hotelMainImageUrl: hotel.nameImageUrl,
      userId,
    }

    return setDoc(doc(collection(store, COLLECTIONS.LIKE)), newLike)
  }
}

export async function updateOrder(likes: Like[]) {
  const batch = writeBatch(store)

  likes.forEach((like, index) => {
    batch.update(doc(collection(store, COLLECTIONS.LIKE), like.id), {
      order: index + 1,
    })
  })

  await batch.commit()
}