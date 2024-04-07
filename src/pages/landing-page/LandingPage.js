import React from "react";
import { useNavigate } from "react-router-dom";

import Memoji from "@assets/images/memoji.png";

import "@pages/landing-page/LandingPage.scss";

const LandingPage = () => {
  const navigate = useNavigate();

  const openPersonalWebsite = () => {
    window.open("https://www.ulasrotindaguler.com/", "_blank");
  };

  return (
    <div className="landing-page-container">
      <h2 className="main-title">Welcome! 👋</h2>
      <h3 className="subtitle">I am Ulaş Rotinda Güler</h3>
      <img
        src={Memoji}
        alt="urg"
        className="memoji"
        onClick={openPersonalWebsite}
      />
      <p>
        Senior Computer Engineering Student at Bahcesehir University, Front-end
        Developer from Istanbul
      </p>
      <button className="launch-button" onClick={() => navigate("/home-page")}>
        Start Supply Bridge Case Study
      </button>
    </div>
  );
};

export default LandingPage;
