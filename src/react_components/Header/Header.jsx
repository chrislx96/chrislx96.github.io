import React from "react";
import facebook from "../../assets/img/facebook.png";
import github from "../../assets/img/github.png";
import linkedin from "../../assets/img/linkedin.png";
import BootstrapNav from "./Components/BootstrapNav.jsx";
import SocialMediaItem from "./Components/SocialMediaItem.jsx";
import Toggler from "./Components/Toggler.jsx";

const Header = () => (
  <header>
    <nav className="navbar navbar-expand-lg navbar-dark">
      <span className="navbrand">S.S.</span>
      <Toggler/>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <BootstrapNav/>
        <span className="navbar-right">
          <SocialMediaItem img={facebook}>
            {"https://www.facebook.com"}
          </SocialMediaItem>
          <SocialMediaItem img={github}>{"https://github.com"}</SocialMediaItem>
          <SocialMediaItem img={linkedin}>
            {"https://www.linkedin.com"}
          </SocialMediaItem>
        </span>
      </div>
    </nav>
  </header>
);

export default Header;
