import { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'
import { theme } from 'styles/theme'

import { GlobalStyles } from '../styles/global'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>cnfreitax | dev</title>
        <link rel="shortcut icon" href="img/icon-512.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;900&display=swap"
          rel="stylesheet"
        ></link>

        <link rel="apple-touch-icon" href="img/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="description" content="simple content boilerplate" />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
