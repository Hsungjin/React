import Terms from '@/components/apply/Terms';
import BasicInfo from '@/components/apply/BasicInfo';
import CardInfo from '@/components/apply/CardInfo';
import { useParams } from 'react-router-dom';

import { ApplyValues, APPLY_STATUS } from '@/models/apply';
import { useState, useEffect } from 'react';
import useUser from '@/hooks/auth/useUser';
import ProgressBar from '@shared/ProgressBar';

function Apply({ onSubmit }: { onSubmit: (values: ApplyValues) => void }) {
  const user = useUser().user;
  const { id = '' } = useParams();

  const storageKey = `applied-${user?.uid}-${id}`;

  const [applyValues, setApplyValues] = useState<Partial<ApplyValues>>(() => {
    const applied = localStorage.getItem(storageKey);

    if (applied == null) {
      return {
        userId: user?.uid,
        cardId: id as string,
        step: 0,
      };
    }

    return JSON.parse(applied);
  });

  useEffect(() => {
    if (applyValues.step === 3) {
      localStorage.removeItem(storageKey);

      onSubmit({
        ...applyValues,
        appliedAt: new Date(),
        status: APPLY_STATUS.PROGRESS,
      } as ApplyValues);
    } else {
      console.log(applyValues);
      localStorage.setItem(storageKey, JSON.stringify(applyValues));
    }
  }, [applyValues, applyValues.step, onSubmit, storageKey]);

  const handleTermsChange = (values: ApplyValues['terms']) => {
    console.log(values);

    setApplyValues((prevValues) => ({
      ...prevValues,
      values,
      step: (prevValues.step as number) + 1,
    }));
  };

  const handleBasicInfoChange = (
    values: Pick<ApplyValues, 'salary' | 'creditScore' | 'paymentDate'>
  ) => {
    console.log(values);

    setApplyValues((prevValues) => ({
      ...prevValues,
      ...values,
      step: (prevValues.step as number) + 1,
    }));
  };

  const handleCardInfoChange = (
    values: Pick<ApplyValues, 'isMasterCard' | 'isRfCard' | 'isHipassCard'>
  ) => {
    console.log(values);

    setApplyValues((prevValues) => ({
      ...prevValues,
      ...values,
      step: (prevValues.step as number) + 1,
    }));
  };

  return (
    <div>
      <ProgressBar progress={(applyValues.step as number) / 3} />
      {applyValues.step === 0 && <Terms onNext={handleTermsChange} />}
      {applyValues.step === 1 && <BasicInfo onNext={handleBasicInfoChange} />}
      {applyValues.step === 2 && <CardInfo onNext={handleCardInfoChange} />}
    </div>
  );
}

export default Apply;
