import React from "react";
import "../Styles/SidebarComp.css"
import arrow from "../images/arrow.png"
export default function SidebarComp(){
    return(
        <div className="main">
            <h3>Women's Fashion<img className="arrow" alt="Arrow" src={arrow}/></h3>
            <h3>Men’s Fashion<img className="arrow" alt="Arrow " src={arrow}/></h3>
            <h3>Electronics</h3>
            <h3>Home & Lifestyle</h3>
            <h3>Medicine</h3>
            <h3>Sports & Outdoor</h3>
            <h3>Baby’s & Toys</h3>
            <h3>Groceries & Pets</h3>
            <h3>Health & Beauty</h3>
        </div>
    );
}