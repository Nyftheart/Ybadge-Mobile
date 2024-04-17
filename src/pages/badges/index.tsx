import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Filter from '../../components/filter'
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined'
import IconButton from '@mui/material/IconButton'
import SearchIcon from '@mui/icons-material/Search'
import { ApiService } from '../../services/api-service'
import { Badge } from '../../models/badge.model'
import BadgesList from '../../components/badgesList'

export default function Badges() {
  const [badges, setBadges] = useState<any>([])
  const [searchedBadges, setSearchedBadges] = useState<any>([])
  const [inputText, setInputText] = useState('')
  const [drawerOpen, setDrawerOpen] = useState(false)

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen)
  }

  const handleInputChange = (event) => {
    setInputText(event.target.value)
  }

  useEffect(() => {
    ApiService.getBadges().then((response) => {
      setBadges(response.data)
      setSearchedBadges(response.data)
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

      <BadgesList badges={searchedBadges} />
    </div>
  )
}
