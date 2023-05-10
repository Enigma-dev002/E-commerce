 import React from "react";
import "../Styles/MainOne.css"
import CountdownTimer from "./CountdownTimer";
import ProductComp from "./ProductComp";
import ProductDescComp from "./ProductDescComp";
import RedRectangle from "../images/RedRectangle.png";
import prod01 from "../images/Prod01.png";
import prod02 from "../images/Prod02.png";
import prod03 from "../images/Prod03.png";
import prod04 from "../images/Prod04.png";
import prod05 from "../images/Prod05.png";
import prod06 from "../images/Prod06.png";
import prod07 from "../images/Prod07.png";
import prod08 from "../images/Prod08.png";
import mobile from "../images/ProdCategory01.png";
import computer from "../images/ProdCategory02.png";
import smartwatch from "../images/ProdCategory03.png";
//import camera from "../images/ProdCategory04.png";
import headphone from "../images/ProdCategory05.png";
import gaming from "../images/ProdCategory06.png";
import TempImage from "../images/TemporaryImage.png";
export default function MainOne() {
    return (
        <div className="mainone">
            <img id="redrect" alt="RedRect." src={RedRectangle} />
            <h3>Today's</h3>
            <h2 className="flash">Flash Sales</h2>
            <div className="timer">
                <CountdownTimer
                    countdownTimestampMs={1690874312000} />
            </div>

            <div id="ProductComponent">
                <ProductComp
                    image={prod01}
                    discount={40}
                    proddesc={"HAVIT HV-G92 Gamepad"}
                    oldprice={'$160'}
                    newprice={'$120'}
                    prodrating={88}
                />
                <ProductComp
                    image={prod02}
                    discount={35}
                    proddesc={"AK-900 Wired Keyboard"}
                    oldprice={'$1160'}
                    newprice={'$960'}
                    prodrating={75}
                />
                <ProductComp
                    image={prod03}
                    discount={30}
                    proddesc={"IPS LCD Gaming Monitor"}
                    oldprice={'$400'}
                    newprice={'$370'}
                    prodrating={99}
                />
                <ProductComp
                    image={prod04}
                    discount={25}
                    proddesc={"S-Series Comfort Chair "}
                    oldprice={'$400'}
                    newprice={'$375'}
                    prodrating={99}
                />
            </div>
            <button className="viewallproducts" type="Button" >
                <h2 className="Btntext">View All Products</h2>
            </button>
            <img id="redrect" alt="RedRect." src={RedRectangle} />
            <h3>Categories</h3>
            <h2 className="flash">Browse By Categories</h2>
            <div id="ProductDescription">
                <ProductDescComp
                    image={mobile}
                    category={"Phones"} />
                <ProductDescComp
                    image={computer}
                    category={"Computers"} />
                <ProductDescComp
                    image={smartwatch}
                    category={"SmartWatch"} />
                <ProductDescComp
                    image={mobile}
                    category={"Phones"} />
                <ProductDescComp
                    image={headphone}
                    category={"HeadPhones"} />
                <ProductDescComp
                    image={gaming}
                    category={"Gaming"} />
            </div>
            <img id="redrect" alt="RedRect." src={RedRectangle} />
            <h3>This Month</h3>
            <h2 className="flash">Best Selling Products</h2>
            <button className="viewallbtn" type="Button" >
                <h2 className="Btntext">View All</h2>
            </button>
            <div id="ProductComponent">
                <ProductComp
                    image={prod05}
                    discount={40}
                    proddesc={"The north coat"}
                    oldprice={'$360'}
                    newprice={'$260'}
                    prodrating={65}
                />
                <ProductComp
                    image={prod06}
                    discount={35}
                    proddesc={"Gucci duffle bag"}
                    oldprice={'$1160'}
                    newprice={"$960"}
                    prodrating={65}
                />
                <ProductComp
                    image={prod07}
                    discount={30}
                    proddesc={"RGB liquid CPU Cooler"}
                    oldprice={"$170"}
                    newprice={"$160"}
                    prodrating={65}
                />
                <ProductComp
                    image={prod08}
                    discount={25}
                    proddesc={"Small BookSelf"}
                    newprice={"$360"}
                    prodrating={65}
                />
            </div>
            <div>
                <img alt="Nothing" src={TempImage} className="TempImage" />
            </div>
            <img id="redrect" alt="RedRect." src={RedRectangle} />
            <h3>Our Products</h3>
            <h2 className="flash">Explore Our Products</h2>
        </div>
    );
}