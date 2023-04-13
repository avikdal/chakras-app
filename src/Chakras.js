import React, { useEffect, useState } from "react";
import ChakraTile from "./ChakraTile";
import ChakraForm from "./ChakraForm";
import ChakraCrystalSearchForm from "./ChakraCrystalSearchForm";

function Chakras(){
    const [chakras, setChakras] = useState([])
    const [selectedChakra, setSelectedChakra] = useState(null)
    const [search, setSearch] =useState("")

    useEffect(() => {
        fetch('http://localhost:3000/chakraData')
        .then(r => r.json())
        .then(chakra => setChakras(chakra))
    }, [])

    function handleSelectedChakra(chakra){
        setSelectedChakra(chakra)
    }

    function handleChangeForm(name, value){
        setSelectedChakra({
          ...selectedChakra,
          [name]: value,
        })
    }

    function handleUpdatedChakra(updatedChakra){
        let updatedChakras = chakras.map(chakra => chakra.id === updatedChakra.id ? updatedChakra : chakra)
        setChakras(updatedChakras)
        setSelectedChakra(null)
    }

    const searchedChakras = chakras.filter(chakra => chakra.crystals.toUpperCase().includes(search.toUpperCase()))

    const chakra = searchedChakras.map((chakra) => <ChakraTile key={chakra.id} chakra={chakra} handleSelectedChakra={handleSelectedChakra}/>)

    return(
        <div>
            { selectedChakra === null ? null : <ChakraForm chakra={selectedChakra} handleChangeForm={handleChangeForm} handleUpdatedChakra={handleUpdatedChakra}/> }
            <ChakraCrystalSearchForm search={search} handleSearch={setSearch}/>
            <section className="chakras">
                <div className="chakraTiles">{chakra}</div>
            </section>
        </div>
    )
}

export default Chakras;