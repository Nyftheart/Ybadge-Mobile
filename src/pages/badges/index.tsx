import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Filter from '../../components/filter'
import jsonBadges from '../../../public/temp-data/badges.json'

const BadgeCard = ({ badge, height, width }: any) => {
  let href = `/PageBadgesDefinition?badgeName=${badge.name}`
  if (badge.locked === true) {
    href += '&isLocked=true'
  }

  let imgSrc = `/assets/img/${badge.name}.png`
  if (badge.locked === true) {
    imgSrc = `/assets/img/${badge.name}_locked.png`
  }

  return (
    <Link href={href}>
      <img src={imgSrc} width={width} height={height} alt={badge.name} />
    </Link>
  )
}

export default function Badges() {
  const [badges, setBadges] = useState<any>([])
  const [open, setOpen] = useState(false)

  useEffect(() => {
    setBadges(jsonBadges.data)
  }, [])

  const handleToggle = () => {
    setOpen(!open)
  }

  return (
    <div className=" min-h-screen ">
      <Filter open={open}></Filter>
      <img
        src="/assets/img/LOGO_TYPO_BLANC.png"
        width={125}
        height={80}
        alt="logo"
        className="m-auto pt-16 pb-8"
      />
      <div className=" items-center mx-6 mb-11">
        <form className=" flex items-center text-left justify-end">
          <h1 className=" absolute text-text left-7  text-2xl font-semibold SemiboldChill">
            ALL COLLECTIONS
          </h1>
          <Link href="" onClick={handleToggle}>
            <img
              src="/assets/img/Search.png"
              width={22}
              height={23}
              alt="logo"
              className="m-auto"
            />
          </Link>
        </form>
      </div>

      <div>
        <div className={'text-text mx-7 MediumChill'}>Badges Classiques</div>
        <div className={'flex flex-wrap mt-6 mx-7 gap-6'}>
          {badges.map((badge: any) => (
            <BadgeCard key={badge.id} width={57} height={57} badge={badge} />
          ))}
        </div>
      </div>
      <div>
        <div className={'text-text mx-7 mt-12 MediumChill'}>Badges Events</div>
        <div className={'flex flex-wrap mt-6 mx-7 gap-6'}>
          {badges.map((badge: any) => (
            <BadgeCard key={badge.id} width={57} height={57} badge={badge} />
          ))}
        </div>
      </div>
      <div>
        <div className={'text-text mx-7 mt-12 MediumChill'}>
          Badges Spéciaux
        </div>
        <div className={'flex flex-wrap mt-6 mx-7 gap-6'}>
          {badges.map((badge: any) => (
            <BadgeCard key={badge.id} width={57} height={57} badge={badge} />
          ))}
        </div>
      </div>
      <div className="pb-20">
        <div className={'text-text mx-7 mt-12 MediumChill'}>
          Badges Challenge
        </div>
        <div className={'flex flex-wrap mt-6 mx-7 gap-6'}>
          {badges.map((badge: any) => (
            <BadgeCard key={badge.id} width={57} height={57} badge={badge} />
          ))}
        </div>
      </div>
    </div>
  )
}
