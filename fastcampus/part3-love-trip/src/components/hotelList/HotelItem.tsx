import { differenceInMilliseconds, parseISO } from 'date-fns'
import { css } from '@emotion/react'
import { Link } from 'react-router-dom'

import { type Hotel } from '@/models/hotel'
import ListRow from '@shared/ListRow'
import Flex from '@shared/Flex'
import Text from '@shared/Text'
import Spacing from '@shared/Spacing'
import addDelimiter from '@utils/addDelimiter'
import Tag from '../shared/Tag'
import formatTime from '@utils/formatTime'
import { useEffect, useState } from 'react'

function HotelItem({
  hotel,
  isLike,
  onLike,
}: {
  hotel: Hotel
  isLike: boolean
  onLike: ({
    hotel,
  }: {
    hotel: Pick<Hotel, 'name' | 'id' | 'nameImageUrl'>
  }) => void
}) {
  const [remainedTime, setRemainedTime] = useState(0)

  useEffect(() => {
    if (hotel.events == null || hotel.events.promoEndTime == null) {
      return
    }

    const promoEndTime = hotel.events.promoEndTime

    const timer = setInterval(() => {
      const 남은초 = differenceInMilliseconds(
        parseISO(promoEndTime),
        new Date(),
      )

      if (남은초 < 0) {
        clearInterval(timer)
      }

      setRemainedTime(남은초)
    }, 1000)

    return () => {
      clearInterval(timer)
    }
  }, [hotel.events])

  const tagComponent = () => {
    if (hotel.events == null) {
      return null
    }

    const { name, tagThemeStyle } = hotel.events

    const promotionText =
      remainedTime > 0 ? `${formatTime(remainedTime)} 남음` : ''

    return (
      <div>
        <Tag
          color={tagThemeStyle.fontColor}
          backgroundColor={tagThemeStyle.backgroundColor}
        >
          {name} {promotionText}
        </Tag>
        <Spacing size={10} />
      </div>
    )
  }

  const handleLike = (e: React.MouseEvent<HTMLImageElement>) => {
    e.preventDefault()
    onLike({
      hotel: {
        name: hotel.name,
        id: hotel.id,
        nameImageUrl: hotel.nameImageUrl,
      },
    })
  }

  return (
    <div>
      <Link to={`/hotel/${hotel.id}`}>
        <ListRow
          contents={
            <Flex direction="column">
              {tagComponent()}
              <ListRow.Texts
                title={hotel.name}
                subTitle={hotel.comment}
              ></ListRow.Texts>
              <Spacing size={4} />
              <Text typography="t7" color="gray600">
                {hotel.starRating}성급
              </Text>
            </Flex>
          }
          right={
            <Flex
              direction="column"
              align="flex-end"
              style={{ position: 'relative' }}
            >
              <img
                src={
                  isLike
                    ? 'https://cdn4.iconfinder.com/data/icons/twitter-29/512/166_Heart_Love_Like_Twitter-128.png'
                    : 'https://cdn4.iconfinder.com/data/icons/evil-icons-user-interface/64/heart-128.png'
                }
                alt="heart"
                css={iconHeartStyles}
                onClick={handleLike}
              />
              <img
                src={hotel.nameImageUrl}
                alt={hotel.name}
                css={imageStyles}
              />
              <Spacing size={8} />
              <Text bold={true} typography="t7">
                {addDelimiter(hotel.price)}원
              </Text>
            </Flex>
          }
          style={containerStyles}
        />
      </Link>
    </div>
  )
}

const containerStyles = css`
  align-items: flex-start;
`

const imageStyles = css`
  width: 90px;
  height: 110px;
  border-radius: 8px;
  object-fit: cover;
  margin-left: 16px;
`

const iconHeartStyles = css`
  position: absolute;
  top: 4px;
  right: 4px;
  width: 24px;
  height: 24px;
`

export default HotelItem
