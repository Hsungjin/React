import useRecommendHotels from './hooks/useRecommendHotels'

import { useState } from 'react'

import { css } from '@emotion/react'

import Text from '@shared/Text'
import Spacing from '@shared/Spacing'
import ListRow from '@shared/ListRow'
import addDelimiter from '@/utils/addDelimiter'
import Button from '../shared/Button'

function RecommendHotels({ recommendHotels }: { recommendHotels: string[] }) {
  const { data, isLoading } = useRecommendHotels({
    hotelIds: recommendHotels,
  })
  const [showMore, setShowMore] = useState(false)

  if (data == null || isLoading) {
    return <div>Loading...</div>
  }

  const 호텔리스트 = data.length < 3 || showMore ? data : data.slice(0, 3)

  return (
    <div style={{ margin: '24px 0' }}>
      <Text typography="t4" bold style={{ padding: '0 24px' }}>
        추천 호텔
      </Text>
      <Spacing size={16} />
      <ul>
        {호텔리스트.map((hotel) => (
          <ListRow
            key={hotel.id}
            left={<img src={hotel.nameImageUrl} css={imageStyles} />}
            contents={
              <ListRow.Texts
                title={
                  <Text typography="t6" bold>
                    {hotel.name}
                  </Text>
                }
                subTitle={
                  <Text typography="t6">{addDelimiter(hotel.price)} 원</Text>
                }
              />
            }
          />
        ))}
      </ul>
      {data.length > 3 && showMore === false ? (
        <div style={{ padding: '0 24px', marginTop: '16px' }}>
          <Button full={true} weak={true} onClick={() => setShowMore(true)}>
            더보기
          </Button>
        </div>
      ) : null}
    </div>
  )
}

const imageStyles = css`
  width: 48px;
  height: 48px;
  border-radius: 8px;
`

export default RecommendHotels
