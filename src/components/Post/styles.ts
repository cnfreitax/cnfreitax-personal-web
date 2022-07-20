import styled from 'styled-components'
import { getFontSize, getPaletteColor } from 'utils/handleThemeProperty'

export const Content = styled.div`
  width: 100%;
`
export const Title = styled.h2`
  color: ${getPaletteColor('pink')};
  font-weight: 900;
  font-size: ${getFontSize('heading')};
  cursor: default;
`

export const PostContent = styled.div`
  margin-top: 24px;
  line-height: 26px;
  font-size: ${getFontSize('textContent')};
`
