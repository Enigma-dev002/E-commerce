import React from "react";
import "../Styles/LowerNavbarComp.css"
import srch from "../images/Search.png"
import fav from "../images/Favourites.png"
import cart from "../images/Cart.png"
export default function LowerNavbarComp() {
    return (
        <div className="LowerNavbar">
            <h1 id='ex'>Exclusive</h1>
            <button className="home">Home</button>
            <button className="contact">Contact</button>
            <button className="about">About</button>
            <button className="signup">SignUp</button>
            <input type="search" placeholder="Search" className="srch" />
            <button className="srchbtn"> <img className="searchimg" alt="SearchImage" src={srch} /></button>
            <button className="favbtn"> <img className="favimg" alt="FavouritesImage" src={fav} /></button>
            <button className="cartbtn"> <img className="cartimg" alt="CartImage" src={cart} /></button>
        </div>
        
    );
}