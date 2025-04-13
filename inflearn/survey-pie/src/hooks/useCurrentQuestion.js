import { useRecoilValue } from 'recoil';
import questionsState from '../stores/questions/atom';
import useStep from './useStep';
function useCurrentQuestion() {
  const questions = useRecoilValue(questionsState);
  const step = useStep();
  const question = questions[step];
  return question;
}

export default useCurrentQuestion;