import { doc, getDocs, collection, getDoc } from 'firebase/firestore'

import { store } from './firebase'
import { COLLECTIONS } from '@/constants'
import { type Room } from '@/models/room'

export const getRooms = async (hotelId: string) => {
  const rooms = await getDocs(
    collection(store, COLLECTIONS.HOTEL, hotelId, COLLECTIONS.ROOM),
  )
  return rooms.docs.map((doc) => ({
    id: doc.id,
    ...(doc.data() as Room),
  }))
}
