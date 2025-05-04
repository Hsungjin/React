import ListRow from '@shared/ListRow';
import { useInfiniteQuery } from 'react-query';
import { getCards } from '@/remote/card';
import { flatten } from 'lodash';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useCallback } from 'react';

function CardList() {
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

  if (data == null) {
    return null;
  }

  const cards = flatten(data.pages.map((page) => page.items));

  return (
    <div>
      <InfiniteScroll
        dataLength={cards.length}
        next={fetchNextPage}
        hasMore={hasNextPage ?? false}
        loader={<h4>Loading...</h4>}
      >
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
              right={<div>{card.payback && `${card.payback}%`}</div>}
              withArrow={true}
              onClick={() => {
                console.log('click');
              }}
            />
          );
        })}
      </InfiniteScroll>
    </div>
  );
}

export default CardList;
