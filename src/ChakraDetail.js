import React from "react";

function ChakraDetail({ chakra }) {

    // const { name, english_name, image, location, color, element, crystals, yoga } = chakra
    
    
    return (
            <div key={chakra.id} to={`/chakras/${chakra.id}`} className="chakraTile">
                <section>
                    <img src={chakra.image} alt={chakra.name} />
                </section>
                <ul>
                    <h2>Sanskrit Name: {chakra.name}</h2>
                    <h2>English Name: {chakra.english_name}</h2>
                </ul>
                <ul>
                 <p>Location in Body: {chakra.location}</p>
                 <p>Supportive Yoga Poses: {chakra.yoga}</p>
                 <p>Element: {chakra.element}</p>
                 <p>Color: {chakra.color}</p>
                </ul>
            </div>
    );
}

export default ChakraDetail;