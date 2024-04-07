import React, { useContext } from "react";

import { DarkModeContext } from "@root/context/DarkModeContext";

import { getIconPath } from "@utils/navigation.service";

import test from "@assets/images/test.png";
import { ReactSVG } from "react-svg";
import "@components/ui/footer/Footer.scss";

const Footer = () => {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

  const openGithub = () => {
    window.open("https://github.com/urg0", "_blank");
  };
  const openLinkedin = () => {
    window.open("https://www.linkedin.com/in/urg0/", "_blank");
  };

  return (
    <div className={darkMode ? "footer-container" : "footer-container light"}>
      <img src={test} alt="urg" className="avatar" />
      <footer className="footer">Copyright @2023 Ulas Rotinda Guler</footer>
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
