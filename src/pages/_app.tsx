import React from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from '../styles/global'
import theme from '../styles/theme'
import TopbarComponent from '../components/Topbar'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
    <ThemeProvider theme={theme}>
        <TopbarComponent/>
        <Component {...pageProps} />
        <GlobalStyle />
    </ThemeProvider>

    <ToastContainer
      position="top-center"
      autoClose={4000}
      hideProgressBar={true}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
    </>
  )
}

export default MyApp
