import mainApi from './mainApi';

function getSurvey(surveyId) {
    return mainApi.get(`/surveys/${surveyId}`);
}

export default getSurvey;