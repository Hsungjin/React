import { useQuery, useMutation, useQueryClient } from 'react-query'
import { getReviews, writeReview } from '@/remote/review'

import { useUserStore } from '@store/atom/user'

export function useReview({ hotelId }: { hotelId: string }) {
  const user = useUserStore((state) => state.getUser())
  const client = useQueryClient()

  const { data, isLoading } = useQuery({
    queryKey: ['reviews', hotelId],
    queryFn: () => getReviews({ hotelId }),
  })

  const { mutateAsync: write } = useMutation(
    async (text: string) => {
      const newReview = {
        createdAt: new Date(),
        hotelId,
        userId: user?.uid,
        rating: 5,
        text,
      }

      await writeReview(newReview)

      return true
    },
    {
      onSuccess: () => {
        client.invalidateQueries(['reviews', hotelId])
      },
    },
  )

  return { data, isLoading, write }
}

export default useReview
