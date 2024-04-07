import React from "react";
import { NavLink } from "react-router-dom";

import { ReactSVG } from "react-svg";

import "@components/ui/link/IconLink.scss";

const IconLink = ({ title, icon, path, id = undefined }) => {
  return (
    <NavLink
      to={path}
      className={({ isActive }) => (isActive ? "link-active" : "link")}
    >
      <ReactSVG src={icon} className="icon" />
      <span>{title}</span>
    </NavLink>
  );
};

export default IconLink;
