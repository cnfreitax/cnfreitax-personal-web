import styled, { css, keyframes } from 'styled-components'
import {
  getFontSize,
  getMediaQuery,
  getPaletteColor
} from 'utils/handleThemeProperty'

const visibleAnimation = keyframes`
  25% { opacity: 0.25 }
  50% { opacity: 0.5 }
  75% { opacity: 0.75 }
  100% { opacity: 1 }
`

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
  color: ${getPaletteColor('base')};
  font-weight: bold;
  font-size: ${getFontSize('small')};

  a {
    text-decoration: none;
    color: ${getPaletteColor('ligthBlue')};
  }
`

export const NavBarMenu = styled.nav`
  display: flex;
  margin-top: 42px;
  align-self: center;
  justify-content: space-between;
  width: 100%;
  opacity: 0;

  -moz-animation: ${visibleAnimation} 1s ease-in 1.2s forwards;
  -webkit-animation: ${visibleAnimation} 1s ease-in 1.2s forwards;
  -o-animation: ${visibleAnimation} 1s ease-in 1.2s forwards;
  animation: ${visibleAnimation} 1s ease-in 1.2s forwards;
  -webkit-animation-fill-mode: forwards;
  animation-fill-mode: forwards;

  ${getMediaQuery('large')} {
    max-width: 60%;
  }
`
type NavBarType = {
  selected?: boolean
}

export const NavBarOption = styled.button<NavBarType>`
  position: relative;
  font-weight: 600;
  background-color: transparent;
  border: none;
  color: ${getPaletteColor('base')};
  letter-spacing: 2px;
  font-size: ${getFontSize('textContent')};

  &:hover {
    cursor: pointer;
  }

  ${({ selected }) =>
    selected &&
    css`
      color: ${getPaletteColor('pink')};
    `}
`
