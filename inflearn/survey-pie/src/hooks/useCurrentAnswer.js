import { useRecoilState } from 'recoil';
import useStep from './useStep';

import answersState from '../stores/answers/atom';

function useCurrentAnswer() {
    const step = useStep();
    const [answers, setAnswers] = useRecoilState(answersState);

    const answer = answers[step];
    const setAnswer = (newAnswer) => {
      setAnswers((answers) => {
        const newAnswers = [...answers];
        newAnswers[step] = newAnswer;
        return newAnswers;
      });
    };

    return [answer, setAnswer];
}

export default useCurrentAnswer;