import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

import styled from '@emotion/styled'
import { css } from '@emotion/react'

const Container = styled.div`
  color: pink;
`

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />

    <Container>Hi Hi Hi</Container>
      <h2 css={css`
        color: pink;
      `}>
        Hello World
      </h2>
  </StrictMode>,
)
