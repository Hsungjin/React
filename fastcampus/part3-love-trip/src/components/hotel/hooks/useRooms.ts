import { useQuery, useQueryClient } from 'react-query'
import { useEffect } from 'react'
import { getRooms } from '@/remote/room'

import { onSnapshot, collection, doc } from 'firebase/firestore'
import { store } from '@remote/firebase'
import { COLLECTIONS } from '@/constants'

function useRooms({ hotelId }: { hotelId: string }) {
  const queryClient = useQueryClient()

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(store, COLLECTIONS.HOTEL, hotelId, COLLECTIONS.ROOM),
      (doc) => {
        const newRooms = doc.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))

        queryClient.setQueryData(['rooms', hotelId], newRooms)
      },
    )

    return () => {
      unsubscribe()
    }
  }, [hotelId, queryClient])

  return useQuery(['rooms', hotelId], () => getRooms(hotelId))
}

export default useRooms
