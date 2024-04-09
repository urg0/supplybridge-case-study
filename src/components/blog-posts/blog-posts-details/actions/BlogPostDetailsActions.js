import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useMutation } from "@tanstack/react-query";
import { addBookmark, deletePost, queryClient } from "@utils/api.service";
import { getIconPath } from "@utils/navigation.service";

import toast, { Toaster } from "react-hot-toast";
import { TOASTER_DEFAULT_STYLES } from "@root/constants/toasterDefaultStyles";

import EditPostModal from "@components/edit-post-modal/EditPostModal";

import { ReactSVG } from "react-svg";

import "@components/blog-posts/blog-posts-details/actions/BlogPostDetailsActions.scss";

const BlogPostDetailsActions = ({ id, isBookmarked, blogPost }) => {
  const navigate = useNavigate();

  const [clapCount, setClapCount] = useState(0);
  const [bookmark, setBookmark] = useState(isBookmarked);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

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

  const handleDeletePost = async () => {
    try {
      await deletePost({ id });

      queryClient.invalidateQueries("news");
      navigate("/home");
      toast.success("Post succesfully deleted.", TOASTER_DEFAULT_STYLES);
    } catch (error) {
      toast.error(
        "An error occurred while deleting the post:",
        TOASTER_DEFAULT_STYLES
      );
    }
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
        </div>
        <div className="actions-wrapper">
          <ReactSVG
            src={getIconPath(`${bookmark ? "bookmark2" : "bookmark"}`)}
            className="action-icon"
            onClick={toggleBookmark}
          />
          <ReactSVG
            src={getIconPath("edit")}
            className="edit-icon"
            onClick={() => setIsEditModalOpen(true)}
          />
          <ReactSVG
            src={getIconPath("delete")}
            className="delete-icon"
            onClick={handleDeletePost}
          />
        </div>
        <EditPostModal
          isOpen={isEditModalOpen}
          onClose={() => setIsEditModalOpen(false)}
          blogPost={blogPost}
        />
      </div>
    </>
  );
};

export default BlogPostDetailsActions;
