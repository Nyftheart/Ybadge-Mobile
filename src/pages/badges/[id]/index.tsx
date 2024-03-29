import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Badge from '../../../components/badge'
import { Vector3 } from 'three'

export default function BadgeDetails() {
  const [isLocked, setIsLocked] = useState(false)
  const [badgeName, setBadgeName] = useState('logo')

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)
    const isLocked = urlParams.get('isLocked')
    if (isLocked === 'true') {
      setIsLocked(true)
    }
    const badgeName = urlParams.get('badgeName')
    if (badgeName) {
      setBadgeName(badgeName)
    }
  }, [])

  return (
    <div
      className={'min-h-screen pointer-events-none touch-none'}
    >
      <Link href="/PageBadges">
        <img src="/assets/illustrations/arrow.svg" width={21} height={14} alt="logo" />
      </Link>

      <div
        className={
          'select-none text-text text-center text-red-600 text-2xl p-8 w-full SemiboldChill'
        }
      >
        Badge TEST
      </div>

      <p
        className={
          'select-none text-text text-center text-orange-500 w-full text-sm font-light font-poppins'
        }
      >
        Ce badge correspond à ta filière.
      </p>

      <div className="h-full w-full absolute z-0 top-0">
        <Badge
          initialPosition={new Vector3(0, -5, -10)}
          isLocked={isLocked}
          badgeName={badgeName}
        />
      </div>
    </div>
  )
}
