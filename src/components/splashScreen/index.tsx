import { CSSTransition } from 'react-transition-group'
import { useState } from 'react'

interface SplashScreenProps {
  duration: number
}

export const SplashScreen: React.FC<SplashScreenProps> = ({ duration }) => {
  const [showSplash, setShowSplash] = useState(true)

  setTimeout(() => {
    if (showSplash) {
      setShowSplash(false)
    }
  }, duration)

  return (
    <CSSTransition
      in={showSplash}
      timeout={duration}
      classNames="splash-screen"
      unmountOnExit
    >
      <div
        onClick={() => {setShowSplash(false); duration = 0}}
        className="fixed flex justify-center items-center flex-col z-50 top-0 left-0 w-full h-full bg-background"
      >
        <img
          src="/assets/img/LOGO_TYPO_BLANC.png"
          alt="Logo Ybadges"
          className="w-1/3 -translate-y-1/3"
        />
        <img
          src="/assets/img/logo_ynov_campus_paris.png"
          alt="Logo Ynov Paris"
          className="bottom-5 right-5 absolute"
        />
      </div>
    </CSSTransition>
  )
}
