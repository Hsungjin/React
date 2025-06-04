import { useCallback, useState } from 'react'

import type { Like } from '@models/like'
import useLike from '@/hooks/like/useLike'
import { updateOrder } from '@/remote/like'
import { useAlertContext } from '@/contexts/AlertContext'

function useEditLike() {
  const { data = [] } = useLike()
  const [updatedLikes, setUpdatedLikes] = useState<Like[]>([])
  const { open } = useAlertContext()

  const reorder = useCallback(
    (from: number, to: number) => {
      const newitems = [...data]

      const [fromItem] = newitems.splice(from, 1)

      if (fromItem != null) {
        newitems.splice(to, 0, fromItem)

        setUpdatedLikes(newitems)
      }
    },
    [data],
  )

  const save = async () => {
    try {
      await updateOrder(updatedLikes)
      setUpdatedLikes([])
    } catch (error) {
      open({
        title: '오류가 발생했습니다.',
        description: '다시 시도해주세요.',
        onButtonClick: () => {
          setUpdatedLikes([])
        },
      })
    }
  }

  const isEdit = updatedLikes.length > 0

  return { data: isEdit ? updatedLikes : data, isEdit, reorder, save }
}

export default useEditLike
