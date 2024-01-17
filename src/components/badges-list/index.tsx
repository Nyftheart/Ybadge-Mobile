import Searchbar from '../searchbar'
import { Badge } from '../../models/badge.model'
import Image from 'next/image'

export default function BadgesList({
  badges,
  onSearch,
}: {
  badges: Array<Badge>
  onSearch: (event: string) => void
}) {
  const handleSearch = (event: string) => {
    onSearch(event)
  }

  return (
    <>
      <div className="grid grid-cols-2">
        <p className="text-xl font-chillax font-medium">Ma collection</p>

        <Searchbar onSearch={handleSearch} />
      </div>

      {badges.length > 0 ? (
        <div className="grid grid-cols-2 gap-x-10 gap-y-4 mt-8">
          {badges.map((badge) => (
            <div className="w-full" key={badge.id}>
              <Image
                src="/assets/img/badge_template.png"
                width={200}
                height={208}
                alt="Badge placeholder"
              />

              <p className="mt-2 text-center">{badge.name}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center mt-40 text-xl text-white">Aucun résultat</p>
      )}
    </>
  )
}
