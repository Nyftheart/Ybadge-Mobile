import Image from 'next/image'
import { useState } from 'react'

export default function Searchbar({ value = '', onSearch = (string) => {} }) {
  const [searchTerm, setSearchTerm] = useState(value)

  const handleValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value
    setSearchTerm(newValue)
    onSearch(newValue)
  }

  const resetValue = () => {
    setSearchTerm('')
    onSearch('')
  }

  return (
    <div className="relative rounded-full px-8 w-full h-7 bg-[#BEBEBE] bg-opacity-50">
      <div className="absolute left-3 top-[6px]">
        <Image
          src="/assets/illustrations/search.svg"
          width={12}
          height={12}
          alt="Search icon"
        />
      </div>

      <input
        className="text-xs w-full bg-transparent text-white outline-none"
        type="text"
        placeholder="Rechercher"
        value={searchTerm}
        onChange={handleValueChange}
      />

      <div className="absolute right-2 top-[7px]" onClick={() => resetValue()}>
        <Image
          src="/assets/illustrations/close.svg"
          width={14}
          height={14}
          alt="Close icon"
        />
      </div>
    </div>
  )
}
