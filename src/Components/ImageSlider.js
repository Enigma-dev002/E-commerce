import ad1 from "../images/ad01.png";
import ad2 from "../images/ad02.jpg";
import ad3 from "../images/ad03.jpg";
import ad4 from "../images/ad04.jpg";
import ad5 from "../images/ad05.jpg";
import Carousel from "nuka-carousel";
import "../Styles/ImageSlider.css"

const slideimg =[ad1,ad2,ad3,ad4,ad5];
const parameters={
  autoplay : true,
  wrapAround : true,
  autoplayInterval : 4000,
  DefaultControlsConfig :{
    containerClassName : 'containerClassName'
  }
}
function ImageSlider() {
  return (
    <>
      <div className="App">
        <Carousel {...parameters}>
          {
            slideimg.map((n)=>
            <img src={n} alt="Slider Images"/>)
          }
        </Carousel>
      </div>
    </>
  );
}
export default ImageSlider;
