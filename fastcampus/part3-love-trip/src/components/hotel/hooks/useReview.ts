import { useQuery } from 'react-query'
import { getReviews } from '@/remote/review'

export function useReview({ hotelId }: { hotelId: string }) {
  const { data, isLoading } = useQuery({
    queryKey: ['reviews', hotelId],
    queryFn: () => getReviews({ hotelId }),
  })

  return { data, isLoading }
}

export default useReview
