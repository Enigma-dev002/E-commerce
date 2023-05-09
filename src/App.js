import React from "react";
import HeaderComp from "./Components/HeaderComp"
import LowerNavbarComp from "./Components/LowerNavbarComp";
import SidebarComp from "./Components/SidebarComp";
import MainOne from "./Components/MainOne";
import ImageSlider from "./Components/ImageSlider";
import "./Styles/App.css"

function App() {
  return (
    <div id="WEBSITE">
      <HeaderComp />
      <LowerNavbarComp />
      <SidebarComp />
      <ImageSlider />
      <MainOne />
    </div>
  );
}

export default App;
