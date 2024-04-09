import React, { useState } from "react";
import { useMutation } from "@tanstack/react-query";

import { getIconPath } from "@utils/navigation.service";
import { addBookmark, deletePost, queryClient } from "@utils/api.service";

import toast, { Toaster } from "react-hot-toast";
import { TOASTER_DEFAULT_STYLES } from "@root/constants/toasterDefaultStyles";

import AuthorCard from "@components/ui/card/AuthorCard";
import BlogPostContent from "./blog-post-content/BlogPostContent";
import ErrorMessage from "@components/ui/error/ErrorMessage";
import EditPostModal from "@components/edit-post-modal/EditPostModal";

import { ReactSVG } from "react-svg";

import "@components/blog-posts/blog-post-item/BlogPostItem.scss";

const BlogPostItem = ({ newsItem }) => {
  const { id, title, date, text, image, fullName, job, avatar, isBookmarked } =
    newsItem;

  const [bookmark, setBookmark] = useState(isBookmarked);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  /* BUG: Use optimistic updates */

  const { mutate, isPending, isError } = useMutation({
    mutationFn: addBookmark,
    onSuccess: () => {
      setBookmark((prevState) => !prevState);
      queryClient.invalidateQueries({
        queryKey: ["bookmarkedNews"],
      });
    },
  });

  const toggleBookmark = () => {
    const message = bookmark
      ? "Bookmark successfully removed."
      : "Bookmark successfully added.";
    mutate({ id, bookmark: !isBookmarked });
    toast.success(message, TOASTER_DEFAULT_STYLES);
  };

  const handleDeletePost = async () => {
    try {
      await deletePost({ id });

      queryClient.invalidateQueries("news");
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
      <div className="horizontal-news-container">
        <div className="author-wrapper">
          <AuthorCard
            avatar={avatar}
            fullName={fullName}
            job={job}
            date={date}
          />
          <ReactSVG
            src={getIconPath(`${bookmark ? "bookmark2" : "bookmark"}`)}
            className="bookmark-icon"
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
        <BlogPostContent id={id} title={title} text={text} image={image} />
      </div>
      {isError && <ErrorMessage refreshButton={true} />}
      <EditPostModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        blogPost={newsItem}
      />
    </>
  );
};

export default BlogPostItem;
