import React, { useEffect, useState } from "react";
import JournalEntryForm from "./JournalEntryForm";
import JournalSearchBar from "./JournalSearchBar";


function Journal(){
    const [entries, setEntries] = useState([])
    const [search, setSearch] = useState("")

    useEffect(() => {
        setTimeout(() => {
            fetch('http://localhost:3000/journalEntries')
            .then(r => r.json())
            .then(entries => setEntries(entries))
        }, 1000)
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
            <h3 style={{ color: "black", backgroundColor: "lemonchiffon" }} className="journalPrompt"> 
                You are encouraged to try different techniques to become more aware of your chakras, here is a space to share your insights and findings
            </h3>
            <JournalEntryForm entries={entries} setEntries={setEntries}/>
            <JournalSearchBar search={search} setSearch={setSearch} />
            <div className="journalEntries">
                {entryList}
            </div>
        </section>
    )
}

export default Journal;