import '../../public/assets/styles/globals.css'
import { SplashScreen } from '../components/splashScreen'
import Layout from '../layouts/Layout'
import React from 'react'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { theme } from '../utils/theme'
import Navbar from '../components/navbar'

export default function MyApp(props) {
  const { Component, pageProps } = props

  return (
    <ThemeProvider theme={theme}>
      {
        <div>
          <div className="w-full h-full px-6 bg-scroll bg-no-repeat bg-[url('/assets/img/background/bg.jpg')] bg-[length:100vw_100vh]">
            <div className="max-w-md min-h-screen relative mx-auto">
              <SplashScreen />

              <Layout>
                <Component {...pageProps} />
              </Layout>
            </div>
          </div>

          <Navbar />
        </div>
      }
      <CssBaseline />
    </ThemeProvider>
  )
}
