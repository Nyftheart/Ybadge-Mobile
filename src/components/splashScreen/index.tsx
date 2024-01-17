import { CSSTransition } from 'react-transition-group'
import { useState } from 'react'

export const SplashScreen: React.FC = () => {
  const [showSplash, setShowSplash] = useState(true)

  return (
    <CSSTransition
      in={showSplash}
      timeout={30000}
      classNames="splash-screen"
      unmountOnExit={true}
    >
      <div
        onClick={() => {
          setShowSplash(false)
        }}
        className="fixed flex justify-center items-center flex-col z-50 top-0 left-0 w-full h-full bg-background"
      >
        <video
          poster="/assets/img/splashscreen-poster.jpg"
          className="max-w-md h-screen object-cover"
          width={'100%'}
          onPlay={() => {
            setTimeout(() => {
              setShowSplash(false)
            }, 7500)
          }}
          onEnded={() => {
            setShowSplash(false)
          }}
          muted
          autoPlay
        >
          <source src="/assets/videos/SPLASH_SCREEN_VVF.mp4" type="video/mp4" />
        </video>
        {/* <img
          src="/assets/img/LOGO_TYPO_BLANC.png"
          alt="Logo Ybadges"
          className="w-1/3 -translate-y-1/3"
        />
        <img
          src="/assets/img/logo_ynov_campus_paris.png"
          alt="Logo Ynov Paris"
          className="bottom-5 right-5 absolute"
        /> */}
      </div>
    </CSSTransition>
  )
}
