import '../../public/assets/styles/globals.css'
import type { AppProps } from 'next/app'
import { SplashScreen } from '../components/SplashScreen'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="w-full h-full fixed bg-background">
      <div className="max-w-md relative mx-auto">
        <SplashScreen duration={2500} />
        <div className="content">
          <Component {...pageProps} />
        </div>
      </div>
    </div>
  )
}
