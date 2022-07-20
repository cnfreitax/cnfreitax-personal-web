import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box
  }

  html {
    /* font-size: 62.5% */
    font-size: 70.5%
  }

  html, body, #__next {
    height: 100%;
  }

  body {
    font-family: 'Poppins', --apple-system, BlinkMacSystemFont, Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
  }
`
