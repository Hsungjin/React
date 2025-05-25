import { useMutation, useQuery } from 'react-query'

import { getLikes, toggleLike } from '@/remote/like'
import { useUserStore } from '@/store/atom/user'
import type { Hotel } from '@/models/hotel'
import { useAlertContext } from '@/contexts/AlertContext'
import { useNavigate } from 'react-router-dom'

function useLike() {
  const user = useUserStore().getUser()
  const { open } = useAlertContext()
  const navigate = useNavigate()

  const { data } = useQuery(['likes'], () => getLikes({ userId: user.uid }), {
    enabled: user != null,
  })

  useMutation(
    ({ hotel }: { hotel: Pick<Hotel, 'name' | 'id' | 'nameImageUrl'> }) => {
      if (user == null) {
        throw new Error('로그인 후 이용해주세요.')
      }
      return toggleLike({ hotel, userId: user.uid })
    },
    {
      onError: (e: Error) => {
        if (e.message === '로그인 후 이용해주세요.') {
          open({
            title: '로그인 후 이용해주세요.',
            description: '로그인 후 이용해주세요.',
            onButtonClick: () => {
              navigate('/signin')
            },
          })

          return
        }

        open({
          title: '알수없는 오류가 발생했습니다. 잠시후 다시 시도해 주세요.',
          onButtonClick: () => {
            navigate('/')
          },
        })
      },
    },
  )

  return { data }
}

export default useLike
