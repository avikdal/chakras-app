import React from "react";
import NavBar from "./NavBar"

function Header(){
    return (
        <div className="header">
            <img className="lotusHeader" src="https://media.istockphoto.com/id/472321225/vector/lotus-flower-buddhist-symbol.jpg?s=612x612&w=0&k=20&c=AyKHBlHp_RsbdDKF4g5L5k5lmzXCVkVn0qSC2THcyds=" alt="lotus flower" />
            <NavBar />
        </div>
    )
}

export default Header;