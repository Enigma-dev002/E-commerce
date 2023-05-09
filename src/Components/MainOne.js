import React from "react";
import "../Styles/MainOne.css"
import CountdownTimer from "./CountdownTimer";
import ProductComp from "./ProductComp";
import RedRectangle from "../images/RedRectangle.png";
import prod01 from "../images/Prod01.png";
import prod02 from "../images/Prod02.png";
import prod03 from "../images/Prod03.png";
import prod04 from "../images/Prod04.png";
export default function MainOne() {
    return (
        <div className="mainone">
            <img id="redrect"alt="RedRect." src={RedRectangle}/>
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
            oldprice={160}
            newprice={120}
            prodrating={88}
            />
            <ProductComp
            image={prod02}
            discount={35}
            proddesc={"AK-900 Wired Keyboard"}
            oldprice={1160}
            newprice={960}
            prodrating={75}
            />
            <ProductComp
            image={prod03}
            discount={30}
            proddesc={"IPS LCD Gaming Monitor"}
            oldprice={400}
            newprice={370}
            prodrating={99}
            />
            <ProductComp
            image={prod04}
            discount={25}
            proddesc={"S-Series Comfort Chair "}
            oldprice={400}
            newprice={375}
            prodrating={99}
            />
            </div>
            <button className="viewallproducts" type="Button" >View</button>
           
        </div>
    );
}