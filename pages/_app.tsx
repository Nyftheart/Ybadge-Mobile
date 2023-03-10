import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { CSSTransition } from 'react-transition-group'
import { useState } from 'react'

interface SplashScreenProps {
  duration: number
}

const SplashScreen: React.FC<SplashScreenProps> = ({ duration }) => {
  const [showSplash, setShowSplash] = useState(true)

  setTimeout(() => {
    setShowSplash(false)
  }, duration)

  return (
    <CSSTransition
      in={showSplash}
      timeout={duration}
      classNames='splash-screen'
      unmountOnExit
    >
      <div className='fixed flex justify-center items-center flex-col z-50 top-0 left-0 w-full h-full bg-Background'>
        <img src="/LOGO_TYPO_BLANC.png" alt="Logo Ybadges" className='w-1/3 -translate-y-1/3' />
        <img src='/logo_ynov_campus_paris.png' alt='Logo Ynov Paris' className='bottom-5 right-5 absolute' />
      </div>
    </CSSTransition>
  )
}

export default function App({ Component, pageProps }: AppProps) {
  return (
<div>
    <div className="visible md:hidden xl:hidden lg:hidden">
      <SplashScreen duration={2500} />
      <div className='content'>
        <Component {...pageProps} />
      </div>
    </div>
</div>
  )
}
