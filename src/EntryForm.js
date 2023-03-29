import React, { useState } from "react";

function EntryForm({ entries, setEntries }){
    const [formData, setFormData] = useState({
        date: "",
        entry: "",
    });

    let handleChange = (e) => {
      let name = e.target.name;
      let value = e.target.value;
      setFormData({
        ...formData,
        [name]: value,
      });
    }

    let handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:3000/journalEntries', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        })
        .then((r) => r.json())
        .then((entry) => {
            setEntries([...entries, entry])
            setFormData({
                date: "",
                entry: "",
            })
        })
    }

    return (
        <div className="entry-form">
        <form onSubmit={handleSubmit}>
            <input
                onChange={handleChange}
                type="text"
                name="date"
                placeholder="date"
                value={formData.date}
            />
            <input
                onChange={handleChange}
                type="text"
                name="entry"
                placeholder="Journal Entry"
                value={formData.entry}
            />
            <button className="button" type="submit">Add Entry</button>
        </form>
        </div>
    );
}

export default EntryForm;