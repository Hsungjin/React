import Flex from '@shared/Flex'
import useShare from '@hooks/useShare'
import Spacing from '@shared/Spacing'
import Text from '@shared/Text'

import { css } from '@emotion/react'
import type { Hotel } from '@models/hotel'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import useLike from '@hooks/like/useLike'

function ActionButtons({ hotel }: { hotel: Hotel }) {
  const { data: likes, mutate: like } = useLike()

  const isLike = Boolean(likes?.find((like) => like.hotelId === hotel.id))

  const share = useShare()

  const { name, comment, nameImageUrl } = hotel

  return (
    <Flex css={containerStyle}>
      <Button
        label="찜하기"
        iconUrl={
          isLike
            ? 'https://cdn4.iconfinder.com/data/icons/twitter-29/512/166_Heart_Love_Like_Twitter-128.png'
            : 'https://cdn4.iconfinder.com/data/icons/evil-icons-user-interface/64/heart-128.png'
        }
        onClick={() => {
          like({ hotel: { name, id: hotel.id, nameImageUrl } })
        }}
      />
      <Button
        label="공유하기"
        iconUrl="https://cdn3.iconfinder.com/data/icons/social-network-outline-3/100/Kakao_Talk-128.png"
        onClick={() =>
          share({
            title: name,
            description: comment,
            imageUrl: nameImageUrl,
            buttonLabel: '공유하기',
          })
        }
      />
      <CopyToClipboard
        text={window.location.href}
        onCopy={() => {
          alert('링크가 복사되었습니다.')
        }}
      >
        <Button
          label="링크복사"
          iconUrl="https://cdn3.iconfinder.com/data/icons/feather-5/24/copy-128.png"
        />
      </CopyToClipboard>
    </Flex>
  )
}

function Button({
  label,
  iconUrl,
  onClick,
}: {
  label: string
  iconUrl: string
  onClick?: () => void
}) {
  return (
    <Flex direction="column" align="center" onClick={onClick}>
      <img src={iconUrl} alt={label} width={30} height={30} />
      <Spacing size={8} />
      <Text typography="t6">{label}</Text>
    </Flex>
  )
}

const containerStyle = css`
  padding: 24px;
  cursor: pointer;

  & * {
    flex: 1;
  }
`

export default ActionButtons
