import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import jsonBadges from '../data/badges.json'

const Badge = ({ badge, height, width }: any) => {
  let href = `/PageBadgesDefinition?badgeName=${badge.name}`
  if (badge.locked === true) {
    href += '&isLocked=true'
  }

  let imgSrc = `/${badge.name}.png`
  if (badge.locked === true) {
    imgSrc = `/${badge.name}_locked.png`
  }

  return (
    <Link href={href}>
      <img src={imgSrc} width={width} height={height} alt={badge.name} />
    </Link>
  )
}

export default function PageBadges() {
  type resultProps = {
    email: string
  }

  const [result, setResult] = useState<resultProps[]>([])
  const [badges, setBadges] = useState<any>([])

  useEffect(() => {
    // const api = async () => {
    //     const data = await fetch("https://ybadges.azurewebsites.net/api/Users", {
    //         method: "GET"
    //     });
    //     const jsonData = await data.json();
    //     setResult(jsonData.results);
    // };
    // api();
    setBadges(jsonBadges.data)
  }, [])

  return (
    <div className=" bg-Background min-h-screen ">
      <img src="/LOGO_TYPO_BLANC.png" width={125} height={80} alt="logo" className="m-auto pt-16 pb-8" />
      <div className=" items-center mx-6 mb-11">
        <form className=" flex items-center text-left justify-end">
          <h1 className=" absolute text-Text left-7  text-2xl font-semibold SemiboldChill">ALL COLLECTIONS</h1>
          <Link href="PageBadgesRecherche">
            <img src="/Search.png" width={22} height={23} alt="logo" className="m-auto" />
          </Link>
        </form>
      </div>

      <div className="bg-Menu fixed h-20 -bottom-1 z-0 w-full  flex justify-around items-center">
        <Link href="#">
          <img src="/Recherche_Logo_Ybadges.png" width={40} height={40} alt="logo" className="m-auto" />
        </Link>
        <Link href="/PageBadgesProfilBadges">
          <img src="/DefaultProfile.png" width={28} height={40} alt="logo" className="m-auto opacity-30" />
        </Link>
      </div>
      <div>
        <div className={'text-Text mx-7 MediumChill'}>Badges Classiques</div>
        <div className={'flex flex-wrap mt-6 mx-7 gap-6'}>
          {badges.map((badge: any) => (
            <Badge key={badge.id} width={57} height={57} badge={badge} />
          ))}
        </div>
      </div>
      <div>
        <div className={'text-Text mx-7 mt-12 MediumChill'}>Badges Events</div>
        <div className={'flex flex-wrap mt-6 mx-7 gap-6'}>
          {badges.map((badge: any) => (
            <Badge key={badge.id} width={57} height={57} badge={badge} />
          ))}
        </div>
      </div>
      <div>
        <div className={'text-Text mx-7 mt-12 MediumChill'}>Badges Spéciaux</div>
        <div className={'flex flex-wrap mt-6 mx-7 gap-6'}>
          {badges.map((badge: any) => (
            <Badge key={badge.id} width={57} height={57} badge={badge} />
          ))}
        </div>
      </div>
      <div className="pb-20">
        <div className={'text-Text mx-7 mt-12 MediumChill'}>Badges Challenge</div>
        <div className={'flex flex-wrap mt-6 mx-7 gap-6'}>
          {badges.map((badge: any) => (
            <Badge key={badge.id} width={57} height={57} badge={badge} />
          ))}
        </div>
      </div>
    </div>
  )
}
