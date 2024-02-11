import { Router, useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function Navbar() {
  const [active, setActive] = useState('home' as 'home' | 'badges' | 'account')
  const navigation = useRouter()

  const navigateTo = (path: 'home' | 'badges' | 'account') => {
    setActive(path)
    navigation.push(`/${path}`)
  }

  useEffect(() => {
    const navIndicator = document.getElementById('nav-indicator')
    const home = document.getElementById('home')
    const badges = document.getElementById('badges')
    const account = document.getElementById('account')

    switch (active) {
      case 'home':
        navIndicator.style.left = home.offsetLeft + 15 + 'px'
        break
      case 'badges':
        navIndicator.style.left = badges.offsetLeft + 15 + 'px'
        break
      case 'account':
        navIndicator.style.left = account.offsetLeft + 15 + 'px'
        break
    }
  }, [active])

  return (
    <div
      id="nav-bar"
      className="fixed bottom-14 h-14 w-full flex justify-center"
    >
      <div
        id="nav-items"
        className="relative flex px-6 justify-between bg-white h-full w-80 rounded-xl shadow-[0_4px_4px_-0px_rgba(0,0,0,0.3)]"
      >
        <div
          id="home"
          className={
            `h-full w-16 justify-center flex items-center transition-all duration-500` +
            (active === 'home' ? ' scale-150 -translate-y-1' : '')
          }
          onClick={() => navigateTo('home')}
        >
          <svg
            width="14"
            height="16"
            viewBox="0 0 14 16"
            className="transition-all duration-300"
            fill={
              active === 'home'
                ? 'var(--ybadges-purple)'
                : 'var(--ybadges-black)'
            }
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M2 16C0.895432 16 0 15.1046 0 14V6.32542C0 5.70134 0.291315 5.11304 0.787664 4.73475L5.78786 0.923835C6.50386 0.378137 7.4962 0.378059 8.21228 0.923645L13.2121 4.73302C13.7086 5.1113 14 5.6997 14 6.32388V14C14 15.1046 13.1046 16 12 16H10.7474C9.64288 16 8.74745 15.1046 8.74745 14V11.4628C8.74745 10.4977 7.96509 9.71531 7 9.71531V9.71531C6.03491 9.71531 5.25255 10.4977 5.25255 11.4628V14C5.25255 15.1046 4.35712 16 3.25256 16H2Z" />
          </svg>
        </div>

        <div
          id="badges"
          className={
            `h-full w-16 justify-center flex items-center
          transition-all duration-500` +
            (active === 'badges' ? ' -translate-y-1' : '')
          }
          onClick={() => navigateTo('badges')}
        >
          <svg
            width="35"
            height="36"
            viewBox="0 0 35 36"
            className="transition-all duration-300"
            fill={active === 'badges' ? 'var(--ybadges-purple)' : 'vblack-'}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M26.6343 1.03418L26.5146 1.40165L26.4264 1.67145L17.3568 6.56233L8.2876 1.67145L8.19936 1.40165L8.07971 1.03418L17.3568 4.83896L26.6343 1.03418Z" />
            <path d="M34.714 0L33.7713 2.62823L17.3568 14.6663L0.942723 2.62823L0 0L17.3568 8.92902L34.714 0Z" />
            <path d="M31.2725 7.87939L29.9244 10.5111L22.6589 19.9869L20.1153 33.9045L19.3669 35.9997L20.4865 19.116L31.2725 7.87939Z" />
            <path d="M15.3468 35.9997L14.5988 33.9045L12.0551 19.9869L4.78967 10.5111L3.44153 7.87939L14.2276 19.116L15.3468 35.9997Z" />
          </svg>
        </div>

        <div
          id="account"
          className={
            `h-full w-16 justify-center flex items-center
          transition-all duration-500` +
            (active === 'account' ? ' scale-150 -translate-y-1' : '')
          }
          onClick={() => navigateTo('account')}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            className="transition-all duration-300"
            fill={active === 'account' ? 'var(--ybadges-purple)' : 'vblack-'}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M8 0C9.06087 0 10.0783 0.421427 10.8284 1.17157C11.5786 1.92172 12 2.93913 12 4C12 5.06087 11.5786 6.07828 10.8284 6.82843C10.0783 7.57857 9.06087 8 8 8C6.93913 8 5.92172 7.57857 5.17157 6.82843C4.42143 6.07828 4 5.06087 4 4C4 2.93913 4.42143 1.92172 5.17157 1.17157C5.92172 0.421427 6.93913 0 8 0ZM8 10C12.42 10 16 11.79 16 14V16H0V14C0 11.79 3.58 10 8 10Z" />
          </svg>
        </div>

        <div
          id="nav-indicator"
          className="absolute bottom-[7px] transition-all duration-300"
        >
          <div className="h-[3px] w-8 bg-[var(--ybadges-purple)] rounded-b-xl"></div>
        </div>
      </div>
    </div>
  )
}
