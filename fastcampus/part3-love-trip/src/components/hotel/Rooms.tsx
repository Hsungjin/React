import useRooms from './hooks/useRooms'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import Flex from '@shared/Flex'
import Text from '@shared/Text'
import ListRow from '@shared/ListRow'
import Tag from '@shared/Tag'
import Spacing from '../shared/Spacing'
import Button from '../shared/Button'
import addDelimiter from '@/utils/addDelimiter'

function Rooms({ hotelId }: { hotelId: string }) {
  const { data } = useRooms({ hotelId })

  return (
    <Container>
      <Header justify="space-between">
        <Text bold typography="t4">
          객실 정보
        </Text>
        <Text typography="t6" color="gray600">
          1박, 세금 포함
        </Text>
      </Header>
      <ul>
        {data?.map((room) => {
          const 마감임박인가 = room.avaliableCount === 1
          const 매진인가 = room.avaliableCount === 0

          return (
            <ListRow
              key={room.id}
              left={
                <img
                  src={room.imageUrl}
                  alt={`${room.roomName} 의 객실이미지`}
                  css={imageStyles}
                />
              }
              contents={
                <ListRow.Texts
                  title={
                    <Flex>
                      <Text typography="t5">{room.roomName}</Text>
                      {마감임박인가 === true && (
                        <>
                          <Spacing size={4} />
                          <Tag backgroundColor="red">마감임박</Tag>
                        </>
                      )}
                      {매진인가 === true && (
                        <>
                          <Spacing size={4} />
                          <Tag backgroundColor="gray">매진</Tag>
                        </>
                      )}
                    </Flex>
                  }
                  subTitle={`${addDelimiter(room.price)}원`.concat(
                    room.refundable ? ' / 환불 가능' : ' / 환불 불가능',
                  )}
                />
              }
              right={
                <Button disabled={매진인가 === true} onClick={() => {}}>
                  {매진인가 === true ? '매진' : '선택'}
                </Button>
              }
            />
          )
        })}
      </ul>
    </Container>
  )
}

const Container = styled.div`
  margin: 40px 0;
`

const Header = styled(Flex)`
  padding: 0 24px;
  margin-bottom: 20px;
`

const imageStyles = css`
  width: 80px;
  height: 80px;
  border-radius: 8px;
  object-fit: cover;
`

export default Rooms
