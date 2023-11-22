import '../../public/assets/styles/globals.css'
import { SplashScreen } from '../components/splashScreen'
import Layout from '../layouts/Layout'
import React from 'react'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { theme } from '../utils/theme'

export default function MyApp(props) {
  const { Component, pageProps } = props

  return (
    <ThemeProvider theme={theme}>
      {
        <div className="w-full h-full fixed px-6 bg-[url('/assets/img/background/bg.jpg')] bg-cover">
          <div className="max-w-md h-full relative mx-auto">
            <SplashScreen duration={2500} />

            <Layout>
              <Component {...pageProps} />
            </Layout>
          </div>
        </div>
      }
      <CssBaseline />
    </ThemeProvider>
  )
}
