import React from "react";  

function Home(){
    return(
        <section id="home">
            <h1 style={{ color: "indigo" }}>Chakras and How to Support your Rainbow</h1>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAE6yK-xEqig464nNUBcPe7iQ8k0L78ylz5g&usqp=CAU" alt="chakra rainbow iimage" />
            <div className="homePageChakraParagraph">
                <p>The word "chakra" trasnlates literally to "wheel" in Sanskrit.</p>
                <p>Chakras where first recorded between 1500 and 500 BC in the most ancient Hindu scriptures, called Vedas. The chakras are energy centers within the astral body. The astral body is the energy body residing inside our physical body. Each chakra corresponds to specific organs, as well as physical, emotional, phsycological, and spiritual states of being. It is believed, that when in balance, with energy free flowing through the chakras, a person will have good-health. However, if there is blockage or congestion within the chakras it can lead to physcial, psychological, and emotinal disorders.</p>
                <p>This app is meant to share information on the chakras and provide some tools for you to support your chakra system.</p>
            </div>
        </section>
    )
}

export default Home;