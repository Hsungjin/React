import ListRow from '@shared/ListRow';
import { useInfiniteQuery } from 'react-query';
import { getCards } from '@/remote/card';
import { flatten } from 'lodash';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useCallback, useEffect } from 'react';
import Badge from '@/components/shared/Badge';
import { useNavigate } from 'react-router-dom';

function CardList() {
  const navigate = useNavigate();
  const { data, fetchNextPage, hasNextPage, isFetching } = useInfiniteQuery(
    ['cards'],
    ({ pageParam }) => {
      return getCards(pageParam);
    },
    {
      getNextPageParam: (lastPage) => lastPage.lastVisible,
    }
  );

  const loadMore = useCallback(() => {
    if (hasNextPage === false || isFetching) {
      return;
    }

    fetchNextPage();
  }, [fetchNextPage, hasNextPage, isFetching]);

  useEffect(() => {
    if (data && data.pages.length === 1 && hasNextPage && !isFetching) {
      loadMore();
    }
  }, [data, hasNextPage, isFetching, loadMore]);

  if (data == null) {
    return null;
  }

  const cards = flatten(data.pages.map((page) => page.items));

  return (
    <div>
      <InfiniteScroll
        dataLength={cards.length}
        next={loadMore}
        hasMore={hasNextPage ?? false}
        loader={<></>}
        scrollThreshold="100px"
        style={{ minHeight: '100vh', overflow: 'visible' }}
      >
        <ul>
          {cards.map((card, index) => {
            return (
              <ListRow
              key={card.id}
              contents={
                <ListRow.Texts
                  title={`${index + 1}위`}
                  subTitle={`${card.name} 카드`}
                />
              }
              right={card.payback && <Badge label={`${card.payback}%`} />}
              withArrow={true}
              onClick={() => {
                navigate(`/card/${card.id}`);
              }}
            />
            );
          })}
        </ul>
      </InfiniteScroll>
    </div>
  );
}

export default CardList;
