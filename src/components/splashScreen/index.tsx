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
        className="fixed flex justify-center items-center flex-col z-50 top-0 left-0 w-full h-full"
      >
        <video
          poster="/assets/img/splashscreen-poster.jpg"
          className="max-w-md h-screen object-cover"
          width={'100%'}
          onPlay={() => {
            setTimeout(() => {
              setShowSplash(false)
              setDuration(250)
            }, 7500)
          }}
          onEnded={() => {
            setShowSplash(false)
            setDuration(250)
          }}
          muted
          autoPlay
        >
          <source src="/assets/videos/SPLASH_SCREEN_VVF.mp4" type="video/mp4" />
        </video>
      </div>
    </CSSTransition>
  )
}
