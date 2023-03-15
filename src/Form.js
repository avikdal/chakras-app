import React, { useState } from "react";

function Form({ entries, setEntries }){
    const [form, setForm] = useState({});

    let handleChange = (e) => {
      let name = e.target.name;
      let value = e.target.value;
      setForm({
        ...form,
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
            body: JSON.stringify(form),
        })
        .then((r) => r.json())
        .then((form) => setEntries([form, ...entries]))
        // how do I reset the form after submission? setForm({})
    }

    return (
        <div className="entry-form">
        <form onSubmit={handleSubmit}>
            <input
                onChange={handleChange}
                type="text"
                name="date"
                placeholder="Date"
            />
            <input
                onChange={handleChange}
                type="text"
                name="entry"
                placeholder="Journal Entry"
            />
            <button className="button" type="submit">Add Entry</button>
        </form>
        </div>
    );
}

export default Form;