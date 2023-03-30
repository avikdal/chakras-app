import React, { useEffect, useState } from "react";
import EntryForm from "./EntryForm";

function Journal(){
    const [entries, setEntries] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/journalEntries')
        .then(r => r.json())
        .then(entries => setEntries(entries))
    }, [])

    const entryList = entries.map((entry) => {
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
            <div className="journalEntries">
                {entryList}
            </div>
        </section>
    )
}

export default Journal;