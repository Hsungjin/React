import Text from '@shared/Text'
import Flex from '@shared/Flex'
import Spacing from '@shared/Spacing'
import Button from '@shared/Button'
import TextField from '@shared/TextField'

import { format } from 'date-fns'
import { useCallback } from 'react'

import useReview from './hooks/useReview'
import ListRow from '../shared/ListRow'
import { useUserStore } from '@store/atom/user'

function Review({ hotelId }: { hotelId: string }) {
  const { data: reviews, isLoading } = useReview({ hotelId })
  const user = useUserStore((state) => state.getUser())

  const reviewRows = useCallback(() => {
    if (reviews?.length === 0) {
      return (
        <Flex direction="column" align="center" style={{ margin: '40px 0' }}>
          <img src={'/images/no-review.png'} alt="no-review" />
          <Spacing size={16} />
          <Text typography="t6">
            아직 작성된 리뷰가 없습니다. 첫 리뷰를 작성해보세요.
          </Text>
        </Flex>
      )
    }

    return (
      <ul>
        {reviews?.map((review) => (
          <ListRow
            key={review.id}
            left={
              review.user.photoURL != null ? (
                <img src={review.user.photoURL} width={40} height={40} />
              ) : null
            }
            contents={
              <ListRow.Texts
                title={review.user.displayName}
                subTitle={format(review.createdAt, 'yyyy.MM.dd')}
              />
            }
            right={review.userId === user?.uid ? <Button>삭제</Button> : null}
          />
        ))}
      </ul>
    )
  }, [reviews, user])

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <div style={{ margin: '40px 0' }}>
      <Text bold typography="t4" style={{ padding: '0 24px' }}>
        리뷰
      </Text>
      <Spacing size={24} />
      {reviewRows()}
      {user != null ? (
        <div style={{ padding: '0 24px' }}>
          <TextField placeholder="리뷰를 작성해주세요." />
          <Spacing size={16} />
          <Flex justify="flex-end">
            <Button disabled={true}>리뷰 작성</Button>
          </Flex>
        </div>
      ) : (
        <Button>로그인 후 리뷰 작성</Button>
      )}
    </div>
  )
}

export default Review
