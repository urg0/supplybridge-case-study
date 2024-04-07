import React from "react";

import IconLink from "@components/ui/link/IconLink";
import Button from "@components/ui/button/Button";

import { getIconPath } from "@utils/navigation.service";
import { NAVIGATION_LINKS } from "@config/navigationConfig";

import AppImages from "@root/constants/assetManager/AppImages";

import "@components/main-navigation/MainNavigation.scss";

const Logo = AppImages.GetImage("logo");

const MainNavigation = () => {
  return (
    <div className="navigation-container">
      <img src={Logo} alt="supplybridge-logo" className="logo" />
      <nav className="navigation-links">
        {NAVIGATION_LINKS.map(({ path, icon, label }) => (
          <IconLink
            key={path}
            path={path}
            icon={getIconPath(icon)}
            title={label}
          />
        ))}
      </nav>
      <Button
        label="Create new post"
        icon={getIconPath("add")}
        className="medium orange"
      />
    </div>
  );
};

export default MainNavigation;
