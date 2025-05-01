import Top from '@/components/shared/Top';
import { getCards } from '@/remote/card';
import { getAdBanners } from '@/remote/adBanner';
import { useEffect, useState } from 'react';

import { Card } from '@models/card';
import { AdBanner } from '@models/card';

function HomePage() {
  const [cardList, setCardList] = useState<Card[]>([]);
  const [adBannerList, setAdBannerList] = useState<AdBanner[]>([]);

  useEffect(() => {
    getCards().then((cardList) => setCardList(cardList));
    getAdBanners().then((adBannerList) => setAdBannerList(adBannerList));
  }, []);

  return (
    <div>
      <Top
        title="혜택 좋은 카드"
        subTitle="회원님을 위해서 혜택 좋은 카드를 모아봤어요."
      />
      <div>
        {cardList.map((card) => (
            <div>
                <h3>{card.name}</h3>
                <p>{card.corpName}</p>
                <p>{card.tags.join(', ')}</p>
                <p>{card.benefit.join(', ')}</p>
                <p>{card.promotion?.title}</p>
            </div>
        ))}
        {adBannerList.map((adBanner) => (
            <div>
                <h3>{adBanner.title}</h3>
                <p>{adBanner.description}</p>
                <p>{adBanner.link}</p>
            </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
