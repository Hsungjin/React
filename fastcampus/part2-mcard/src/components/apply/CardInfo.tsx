import Button from '@shared/Button';
import Spacing from '@shared/Spacing';

import { ApplyValues } from '@/models/apply';
import { useCallback, useState } from 'react';
import FixedBottomButton from '../shared/FixedBottomButton';

type CardInfoValues = Pick<
  ApplyValues,
  'isMasterCard' | 'isRfCard' | 'isHipassCard'
>;

interface CardInfoProps {
  onNext: (values: CardInfoValues) => void;
}

function CardInfo({ onNext }: { onNext: (values: CardInfoValues) => void }) {
  const [cardValues, setCardValues] = useState<CardInfoValues>({
    isMasterCard: false,
    isRfCard: false,
    isHipassCard: false,
  });

  const { isMasterCard, isRfCard, isHipassCard } = cardValues;

  const handelButtonClick = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      const $button = event.target as HTMLButtonElement;

      setCardValues((prev) => ({
        ...prev,
        [$button.name]: JSON.parse($button.dataset.value ?? 'false'),
      }));
    },
    []
  );

  return (
    <div>
      <Button.Group title="해외결제">
        <Button
          size="medium"
          name="isMasterCard"
          weak={!isMasterCard}
          data-value={true}
          onClick={handelButtonClick}
        >
          Master
        </Button>
        <Button
          size="medium"
          name="isMasterCard"
          weak={isMasterCard}
          data-value={false}
          onClick={handelButtonClick}
        >
          국내전용
        </Button>
      </Button.Group>
      <Spacing size={12} />
      <Button.Group title="후불교통기능">
        <Button
          size="medium"
          name="isRfCard"
          weak={isRfCard}
          data-value={false}
          onClick={handelButtonClick}
        >
          신청안함
        </Button>
        <Button
          size="medium"
          name="isRfCard"
          weak={!isRfCard}
          data-value={true}
          onClick={handelButtonClick}
        >
          신청
        </Button>
      </Button.Group>
      <Spacing size={12} />
      <Button.Group title="후불하이패스카드">
        <Button
          size="medium"
          name="isHipassCard"
          weak={isHipassCard}
          data-value={false}
          onClick={handelButtonClick}
        >
          신청안함
        </Button>
        <Button
          size="medium"
          name="isHipassCard"
          weak={!isHipassCard}
          data-value={true}
          onClick={handelButtonClick}
        >
          신청
        </Button>
      </Button.Group>

      <FixedBottomButton label="다음" onClick={() => onNext(cardValues)} />
    </div>
  );
}

export default CardInfo;
