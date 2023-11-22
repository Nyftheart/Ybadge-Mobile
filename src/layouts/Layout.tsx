import Navbar from '../components/navbar'

export default function Layout({ children }: any) {
  return (
    <>
      {children}
      <Navbar />
    </>
  )
}