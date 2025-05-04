import Top from '@/components/shared/Top';
import { getCards } from '@/remote/card';
import { getAdBanners } from '@/remote/adBanner';
import { useEffect, useState } from 'react';

import { Card } from '@models/card';
import { AdBanner } from '@models/card';
import AdBanners from '@/components/home/AdBanners';
import CardList from '@/components/home/CardList';

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
      <AdBanners />
      <CardList />
    </div>
  );
}

export default HomePage;
