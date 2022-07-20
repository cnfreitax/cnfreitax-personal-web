import styled from 'styled-components'
import { getFontSize } from 'utils/handleThemeProperty'

export const Header = styled.header`
  display: flex;
  width: 100%;
  margin-bottom: 5rem;
`

export const HeaderDescription = styled.div`
  text-align: start;
  font-size: ${getFontSize('textContent')};
  margin-top: 8px;
  margin-top: 18px;
`

export const HeaderContent = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`

export const Title = styled.h1`
  margin: 0;
  font-size: ${getFontSize('heading')};
  font-weight: 900;
  letter-spacing: 3px;
`

export const Subtitle = styled.small`
  color: #77c1e4;
  font-weight: bold;
  font-size: ${getFontSize('small')};
`
