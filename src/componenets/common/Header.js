import React from "react";
import "../../styling/header.css";
import BBLogo from "../../assets/images/bblb.png";

const Header = () => {
  return (
    <div className="header-container">
      <img src={BBLogo} className="bb-logo" />
    </div>
  );
};
export default Header;
