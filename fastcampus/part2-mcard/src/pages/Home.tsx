import Top from '@/components/shared/Top';
import AdBanners from '@/components/home/AdBanners';
import CardList from '@/components/home/CardList';
import Button from '@shared/Button';
import { Suspense } from 'react';
import ListRow from '@shared/ListRow';

function HomePage() {
  // const [cardList, setCardList] = useState<Card[]>([]);
  // const [adBannerList, setAdBannerList] = useState<AdBanner[]>([]);

  // useEffect(() => {
  //   getCards().then((cardList) => setCardList(cardList));
  //   getAdBanners().then((adBannerList) => setAdBannerList(adBannerList));
  // }, []);

  return (
    <div>
      <Top
        title="혜택 좋은 카드"
        subTitle="회원님을 위해서 혜택 좋은 카드를 모아봤어요."
      />
      <Button>테스트</Button>
      <AdBanners />
      <Button>테스트</Button>
      <Suspense
        fallback={[...new Array(10)].map((_, index) => (
          <ListRow.Skeleton key={index} />
        ))}
      >
        <CardList />
      </Suspense>
      <Button>테스트</Button>
    </div>
  );
}

export default HomePage;
