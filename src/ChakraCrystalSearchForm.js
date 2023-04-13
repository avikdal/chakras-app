import React from 'react'

function ChakraCrystalSearchForm({ search, handleSearch }) {

    function handleChange(e){
        handleSearch(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault()
        
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
        type="text"
        placeholder="Find chakras associated with crystals"
        value={search}
        onChange={handleChange}
        />
        <button className="button">Search</button>
      </form>
    </div>
  )
}

export default ChakraCrystalSearchForm