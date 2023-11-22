import '../../public/assets/styles/globals.css'
import type { AppProps } from 'next/app'
import { SplashScreen } from '../components/splashScreen'
import Layout from '../layouts/Layout'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="w-full h-full overflow-auto fixed bg-background">
      <div className="max-w-md relative mx-auto">
        <SplashScreen />

        <Layout>
          <Component {...pageProps} />
        </Layout>
      </div>
    </div>
  )
}
