import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Filter from '../../components/filter'
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import SearchIcon from '@mui/icons-material/Search'
import CloseIcon from '@mui/icons-material/Close'
import { ApiService } from '../../services/api-service'
import { Badge } from '../../models/badge.model'
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

export default function Badges() {
  const [badges, setBadges] = useState<any>([])
  const [searchedBadges, setSearchedBadges] = useState<any>([])
  const [inputText, setInputText] = useState('')
  const [drawerOpen, setDrawerOpen] = useState(false)

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen)
  }

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

  const handleClose = () => {
    setInputText('')
  }

  const handleInputChange = (event) => {
    setInputText(event.target.value)
  }

  useEffect(() => {
    ApiService.getBadges().then((response) => {
      setBadges(response.data)
      setSearchedBadges(response.data)
      // deleteEveryBadges()
      // createBadges()
    })
  }, [])

  useEffect(() => {
    if (!inputText) {
      setSearchedBadges(badges)
    } else {
      const filteredBadges = badges.filter((badge: Badge) => {
        return badge?.nom?.toLowerCase()?.includes(inputText.toLowerCase())
      })

      setSearchedBadges(filteredBadges)
    }
  }, [inputText])

  return (
    <div id="badges" className="overflow-y-auto mb-40">
      <Image
        src="/assets/img/Logo/Logo_white_short.svg"
        width={150}
        height={80}
        alt="logo"
        className="m-auto pt-16"
      />
      <Filter open={drawerOpen} toggleDrawer={toggleDrawer}></Filter>

      <div className="flex flex-row justify-between items-center py-8">
        <IconButton size="large" onClick={toggleDrawer}>
          <FilterAltOutlinedIcon />
        </IconButton>

        <div className="search-box">
          <IconButton size="large" className="btn-search">
            <SearchIcon />
          </IconButton>
          <input
            type="text"
            className="input-search"
            value={inputText}
            placeholder="Rechercher un badge"
            onChange={handleInputChange}
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-10">
        {searchedBadges.map((badge: Badge) => (
          <BadgeCard key={badge.id} badge={badge} />
        ))}

        {searchedBadges.length === 0 && (
          <Button href="https://docs.google.com/forms/d/1sBSiOYbaEqXdTRjQXNlFzoWZXXWMfj5Xe0tg-M1Q6V8/edit">
            Link
          </Button>
        )}
      </div>
    </div>
  )
}
