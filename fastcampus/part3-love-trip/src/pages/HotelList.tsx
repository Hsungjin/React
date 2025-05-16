import InfiniteScroll from 'react-infinite-scroll-component'

import useHotels from '@/components/hotelList/hooks/useHotels'

import HotelItem from '@/components/hotelList/HotelItem'
import Spacing from '@/components/shared/Spacing'
import Top from '@shared/Top'
import { Fragment } from 'react'

function HotelListPage() {
  const { hotels, hasNextPage, loadMore } = useHotels()

  return (
    <div>
      <Top
        title="인기호텔"
        subTitle="호텔부터 펜션까지 최저가를 목록을 확인할 수 있습니다."
      />
      <InfiniteScroll
        dataLength={hotels?.length ?? 0}
        hasMore={hasNextPage}
        loader={<></>}
        next={loadMore}
        scrollThreshold="100px"
      >
        {hotels?.map((hotel, index) => (
          <Fragment key={hotel.id}>
            <HotelItem hotel={hotel} />
            {hotels.length - 1 === index ? null : (
              <Spacing
                size={8}
                backgroundColor="gray100"
                style={{ margin: '20px 0' }}
              />
            )}
          </Fragment>
        ))}
      </InfiniteScroll>
    </div>
  )
}

export default HotelListPage
