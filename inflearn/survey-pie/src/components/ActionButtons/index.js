import { useNavigate } from 'react-router-dom';
import Button from '../Button';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import { useState } from 'react';
import useStep from '../../hooks/useStep';
import useSurveyId from '../../hooks/useSurveyId';
import useAnswers from '../../hooks/useAnswers';
import questionsLengthState from '../../stores/survey/questionsLengthState';
import postAnswers from '../../services/postAnswers';

function ActionButtons() {
  const step = useStep();
  const surveyId = useSurveyId();
  const questionLength = useRecoilValue(questionsLengthState);
  const answers = useAnswers();
  const [isPosting, setIsPosting] = useState(false);

  const isLast = step === questionLength - 1;
  const navigate = useNavigate();

  return (
    <ActionButtonsWrapper>
      {step !== 0 && (
        <Button type="SECONDARY" onClick={() => navigate(`${step - 1}`)}>
          이전
        </Button>
      )}
      {isLast ? (
        <Button
          type="PRIMARY"
          onClick={() => {
            setIsPosting(true);
            postAnswers(surveyId, answers)
              .then(() => {
                navigate(`/done/${surveyId}`);
              })
              .catch((err) => {
                console.log(err.response);
                alert('제출에 실패했습니다. 다시 시도해주세요.');
              })
              .finally(() => {
                setIsPosting(false);
              });
          }}
          disabled={isPosting}>
          {isPosting ? '제출중...' : '제출'}
        </Button>
      ) : (
        <Button type="PRIMARY" onClick={() => navigate(`${step + 1}`)}>
          다음
        </Button>
      )}
    </ActionButtonsWrapper>
  );
}

const ActionButtonsWrapper = styled.div`
  margin-top: 72px;
  display: flex;
  gap: 16px;
  justify-content: center;
`;

export default ActionButtons;
