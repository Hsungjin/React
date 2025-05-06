import Terms from '@/components/apply/Terms';
import BasicInfo from '@/components/apply/BasicInfo';
import CardInfo from '@/components/apply/CardInfo';

import { useState } from 'react';
import { useParams } from 'react-router-dom';

function ApplyPage() {
  const { id = '' } = useParams();
  const [step, setStep] = useState(0);

  const handleTermsChange = (values: string[]) => {
    console.log(values);
    setStep(1);
  };

  return (
    <div>
      {step === 0 && <Terms onNext={handleTermsChange} />}
      {step === 1 && <BasicInfo />}
      {step === 2 && <CardInfo />}
    </div>
  );
}

export default ApplyPage;
