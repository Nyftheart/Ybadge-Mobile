import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Badge from '../../../components/badge'
import { Vector3 } from 'three'
import { ApiService } from '../../../services/api-service'
import { useRouter } from 'next/router'

export default function BadgeDetails() {
  const [isLocked, setIsLocked] = useState(false)
  const [badge, setBadge] = useState<any>({})
  const router = useRouter()
  const getBadge = async (id) => {
    await ApiService.getBadgeById(id)
      .then((response) => {
        setBadge(response.data)
      })
      .catch((error) => {
        console.error(error)
      })
  }

  useEffect(() => {
    const { id } = router.query

    if (id) {
      getBadge(id)
    }
  }, [router])

  return (
    <div className={'min-h-screen pointer-events-none touch-none'}>
      <Link
        href="/badges"
        className="touch-auto pointer-events-auto relative z-10"
      >
        <img
          src="/assets/illustrations/arrow.svg"
          width={21}
          height={14}
          alt="Back to badges list"
        />
      </Link>

      <div
        className={'text-text text-center text-2xl p-8 w-full SemiboldChill'}
      >
        {badge.nom}
      </div>

      <p
        className={
          'text-text text-center w-full text-sm font-light font-poppins'
        }
      >
        {badge.description}
      </p>

      <div className="fixed z-0 top-0 right-0 bottom-0 left-0 touch-auto pointer-events-auto">
        <Badge
          initialPosition={new Vector3(0, 0, -20)}
          isLocked={isLocked}
          badgeName={badge.id}
        />
      </div>
    </div>
  )
}
