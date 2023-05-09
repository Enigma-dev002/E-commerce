import React from "react";
import "../Styles/HeaderComp.css"

export default function HeaderComp() {
    return (
        <div className="head">
            <h1>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! &nbsp;&nbsp;
                <button className="ShopNowBtn">ShopNow</button>
            </h1>
            <select className="Dropdown">
                <option >English</option>
                <option >Hindi</option>
                <option >French</option>
                <option >German</option>
                <option >Japanese</option>
                <option >Chinese</option>
            </select>

        </div>
    );
}