import React, { useState } from 'react'

function SearchBar({ search, setSearch }) {
    // const [search, setSearch] = useState("")
    
    function handleChange(e){
        setSearch(e.target.value)
    }

  return (
    <div>
      <form>
        <input
        type="text"
        placeolder="search"
        value={search}
        onChange={handleChange}
        />
        <button>Search</button>
      </form>
    </div>
  )
}

export default SearchBar
