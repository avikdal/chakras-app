import React, { useEffect, useState } from "react";
import ChakraDetail from "./ChakraDetail";
// import { Link } from "react-router-dom";


function Chakras(){
    const [chakras, setChakras] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/chakraData')
        .then(r => r.json())
        .then(chakra => setChakras(chakra))
    }, [])

    const chakraFlower = chakras.map((chakra) => {
        return (
            <ChakraDetail key={chakra.id} chakra={chakra} />
        )
    })

    return(
        <section className="chakras">
            {/* <h1 style={{ color:"orangered" }}>
                Chakras
            </h1> */}
            <div className="chakraTiles">{chakraFlower}</div>
        </section>
    )
}

export default Chakras;