import React from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from '../styles/global'
import theme from '../styles/theme'
import TopbarComponent from '../components/Topbar'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
        <TopbarComponent/>
        <Component {...pageProps} />
        <GlobalStyle />
    </ThemeProvider>
  )
}

export default MyApp
