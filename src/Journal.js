import React, { useEffect, useState } from "react";
import EntryForm from "./EntryForm";
import SearchBar from "./SearchBar";


function Journal(){
    const [entries, setEntries] = useState([])
    const [search, setSearch] = useState("")

    useEffect(() => {
        fetch('http://localhost:3000/journalEntries')
        .then(r => r.json())
        .then(entries => setEntries(entries))
    }, [])

    const comparingSearch = entries.filter(entry => entry.entry.includes(search))

    const entryList = comparingSearch.map((entry) => {
        return (
            <div key={entry.id} className="entry">
                <h5>{entry.date}</h5>
                <p>{entry.entry}</p>
            </div>
        )
    })

    return (
        <section className="journal">
            <br />
            <h3 style={{ color: "black" }} className="journalPrompt"> 
                You are encouraged to try different techniques to become more aware of your chakras, here is a space to share your insights and findings
            </h3>
            <EntryForm entries={entries} setEntries={setEntries}/>
            <SearchBar search={search} setSearch={setSearch} />
            <div className="journalEntries">
                {entryList}
            </div>
        </section>
    )
}

export default Journal;