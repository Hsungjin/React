import Select from '@shared/Select';
import FixedBottomButton from '@shared/FixedBottomButton';

import { 연소득옵션, 신용점수옵션, 결제일옵션 } from '@constants/apply';
import { useCallback, useState } from 'react';
import { ApplyValues } from '@/models/apply';

type InfoValues = Pick<ApplyValues, 'salary' | 'creditScore' | 'paymentDate'>;

function BasicInfo({ onNext }: { onNext: (values: InfoValues) => void }) {
  const [infoValues, setInfoValues] = useState<InfoValues>({
    salary: '',
    creditScore: '',
    paymentDate: '',
  });

  const handleInfoChange = useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>) => {
      const { name, value } = event.target;
      setInfoValues({ ...infoValues, [name]: value });
    },
    [infoValues],
  );

  const 모든정보가선택되었는가 = Object.values(infoValues).every(
    (value) => value !== '',
  );

  return (
    <div>
      <Select
        label="연소득"
        name="salary"
        options={연소득옵션}
        placeholder={연소득옵션[0].label}
        value={infoValues.salary}
        onChange={handleInfoChange}
      />
      <Select
        label="신용점수"
        name="creditScore"
        options={신용점수옵션}
        placeholder={신용점수옵션[0].label}
        value={infoValues.creditScore}
        onChange={handleInfoChange}
      />
      <Select
        label="결제일"
        name="paymentDate"
        options={결제일옵션}
        placeholder={결제일옵션[0].label}
        value={infoValues.paymentDate}
        onChange={handleInfoChange}
      />
      <FixedBottomButton
        label="다음"
        disabled={!모든정보가선택되었는가}
        onClick={() => {
          onNext(infoValues);
        }}
      />
    </div>
  );
}

export default BasicInfo;
