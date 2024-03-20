import Image from 'next/image'
import Link from 'next/link'
import jsonUser from '../../../public/temp-data/user.json'
import { useEffect, useState } from 'react'
import { Badge } from '../../models/badge.model'
import { User } from '../../models/user.model'
import BadgesList from '../../components/badges-list'

export default function Account() {
  const [user, setUser] = useState<User>({})
  const [badges, setBadges] = useState<Array<Badge>>([])
  const [filteredBadges, setFilteredBadges] = useState<Array<Badge>>([])
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    setUser(jsonUser.data)
  }, [])

  useEffect(() => {
    const searchedBadges = badges.filter((badge) =>
      badge.name.toLowerCase().includes(searchTerm.toLowerCase())
    )

    setFilteredBadges(searchedBadges)
  }, [searchTerm, badges])

  return (
    <div className="py-20">
      <div className="relative">
        <Link className="absolute right-0" href={'account/settings'}>
          <Image
            src="/assets/illustrations/settings.svg"
            width={24}
            height={24}
            alt="Settings icon"
          />
        </Link>

        <div className="flex justify-center">
          <Image
            className="mt-5"
            src="/assets/illustrations/user.svg"
            width={51}
            height={54}
            alt="User icon"
          />
        </div>
      </div>

      <div className="mt-16 grid grid-cols-2">
        <div className="grid text-base grid-rows-3">
          <div className="font-chillax font-medium pt-3 pb-2 border-b-2">
            {user.lastName || '-'}
          </div>

          <div className="font-chillax font-medium pt-3 pb-2 border-b-2">
            {user.firstName || '-'}
          </div>

          <div className="font-chillax font-medium pt-3 pb-2 border-b-2">
            {user.filiere?.name || '-'}
          </div>
        </div>

        <div className="flex items-center justify-end">
          <Image
            src={`/assets/img/filieres/${user.filiere?.id || 'info'}.png`}
            width={99}
            height={95}
            alt="Badge filière"
          />
        </div>
      </div>

      <div className="mt-8 mb-20">
        <BadgesList badges={filteredBadges} onSearch={setSearchTerm} />
      </div>
    </div>
  )
}
