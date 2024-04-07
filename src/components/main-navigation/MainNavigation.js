import React, { useState } from "react";

import IconLink from "@components/ui/link/IconLink";
import Button from "@components/ui/button/Button";
import AddPostModal from "@components/add-post-modal/AddPostModal";

import { getIconPath } from "@utils/navigation.service";
import { NAVIGATION_LINKS } from "@config/navigationConfig";

import AppImages from "@root/constants/assetManager/AppImages";

import "@components/main-navigation/MainNavigation.scss";

const Logo = AppImages.GetImage("logo");

const MainNavigation = () => {
  const [isAddPostModalOpen, setIsAddPostModalOpen] = useState(false);

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
        onClick={() => setIsAddPostModalOpen(true)}
      />
      <AddPostModal
        isOpen={isAddPostModalOpen}
        onClose={() => setIsAddPostModalOpen(false)}
      />
    </div>
  );
};

export default MainNavigation;
