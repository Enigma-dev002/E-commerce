import React from "react";
import "../Styles/ProductDescComp.css"

export default function ProductDescComp(props) {
    return (
        <>
            <div className="DescComp">
                <div id="Border">
                    <img alt="Product Desc" id="ProductImage" src={props.image} />
                    <div id="categorytext">
                        <h2 id="Category">{props.category}</h2>
                    </div>
                </div>
            </div>
        </>
    );
}