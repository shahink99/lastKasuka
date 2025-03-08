import React from "react";

// components ----

import Header from "./Components/Header/Header";
import MainHeadr from "./Components/MainHeader/MainHeadr";
import Introduction from "./Components/Introduction/Introduction";
import CombinedComponent from "./Components/CombinedComponet/CombinedComponet";
import Services from "./Components/Services/Services";
import BackgroundSection from "./Components/BackGorundSection/BackGorundSection";
import Portfolio from "./Components/Portfolio/Portfolio";
import TwoColumnComponent from "./Components/Advanced/Advanced";
import ProfileSlider from "./Components/ProfileSlider/ProfileSlider";
import TeamComponent from "./Components/Team/Team";
import ContactUsComponent from "./Components/ContactUs/ContactUs";
import FooterComponent from "./Components/Footer/Footer";

// Styles --

import "./styles/grid.css";
import './styles/responsive.css'
import "./App.css";

function App() {
  return (
    <>
      {/* <Header /> */}
      <MainHeadr />
      <div className="container">
        <Introduction />
        <CombinedComponent />
        <Services />
      </div>
      <BackgroundSection />
      <div className="container">
        <Portfolio />
        <TwoColumnComponent />
      </div>
      <ProfileSlider />
      <div className="container">
        <TeamComponent />
        <ContactUsComponent />
      </div>
      <FooterComponent />
    </>
  );
}

export default App;
