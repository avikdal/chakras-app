import React, { useEffect, useState } from "react";
import Form from "./Form";

function Journal(){
    const [entries, setEntries] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/journalEntries')
        .then(r => r.json())
        .then(entries => setEntries(entries))
    }, [])

    const entryList = entries.map((entry) => {
        return (
            <div key={entry.id}>
                <h5>{entry.date}</h5>
                <p>{entry.entry}</p>
            </div>
        )
    })


    return (
        <section id="about">
            <h1 style={{ color: "green" }}> 
                You are encouraged to try different techniques to become more aware of your chakras, here is a space to share you insights and findings
            </h1>
            <Form entries={entries} setEntries={setEntries}/>
            <div>
                {entryList}
            </div>
        </section>
    )
}

export default Journal;