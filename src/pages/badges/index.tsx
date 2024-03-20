import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import jsonBadges from '../../../public/temp-data/badges.json'
const BadgeCard = ({ badge, height, width }: any) => {
  let href = `/PageBadgesDefinition?badgeName=${badge.name}`
  if (badge.locked === true) {
    href += '&isLocked=true'
  }

  let imgSrc = `/assets/img/${badge.name}.png`
  if (badge.locked === true) {
    imgSrc = `/assets/img/**${badge.name}_locked.png`
  }

  return (
    <Link href={href}>
      <img src={imgSrc} width={width} height={height} alt={badge.name} />
    </Link>
  )
}

export default function Badges() {
  const [badges, setBadges] = useState<any>([])
  const [inputText, setInputText] = useState('')
  useEffect(() => {
    setBadges(jsonBadges.data)
  }, [])

  const labelList = () => {
    const badgeList = badges
      .map((badge: any) => {
        if (badge.name.includes(inputText)) {
          return (
            <BadgeCard key={badge.id} width={57} height={57} badge={badge} />
          )
        }
      })
      .filter((badge: any) => badge !== undefined)
    console.log('🚀 ~ badgeList ~ badgeList:', badgeList)
    if (badgeList.length === 0) {
      return (
        <Link href="https://docs.google.com/forms/d/1sBSiOYbaEqXdTRjQXNlFzoWZXXWMfj5Xe0tg-M1Q6V8/edit">
          <button style={buttonStyle}>Une idée ?</button>
        </Link>
      )
    }
    return badgeList
  }

  return (
    <div className=" min-h-screen ">
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
            <img
              src="/assets/img/filtre.png"
              width={29}
              height={29}
              alt="logo"
              className="m-auto"
            />
          </h1>
          {/* <Link href="../badgeidee"> */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
            }}
          >
            <img
              src="/assets/img/Search.png"
              width={22}
              height={23}
              alt="logo"
              className="m-auto"
            />
            <div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  width: 200,
                }}
              >
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  placeholder="Rechercher un badge"
                  className="input-search input-slide-in"
                  id="visible"
                />
                {inputText.length === 0 ? null : (
                  <div className="searchbox">
                    {inputText.length > 0 ? (
                      <div className="searchbox__result">{labelList()}</div>
                    ) : null}
                  </div>
                )}
              </div>
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                marginLeft: 15,
              }}
            ></div>
          </div>
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
const buttonStyle = {
  padding: '10px 20px',
  fontSize: '16px',
  backgroundColor: '#8c52ff',
  color: '#fff',
  border: 'none',
  borderRadius: '35px',
  cursor: 'pointer',
}
