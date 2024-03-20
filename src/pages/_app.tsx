import '../../public/assets/styles/globals.css'
import { SplashScreen } from '../components/splashScreen'
import Layout from '../layouts/Layout'
import React, { useEffect, useState } from 'react'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { theme } from '../utils/theme'
import Navbar from '../components/navbar'
import { useRouter } from 'next/router'

export default function MyApp(props) {
  const [showNavbar, setShowNavbar] = useState(false)
  const router = useRouter()
  const location = router.pathname

  const { Component, pageProps } = props

  useEffect(() => {
    if (location.includes('auth')) {
      setShowNavbar(false)
    } else {
      setShowNavbar(true)
    }
  }, [location])

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

          {showNavbar && <Navbar />}
        </div>
      }
      <CssBaseline />
    </ThemeProvider>
  )
}
