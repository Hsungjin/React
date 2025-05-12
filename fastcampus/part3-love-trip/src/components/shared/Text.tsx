import { colors, type Colors } from '@styles/colorPalette'
import { typographyMap, type Typography } from '@styles/typography'
import type { CSSProperties } from 'react'

import styled from '@emotion/styled'

interface TextProps {
  typography?: Typography
  color?: Colors
  display?: CSSProperties['display']
  textAlign?: CSSProperties['textAlign']
  fontWeight?: CSSProperties['fontWeight']
  bold?: boolean
}

const Text = styled.span<TextProps>`
  ${({ color = 'black', display, textAlign, fontWeight, bold }) => ({
    color: colors[color],
    display,
    textAlign,
    fontWeight: bold ? 'bold' : fontWeight,
  })}
  ${({ typography = 't7' }) => typographyMap[typography]}
`

export default Text
