import React from "react";
import icon from "../../../assets/images/bblb.png";
import backgroundImage from "../../../assets/images/hero-background.jpg";
import "./index.styling.css";

const Hero = () => {
  return (
    <div
      className="heroContainer"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="triangleContainer">
        <div className="innerPicko">
          <div className="iconContainer">
            <img src={icon} alt="Icon" />
          </div>
        </div>
        <div className="textContainer">
          <h2 className="heroTitle">
            The Bridge to your Success in Investment
          </h2>
          <p className="additionalText">
            A good investor knows how much he could make, a great investor knows
            how much he could lose. Let us help you bridge the gap between
            success and maximum profit - Broker Bridge team.
          </p>
        </div>
      </div>

    </div>
  );
};

export default Hero;
