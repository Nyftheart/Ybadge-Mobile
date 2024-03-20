import React, { useState } from 'react'

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('')

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value)
  }

  const handleSearch = () => {
    // Mettez en œuvre la logique de recherche en fonction de searchQuery
    console.log(`Recherche en cours : ${searchQuery}`)
  }

  return (
    <div className="flex items-center">
      <input
        type="text"
        placeholder="Rechercher..."
        value={searchQuery}
        onChange={handleInputChange}
        className="border rounded-l py-2 px-4 outline-none focus:ring focus:border-blue-300"
      />
      <button
        onClick={handleSearch}
        className="bg-blue-500 text-white py-2 px-4 rounded-r hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
      >
        Rechercher
      </button>
    </div>
  )
}

export default SearchBar
