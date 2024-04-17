import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { Badge } from '../../models/badge.model'

const BadgeCard = ({ badge }: any) => {
  const [imgSrc, setImgSrc] = useState(`/assets/img/badges/${badge.id}.png`)
  return (
    <Link href={`/badges/${badge.id}`}>
      <Image
        className="w-full object-cover rounded-md"
        src={imgSrc}
        width={150}
        height={150}
        alt={badge.nom || 'badge'}
        onError={(e) => {
          if (imgSrc === '/assets/img/badges/default.png') return

          setImgSrc('/assets/img/badges/default.png')
        }}
      />

      <p className="text-center mt-1">{badge.nom}</p>
    </Link>
  )
}

export default function BadgesList({ badges }) {
  return badges.length === 0 ? (
    <div>
      <p>Aucun badge ne correspond à votre recherche.</p>
      <Link href="https://docs.google.com/forms/d/e/1FAIpQLSczC0o-nw7rFu0hwIK-6VuS_8133IzBOvE0PS6a0w2BfmjCQA/viewform?usp=sf_link">
        Proposez-nous votre idée de badge
      </Link>
    </div>
  ) : (
    <div className="grid grid-cols-2 gap-10">
      {badges.map((badge: Badge) => (
        <BadgeCard key={badge.id} badge={badge} />
      ))}
    </div>
  )
}
