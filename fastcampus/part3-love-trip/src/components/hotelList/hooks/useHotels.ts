import { useInfiniteQuery } from 'react-query'

import { getHotels } from '@remote/hotel'
import { useCallback } from 'react'

function useHotels() {
  const {
    data,
    hasNextPage = false,
    fetchNextPage,
    isFetching,
  } = useInfiniteQuery(['hotels'], ({ pageParam }) => getHotels(pageParam), {
    getNextPageParam: (snapshot) => {
      return snapshot.lastVisible
    },
  })

  const loadMore = useCallback(() => {
    if (hasNextPage === null || isFetching) {
      return
    }

    fetchNextPage()
  }, [hasNextPage, isFetching, fetchNextPage])

  const hotels = data?.pages.flatMap((page) => page.items)

  return {
    hotels,
    loadMore,
    isFetching,
    hasNextPage,
  }
}

export default useHotels
