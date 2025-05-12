import { doc, collection, writeBatch } from 'firebase/firestore'

import { store } from '@remote/firebase'
import { COLLECTIONS } from '@constants/index'

import Button from '@components/shared/Button'

import { HOTEL_NAMES, IMAGES, HOTEL, EVENTS, ROOMS } from '@/mock/data'

function random(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function HotelListAddButton() {
  const batch = writeBatch(store)

  const handleButtonClick = async () => {
    const hotels = HOTEL_NAMES.map((hotelName, idx) => {
      return {
        name: hotelName,
        nameImageUrl: IMAGES[Math.floor(Math.random() * IMAGES.length)],
        images: IMAGES,
        price: random(130000, 200000),
        starRating: random(1, 5),
        ...HOTEL,
        ...(EVENTS[idx] != null && {
          event: EVENTS[idx],
        }),
      }
    })

    hotels.forEach((hotel) => {
      const hotelDocRef = doc(collection(store, COLLECTIONS.HOTEL))
      batch.set(hotelDocRef, hotel)

      ROOMS.forEach((room) => {
        const roomDocRef = doc(collection(hotelDocRef, COLLECTIONS.ROOM))
        batch.set(roomDocRef, room)
      })
    })

    await batch.commit()
  }

  return <Button onClick={handleButtonClick}>호텔리스트 추가</Button>
}

export default HotelListAddButton
