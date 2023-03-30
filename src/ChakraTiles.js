import React, { useEffect, useState } from "react";
import ChakraTile from "./ChakraTile";


function ChakraTiles(){
    const [chakras, setChakras] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/chakraData')
        .then(r => r.json())
        .then(chakra => setChakras(chakra))
    }, [])

    const chakra = chakras.map((chakra) => {
        return (
            <ChakraTile key={chakra.id} chakra={chakra} />
        )
    })

    return(
        <section className="chakras">
            <div className="chakraTiles">{chakra}</div>
        </section>
    )
}

export default ChakraTiles;