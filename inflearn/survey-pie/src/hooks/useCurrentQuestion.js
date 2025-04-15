import { useRecoilValue } from 'recoil';
import surveyState from '../stores/survey/surveyState';
import useStep from './useStep';

function useCurrentQuestion() {
  const step = useStep();
  const surveyData = useRecoilValue(surveyState);
  const questions = surveyData?.questions || [];

  // useEffect(() => {
  //   axios.get(`http://localhost:3001/surveys/${surveyId}`).then((res) => {
  //     setSurvey(res.data);
  //   });
  // }, [setSurvey, surveyId]);

  const question = questions[step];
  return question;
}

export default useCurrentQuestion;
