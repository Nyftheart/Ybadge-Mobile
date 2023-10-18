import React from 'react'
import Image from 'next/image'

export default function PageBadgesHowToGet() {
  return (
    <div className={'bg-Background min-h-screen'}>
      <div className={'text-center'}>
        <img
          src="/Recherche_Logo_Ybadges.png"
          width={275}
          height={100}
          alt="logo"
          className="m-auto pt-10 pb-8"
        />
      </div>
      <div className={'text-Text text-center text-red-600 text-2xl p-8 w-full'}>
        BADGE MENTOR
      </div>

      <div
        className={'text-Text text-center text-orange-500 text-xl p-8 w-full'}
      >
        {' '}
        Ce badge s&apos;obtient en devenant mentor.
      </div>
    </div>
  )
}
