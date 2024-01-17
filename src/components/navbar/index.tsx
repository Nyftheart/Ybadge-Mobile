import Link from 'next/link'
import { useEffect, useState } from 'react'

const navItemsPosition = {
  home: 6,
  logo: 112,
  user: 218,
}

export default function Navbar() {
  const [position, setPosition] = useState('home')
  const [space, setSpace] = useState(navItemsPosition.home)

  useEffect(() => {
    switch (position) {
      case 'home':
        setSpace(navItemsPosition.home)
        break
      case 'logo':
        setSpace(navItemsPosition.logo)
        break
      case 'user':
        setSpace(navItemsPosition.user)
        break
    }
  }, [position])

  return (
    <div className="fixed z-40 bottom-7 w-full px-6">
      <div className="h-14 w-full bg-text rounded-2xl">
        <div className="relative w-full h-full">
          <div
            id="front_items"
            className={`flex absolute z-20 -translate-y-3 w-24 h-24 -top-10 rounded-full overflow-hidden bg-[#7436B3] transition-all duration-700`}
            style={{
              left: space,
              boxShadow:
                'rgba(255, 255, 255, 0.2) 0px 30px 15px 5px inset, rgba(0, 0, 0, 0.5) 0px -5px 15px 5px inset',
            }}
          >
            <div
              className="min-w-[20rem] items-center justify-around flex transition-all duration-700"
              style={{ marginLeft: -space }}
            >
              <div
                className={`duration-500 ${
                  position == 'home'
                    ? 'translate-y-0 delay-200'
                    : 'translate-y-10'
                }`}
              >
                <img
                  src="/assets/illustrations/home_white.svg"
                  className="w-14 h-14"
                />
              </div>

              <div
                className={`duration-500 ${
                  position == 'logo'
                    ? 'translate-y-0 delay-200'
                    : 'translate-y-10'
                }`}
              >
                <img
                  src="/assets/illustrations/logo_white.svg"
                  className="w-14 h-14"
                />
              </div>

              <div
                className={`duration-500 ${
                  position == 'user'
                    ? 'translate-y-0 delay-200'
                    : 'translate-y-10'
                }`}
              >
                <img
                  src="/assets/illustrations/user_white.svg"
                  className="w-14 h-14"
                />
              </div>
            </div>
          </div>

          <div
            id="back_items"
            className="flex justify-around w-full items-center h-full"
          >
            <Link href={'/home'}>
              <img
                src="/assets/illustrations/home_black.svg"
                onClick={() => setPosition('home')}
                className="w-6"
              />
            </Link>

            <Link href={'/badges'}>
              <img
                src="/assets/illustrations/logo_white.svg"
                onClick={() => setPosition('logo')}
                className="w-6 invert"
              />
            </Link>

            <Link href={'/account'}>
              <img
                src="/assets/illustrations/user_black.svg"
                onClick={() => setPosition('user')}
                className="w-6"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
