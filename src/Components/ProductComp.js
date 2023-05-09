import React from "react";
import heart from "../images/FillHeart.png"
import eye from "../images/Filleye.png"
import discountImg from "../images/DiscountFrame.png"
import "../Styles/ProductComp.css";
import ReactStars from "react-rating-stars-component";
export default function ProductComp(props) {
    return (
        <>
            <div>
                <div id="productcomponent">
                    <div className="BackFrame">
                        <img className="discountbar" src={discountImg} alt="Disc" />
                        <h3 id="discount">-{props.discount}%</h3>
                        <img src={props.image} className="mainprodimg" alt="" />
                        <button className="FavouritesButton">
                            <img alt="FavouritesImage" src={heart} />
                        </button>
                        <button className="ViewButton">
                            <img alt="ViewImage" src={eye} />
                        </button>
                    </div>

                </div>
                <h2 className="ProdDesc">{props.proddesc}</h2>
                <h2 className="oldprice">${props.oldprice}</h2>
                <h2 className="newprice">${props.newprice}</h2>
                <ReactStars />
                <h2 className="ratingnumber">({props.prodrating})</h2>
            </div>
        </>
    );
}