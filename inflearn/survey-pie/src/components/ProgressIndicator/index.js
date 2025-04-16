import styled from 'styled-components';
import Bar from '../Bar';
import { useRecoilValue } from 'recoil';
import questionsLengthState from '../../stores/survey/questionsLengthState';
import useStep from '../../hooks/useStep';

function ProgressIndicator() {
  const questionsLength = useRecoilValue(questionsLengthState);
  const step = useStep();

  const bars = [];
  for (let i = 0; i < questionsLength; i++) {
    let status = 'pending';
    if (i < step) {
      status = 'done';
    } else if (i === step) {
      status = 'in-progress';
    }

    bars.push(<Bar status={status} />);
  }

  return (
    <ProgressIndicatorWrapper>
      {bars}
      <PageCount>
        <span>{step + 1}</span>/{questionsLength}
      </PageCount>
    </ProgressIndicatorWrapper>
  );
}

const ProgressIndicatorWrapper = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: calc(100% + 24px);
  width: 100%;
  left: 0;
  align-items: center;
  gap: 8px;
`;

const PageCount = styled.div`
  margin-left: 8px;
  font-size: 16px;
  line-height: 19px;
  color: #636262;

  span {
    font-weight: 700;
    color: #121111;
  }
`;

export default ProgressIndicator;
