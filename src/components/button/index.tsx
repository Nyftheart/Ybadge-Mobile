import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Button({
  children,
  onClick,
  style = 'outline',
  additionalClasses,
  href,
}: any) {
  const [buttonStyle, setButtonStyle] = useState(null)

  const styles = {
    outline:
      'bg-transparent border border-white text-white py-2 px-10 rounded-full font-semibold',
    link: 'bg-transparent underline text-white',
  }

  useEffect(() => {
    setButtonStyle(styles[style] + ' ' + additionalClasses)
  }, [style])

  return href ? (
    <Link href={href} className={buttonStyle}>
      {children}
    </Link>
  ) : (
    <button onClick={onClick} className={buttonStyle}>
      {children}
    </button>
  )
}
