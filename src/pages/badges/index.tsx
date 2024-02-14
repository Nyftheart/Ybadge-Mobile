import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Filter from '../../components/filter'
import jsonBadges from '../../../public/temp-data/badges.json'
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import SearchIcon from '@mui/icons-material/Search'
import CloseIcon from '@mui/icons-material/Close'
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
  const [drawerOpen, setDrawerOpen] = useState(false)

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen)
  }

  useEffect(() => {
    setBadges(jsonBadges.data)
  }, [])

  const handleClose = () => {
    console.log('tettest')
    setInputText('')
  }
  const handleInputChange = (event) => {
    setInputText(event.target.value)
  }

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
        <Button href="https://docs.google.com/forms/d/1sBSiOYbaEqXdTRjQXNlFzoWZXXWMfj5Xe0tg-M1Q6V8/edit">
          Link
        </Button>
      )
    }
    return badgeList
  }

  return (
    <div className=" min-h-screen ">
      <Filter open={drawerOpen} toggleDrawer={toggleDrawer}></Filter>
      <Image
        src="/assets/img/Logo/Logo_white_short.svg"
        width={150}
        height={80}
        alt="logo"
        className="m-auto pt-16"
      />
      <div className="flex flex-row justify-between items-center py-8">
        <IconButton size="large" onClick={toggleDrawer}>
          <FilterAltOutlinedIcon />
        </IconButton>
        <div className="search-box">
          <IconButton size="large" className="btn-search">
            <SearchIcon />
          </IconButton>
          <IconButton size="large" className="btn-close" onClick={handleClose}>
            <CloseIcon />
          </IconButton>
          <input
            type="text"
            className="input-search"
            value={inputText}
            placeholder="Type to Search..."
            onChange={handleInputChange}
          />
        </div>
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
