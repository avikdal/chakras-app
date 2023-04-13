import React from 'react'

function ChakraForm({ chakra, handleChangeForm, handleUpdatedChakra }) {

    const { color, crystals, yoga } = chakra

    function handleSubmit(e){
        e.preventDefault()
        fetch(`http://localhost:3000/chakraData/${chakra.id}`, {
        method: "PATCH", 
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(chakra),
        })
        .then(r => r.json())
        .then(chakra => handleUpdatedChakra(chakra))
    }

  return (
    <div>
      <form className="entry-form" onSubmit={handleSubmit}>
            <input
                type="text"
                name="color"
                placeholder="Color"
                value={color}
                onChange={(e) => handleChangeForm(e.target.name, e.target.value)}
            />
            <input
                type="text"
                name="crystals"
                placeholder="Crystals"
                value={crystals}
                onChange={(e) => handleChangeForm(e.target.name, e.target.value)}
            />
            <input
                type="text"
                name="yoga"
                placeholder="Asanas that are supportive"
                value={yoga}
                onChange={(e) => handleChangeForm(e.target.name, e.target.value)}
            />
            <button className="button" type="submit">Update Chakra</button>
      </form>
    </div>
  )
}

export default ChakraForm 