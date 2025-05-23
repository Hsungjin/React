import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import SurveyPage from './pages/SurveyPage';
import CompletionPage from './pages/CompletionPage';

function App() {
  return (
    <div className="App">
      <AppWrapper>
        <Box>
          <Routes>
            <Route path="/done/:surveyId" element={<CompletionPage />} />
            <Route path="/survey/:surveyId" element={<SurveyPage />}>
              <Route path=":step" element={<SurveyPage />} />
            </Route>
          </Routes>
        </Box>
      </AppWrapper>
    </div>
  );
}

const AppWrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
`;

const Box = styled.div`
  width: 700px;
  min-height: 500px;
  background: #ffffff;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.7);
  border-radius: 16px;
  padding: 60px;
  display: flex;
  box-sizing: border-box;
  position: relative;
`;

export default App;
