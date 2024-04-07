import React, { useState } from "react";
import { useMutation } from "@tanstack/react-query";

import { getIconPath } from "@utils/navigation.service";
import { addBookmark, queryClient } from "@utils/api.service";

import toast, { Toaster } from "react-hot-toast";
import { TOASTER_DEFAULT_STYLES } from "@root/constants/toasterDefaultStyles";

import AuthorCard from "@components/ui/card/AuthorCard";
import BlogPostContent from "./blog-post-content/BlogPostContent";
import ErrorMessage from "@components/ui/error/ErrorMessage";

import { ReactSVG } from "react-svg";

import "@components/blog-posts/blog-post-item/BlogPostItem.scss";

const BlogPostItem = ({ newsItem }) => {
  const { id, title, date, text, image, fullName, job, avatar, isBookmarked } =
    newsItem;

  const [bookmark, setBookmark] = useState(isBookmarked);

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
        </div>
        <BlogPostContent id={id} title={title} text={text} image={image} />
      </div>
      {isError && <ErrorMessage refreshButton={true} />}
    </>
  );
};

export default BlogPostItem;
