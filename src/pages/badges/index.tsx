import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { ApiService } from '../../services/api-service'
import { Badge } from '../../models/badge.model'
import Image from 'next/image'
import {
  badgesCommuns,
  badgesEpiques,
  badgesLegendaires,
  badgesRares,
  badgesSpeciaux,
} from '../../../public/temp-data/badges.js'

const BadgeCard = ({ badge }: any) => {
  const [imgSrc, setImgSrc] = useState(`/assets/img/badges/${badge.id}.png`)
  return (
    <Link href={`/badges/${badge.id}`}>
      <Image
        className="w-full object-cover rounded-md"
        src={imgSrc}
        width={150}
        height={150}
        alt={badge.nom}
        onError={(e) => {
          if (imgSrc === '/assets/img/badges/default.png') return

          setImgSrc('/assets/img/badges/default.png')
        }}
      />

      <p className="text-center mt-1">{badge.nom}</p>
    </Link>
  )
}

export default function Badges() {
  const [badges, setBadges] = useState<any>([])

  useEffect(() => {
    ApiService.getBadges().then((response) => {
      setBadges(response.data)
      // deleteEveryBadges()
    })
  }, [])

  const deleteEveryBadges = () => {
    badges.forEach((badge: Badge) => {
      ApiService.deleteBadge(badge.id).then((response) => {
        console.log(response)
      })
    })
  }

  const createBadges = () => {
    badgesCommuns.forEach((badge) => {
      // ApiService.createBadge(badge)
    })

    badgesRares.forEach((badge) => {
      // ApiService.createBadge(badge)
    })

    badgesEpiques.forEach((badge) => {
      // ApiService.createBadge(badge)
    })

    badgesLegendaires.forEach((badge) => {
      // ApiService.createBadge(badge)
    })

    badgesSpeciaux.forEach((badge) => {
      // ApiService.createBadge(badge)
    })

    return badges
  }

  return (
    <div id="badges">
      <div className="mb-40">
        <Image
          src="/assets/img/LOGO_TYPO_BLANC.png"
          width={125}
          height={80}
          alt="logo"
          className="m-auto pt-16 pb-8"
        />
        <div className="mb-11 flex items-center justify-between">
          <h1 className="text-2xl font-semibold">Liste des badges</h1>

          <Image
            src="/assets/img/Search.png"
            width={22}
            height={23}
            alt="logo"
            className="ml-auto"
          />
        </div>

        <div className="grid grid-cols-2 gap-10">
          {badges.map((badge: Badge) => (
            <BadgeCard key={badge.id} badge={badge} />
          ))}
        </div>
      </div>
    </div>
  )
}
