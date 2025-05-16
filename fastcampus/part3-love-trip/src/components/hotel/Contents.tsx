import ReactMarkdown from 'react-markdown'
import styled from '@emotion/styled'

import { typographyMap } from '@styles/typography'

function Contents({ contents }: { contents: string }) {
  return (
    <Container>
      <ReactMarkdown>{contents}</ReactMarkdown>
    </Container>
  )
}

const Container = styled.div`
  padding: 24px;
  ${typographyMap.t5};

  h2 {
    ${typographyMap.t3};
    font-weight: bold;
    margin-bottom: 16px;
  }

  ul {
    padding-inline-start: 24px;
    margin: 18px 0;
  }

  li {
    list-style: disc;
  }

  p {
    margin: 18px 0;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 4px;
  }
`

export default Contents
