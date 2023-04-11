import React from 'react'

function JournalSearchBar({ search, setSearch }) {
    
    function handleChange(e){
        setSearch(e.target.value)
    }

  return (
    <div>
    <div className="journalSearch">
      <form>
        <input
        type="text"
        placeholder="Search through previous journal entries"
        value={search}
        onChange={handleChange}
        />
        <button className="button">Search</button>
      </form>
    </div>
    </div>
  )
}

export default JournalSearchBar
