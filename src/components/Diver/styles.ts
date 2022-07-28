import styled from 'styled-components'
import { getPaletteColor } from 'utils/handleThemeProperty'

export const Line = styled.hr`
  margin: 40px 0;
  border-top: 3px solid;
  border-color: ${getPaletteColor('pink')};
`
