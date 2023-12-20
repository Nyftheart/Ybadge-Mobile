import { Poppins } from '@next/font/google'

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

export default function Layout({ children }: any) {
  return <main className={poppins.className}>{children}</main>
}
