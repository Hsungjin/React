import Agreement from '@shared/Agreement';
import { useCallback, useState } from 'react';

import FixedBottomButton from '@shared/FixedBottomButton';

import { 약관목룍 } from '@constants/apply';

function Terms({ onNext }: { onNext: (terms: string[]) => void }) {
  const [termsAgreements, setTermsAgreements] = useState(() => {
    return 약관목룍.reduce<Record<string, boolean>>((prev, term) => {
      return {
        ...prev,
        [term.id]: false,
      };
    }, {});
  });

  const 모든약관이_동의되엇는가 = Object.values(termsAgreements).every(
    (agreement) => agreement
  );

  const handleAllAgreement = useCallback(
    (_: React.MouseEvent<HTMLDivElement>, checked: boolean) => {
      setTermsAgreements((prev) => {
        return Object.keys(prev).reduce<Record<string, boolean>>(
          (prev, term) => {
            return {
              ...prev,
              [term]: checked,
            };
          },
          {}
        );
      });
    },
    []
  );

  return (
    <div>
      <Agreement>
        <Agreement.Title
          checked={모든약관이_동의되엇는가}
          onChange={handleAllAgreement}
        >
          약관에 모두 동의
        </Agreement.Title>
        {약관목룍.map((term) => (
          <Agreement.Description
            key={term.id}
            checked={termsAgreements[term.id]}
            link={term.link}
            onChange={(event, checked) =>
              setTermsAgreements((prev) => ({
                ...prev,
                [term.id]: checked,
              }))
            }
          >
            {term.title}
          </Agreement.Description>
        ))}
      </Agreement>
      <FixedBottomButton
        label="약관 동의"
        disabled={!모든약관이_동의되엇는가}
        onClick={() => {
          onNext(
            Object.keys(termsAgreements).filter((term) => termsAgreements[term])
          );
        }}
      />
    </div>
  );
}

export default Terms;
