import React, { useEffect, useState } from "react";
import ChakraTile from "./ChakraTile";
import ChakraForm from "./ChakraForm";

function Chakras(){
    const [chakras, setChakras] = useState([])
    const [selectedChakra, setSelectedChakra] = useState(null)

    useEffect(() => {
        fetch('http://localhost:3000/chakraData')
        .then(r => r.json())
        .then(chakra => setChakras(chakra))
    }, [])

    function handleSelectedChakra(chakra){
        setSelectedChakra(chakra)
    }
    // console.log("selected chakra in chakras component", selectedChakra)

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

    const chakra = chakras.map((chakra) => <ChakraTile key={chakra.id} chakra={chakra} handleSelectedChakra={handleSelectedChakra}/>)

    return(
        <div>
            { selectedChakra === null ? null : <ChakraForm chakra={selectedChakra} handleChangeForm={handleChangeForm} handleUpdatedChakra={handleUpdatedChakra}/> }
            <section className="chakras">
                <div className="chakraTiles">{chakra}</div>
            </section>
        </div>
    )
}

export default Chakras;