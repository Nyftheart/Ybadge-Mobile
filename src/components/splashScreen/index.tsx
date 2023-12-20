import { CSSTransition } from 'react-transition-group'
import { useState } from 'react'

export const SplashScreen: React.FC = () => {
  const [showSplash, setShowSplash] = useState(true)
  const [duration, setDuration] = useState(30000)

  return (
    <CSSTransition
      in={showSplash}
      timeout={duration}
      classNames="splash-screen"
      unmountOnExit={true}
    >
      <div
        onClick={() => {
          setShowSplash(false)
          setDuration(250)
        }}
        className="fixed flex justify-center items-center flex-col z-50 top-0 left-0 w-full h-full bg-background"
      >
        <video
          poster="/assets/img/splashscreen-poster.jpg"
          className="max-w-md h-screen object-fill"
          width={'100%'}
          onPlay={() => {
            setDuration(30000)
          }}
          onEnded={() => {
            setShowSplash(false)
            setDuration(250)
          }}
          muted
          autoPlay
        >
          <source
            src="/assets/videos/SPLASH_SCREEN_CUT.mp4"
            type="video/mp4"
          />
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
