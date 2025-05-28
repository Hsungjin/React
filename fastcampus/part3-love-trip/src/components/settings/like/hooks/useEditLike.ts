import useLike from '@/hooks/like/useLike'

function useEditLike() {
  const { data } = useLike()

  return { data }
}

export default useEditLike