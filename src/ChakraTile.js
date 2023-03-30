import React from "react";

function ChakraTile({ chakra }) {

    return (
            <div key={chakra.id} className="chakraTile">
                <img src={chakra.image} alt={chakra.name} />
                <div>
                <h4>Sanskrit Name: {chakra.name}</h4>
                <h4>English Name: {chakra.english_name}</h4>
                <span>
                 <p>Location in Body: {chakra.location}</p>
                 <p>Supportive Yoga Poses: {chakra.yoga}</p>
                 <p>Element: {chakra.element}</p>
                 <p>Color: {chakra.color}</p>
                </span>
                </div>
            </div>
    );
}

export default ChakraTile;