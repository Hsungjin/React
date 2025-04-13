import { useRecoilValue } from 'recoil';
import styled from 'styled-components';

import testWithComma from '../../stores/test/testWithComma';

const CompletionPageWrapper = styled.div`
`;

function CompletionPage() {
  const test = useRecoilValue(testWithComma);

  return <CompletionPageWrapper>{test}</CompletionPageWrapper>;
}
export default CompletionPage;
