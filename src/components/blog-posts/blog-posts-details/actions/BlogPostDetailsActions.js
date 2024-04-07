import React, { useState } from "react";

import { useMutation } from "@tanstack/react-query";
import { addBookmark } from "@utils/api.service";
import { getIconPath } from "@utils/navigation.service";

import toast, { Toaster } from "react-hot-toast";
import { TOASTER_DEFAULT_STYLES } from "@root/constants/toasterDefaultStyles";

import { ReactSVG } from "react-svg";

import "@components/blog-posts/blog-posts-details/actions/BlogPostDetailsActions.scss";

const BlogPostDetailsActions = ({ id, isBookmarked }) => {
  const [clapCount, setClapCount] = useState(0);
  const [bookmark, setBookmark] = useState(isBookmarked);

  const { mutate, isPending: isBookmarkPending } = useMutation({
    mutationFn: addBookmark,
    onSuccess: () => {
      setBookmark((prevState) => !prevState);
    },
    onError: () => {
      toast.error("Something went wrong", TOASTER_DEFAULT_STYLES);
    },
  });

  const toggleBookmark = () => {
    const message = bookmark
      ? "Bookmark successfully removed."
      : "Bookmark successfully added.";

    mutate({ id, bookmark: !isBookmarked });
    toast.success(message, TOASTER_DEFAULT_STYLES);
  };

  const clapHandler = () => {
    setClapCount((prevState) => prevState + 1);
  };

  return (
    <>
      <Toaster />
      <div className="news-actions-container">
        <div className="actions-wrapper">
          <div className="action-container">
            <ReactSVG
              src={getIconPath("clap")}
              className="clap-icon"
              onClick={clapHandler}
            />
            <span className="count">{clapCount}</span>
          </div>
          {/* <div className="action-container">
            <ReactSVG src={getIconPath("message")} className="message-icon" />
            <span className="count">0</span>
          </div> */}
        </div>
        <div className="actions-wrapper">
          <ReactSVG
            src={getIconPath(`${bookmark ? "bookmark2" : "bookmark"}`)}
            className="action-icon"
            onClick={toggleBookmark}
          />
          <ReactSVG src={getIconPath("share")} className="action-icon" />
          <ReactSVG src={getIconPath("more")} className="action-icon" />
        </div>
      </div>
    </>
  );
};

export default BlogPostDetailsActions;
