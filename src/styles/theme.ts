const base = '#ffffff'
const black = '#282626'
const pink = '#ad72a0'
const ligthBlue = '#77c1e4'

export const breakpoints = ['48em', '64em', '72em']

export const mediaQueries = {
  small: `@media screen and (min-width: ${breakpoints[0]})`,
  medium: `@media screen and (min-width: ${breakpoints[1]})`,
  large: `@media screen and (min-width: ${breakpoints[2]})`
}

export const colors = {
  base,
  black,
  pink,
  ligthBlue
}

const fontSize = {
  heading: '4rem',
  subtitle: '1rem',
  textContent: '1.8rem',
  title: '2.2rem',
  paragraph: '1.5rem',
  small: '1.3rem'
}

export const theme = {
  colors,
  fontSize
}
