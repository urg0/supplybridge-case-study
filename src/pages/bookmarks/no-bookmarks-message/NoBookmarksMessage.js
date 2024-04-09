import React from "react";
import { useNavigate } from "react-router-dom";

import { getIconPath } from "@utils/navigation.service";
import { ReactSVG } from "react-svg";

import Button from "@components/ui/button/Button";

import "@pages/bookmarks/no-bookmarks-message/NoBookmarksMessage.scss";

const NoBookmarksMessage = () => {
  const navigate = useNavigate();

  return (
    <div className="no-bookmark-container">
      <ReactSVG src={getIconPath("data-not-found")} className="error-icon" />
      <div className="error-message">No boookmark found.</div>
      <p className="error-info">
        You haven't bookmarked any posts yet. <br /> Explore the latest updates
        and save the ones you find interesting.
      </p>
      <Button
        label="Discover the Latest News"
        icon={getIconPath("news")}
        className="large blue"
        onClick={() => navigate("/home")}
      />
    </div>
  );
};

export default NoBookmarksMessage;
