import React from "react";

import { getIconPath } from "@utils/navigation.service";

import { ReactSVG } from "react-svg";
import Memoji from "@assets/images/memoji.png";

import "@components/ui/footer/Footer.scss";

const Footer = () => {
  const openGithub = () => {
    window.open("https://github.com/urg0", "_blank");
  };
  const openLinkedin = () => {
    window.open("https://www.linkedin.com/in/urg0/", "_blank");
  };

  const openPersonalWebsite = () => {
    window.open("https://www.ulasrotindaguler.com/", "_blank");
  };

  return (
    <div className="footer-container">
      <img
        src={Memoji}
        alt="urg"
        className="avatar"
        onClick={openPersonalWebsite}
      />
      <footer className="footer">Copyright @2024 Ulas Rotinda Guler</footer>
      <ReactSVG
        src={getIconPath("linkedin")}
        className="linkedin-icon"
        onClick={openLinkedin}
      />
      <ReactSVG
        src={getIconPath("github")}
        className="github-icon"
        onClick={openGithub}
      />
    </div>
  );
};

export default Footer;
