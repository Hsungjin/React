import {
  collection,
  doc,
  getDoc,
  getDocs,
  orderBy,
  query,
  setDoc,
} from 'firebase/firestore'

import { store } from './firebase'
import { COLLECTIONS } from '../constants'
import type { Review } from '@/models/review'
import type { User } from 'firebase/auth'

export async function getReviews({ hotelId }: { hotelId: string }) {
  const hotelRef = doc(store, COLLECTIONS.HOTEL, hotelId)
  const reviewQuery = query(
    collection(hotelRef, COLLECTIONS.REVIEW),
    orderBy('createdAt', 'desc'),
  )

  const reviewSnapshot = await getDocs(reviewQuery)

  const reviews = reviewSnapshot.docs.map((doc) => {
    const review = doc.data()

    return {
      id: doc.id,
      ...review,
      createdAt: review.createdAt.toDate() as Date,
    } as Review
  })

  const userMap: {
    [key: string]: User
  } = {}

  const results: Array<Review & { user: User }> = []

  for (const review of reviews) {
    const 캐시된유저 = userMap[review.userId]

    if (캐시된유저 == null) {
      const userSnapshot = await getDoc(
        doc(collection(store, COLLECTIONS.USER), review.userId),
      )

      const user = userSnapshot.data() as User

      userMap[review.userId] = user
      results.push({
        ...review,
        user,
      })
    } else {
      results.push({
        ...review,
        user: 캐시된유저,
      })
    }
  }

  return results
}

export function writeReview(review: Omit<Review, 'id'>) {
  const hotelRef = doc(store, COLLECTIONS.HOTEL, review.hotelId)
  const reviewRef = doc(collection(hotelRef, COLLECTIONS.REVIEW))

  return setDoc(reviewRef, review)
}
