import { selector } from 'recoil';
import getSurvey from '../../services/apis/getSurvey';

const surveyState = selector({
  key: 'surveyState',
  get: async ({ get }) => {
    const response = await getSurvey(
      window.location.pathname.split('/')[2],
    );
    return response.data;
  },
});

export default surveyState;
