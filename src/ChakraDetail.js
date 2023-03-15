import React from "react";

function ChakraDetail({ chakra }) {

    // const { name, english_name, image, location, color, element, crystals, yoga } = chakra
    
    
    return (
            <div key={chakra.id} className="chakraTile">
                <img src={chakra.image} alt={chakra.name} />
                <h2>Sanskrit Name: {chakra.name}</h2>
                <h2>English Name: {chakra.english_name}</h2>
                <span>
                 <p>Location in Body: {chakra.location}</p>
                 <p>Supportive Yoga Poses: {chakra.yoga}</p>
                 <p>Element: {chakra.element}</p>
                 <p>Color: {chakra.color}</p>
                </span>
            </div>
    );
}

export default ChakraDetail;