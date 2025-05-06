import Terms from '@/components/apply/Terms';
import BasicInfo from '@/components/apply/BasicInfo';
import CardInfo from '@/components/apply/CardInfo';
import { useParams } from 'react-router-dom';

import { ApplyValues, APPLY_STATUS } from '@/models/apply';
import { useState, useEffect } from 'react';
import useUser from '@/hooks/auth/useUser';

function Apply({ onSubmit }: { onSubmit: (values: ApplyValues) => void }) {
  const user = useUser().user;
  const { id = '' } = useParams();

  const [step, setStep] = useState<number>(0);
  const [applyValues, setApplyValues] = useState<Partial<ApplyValues>>({
    userId: user?.uid,
    cardId: id as string,
  });

  useEffect(() => {
    if (step === 3) {
      onSubmit({
        ...applyValues,
        appliedAt: new Date(),
        status: APPLY_STATUS.PROGRESS,
      } as ApplyValues);
    }
  }, [step]);

  const handleTermsChange = (values: ApplyValues['terms']) => {
    console.log(values);

    setApplyValues((prevValues) => ({ ...prevValues, values }));
    setStep((prevStep) => prevStep + 1);
  };

  const handleBasicInfoChange = (
    values: Pick<ApplyValues, 'salary' | 'creditScore' | 'paymentDate'>
  ) => {
    console.log(values);

    setApplyValues((prevValues) => ({ ...prevValues, ...values }));
    setStep((prevStep) => prevStep + 1);
  };

  const handleCardInfoChange = (
    values: Pick<ApplyValues, 'isMasterCard' | 'isRfCard' | 'isHipassCard'>
  ) => {
    console.log(values);

    setApplyValues((prevValues) => ({ ...prevValues, ...values }));
    setStep((prevStep) => prevStep + 1);
  };

  return (
    <div>
      {step === 0 && <Terms onNext={handleTermsChange} />}
      {step === 1 && <BasicInfo onNext={handleBasicInfoChange} />}
      {step === 2 && <CardInfo onNext={handleCardInfoChange} />}
    </div>
  );
}

export default Apply;
