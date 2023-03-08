import React from 'react'
import Link from 'next/link'
import Badge from '../components/Badge'

export default function PageBadgesDefinition() {
  return (
    <div className={'bg-Background min-h-screen pt-20'}>
      <Link className="relative z-0 select-all" href="/PageBadges">
        <img src="/arrow.png" width={21} height={14} alt="logo" className="ml-6 z-50" />
      </Link>

      <div className="h-96  mb-10">
        <div className="fixed z-40 h-screen w-screen touch-none">
          <Badge
            initialPosition={[0, 0, 0]}
            objectFolderPath={'/assets/three/badges/logo_locked'}
            animated={true}
          />
        </div>
      </div>

      <div className={'select-none text-Text text-center text-red-600 text-2xl p-8 w-full SemiboldChill'}>Badges TEST</div>

      <p className={'select-none text-Text text-center text-orange-500 w-full text-sm font-light font-poppins'}> Ce badge correspond à ta filière. </p>
    </div>
  )
}
