import React from "react";

import { useQuery } from "@tanstack/react-query";
import { eventsUrl, fetchData } from "@utils/api.service";

import Title from "@components/ui/title/Title";
import BlogPostItem from "@components/blog-posts/blog-post-item/BlogPostItem";

import NoBookmarksMessage from "./no-bookmarks-message/NoBookmarksMessage";
import SkeletonNew from "@components/ui/skeleton/SkeletonNew";
import ErrorMessage from "@components/ui/error/ErrorMessage";

import "@pages/bookmarks/Bookmarks.scss";

const Bookmarks = () => {
  const {
    data: allNews,
    isPending,
    isError,
  } = useQuery({
    queryKey: ["bookmarkedNews"],
    queryFn: () => fetchData(eventsUrl),
  });

  const bookmarkedNews = allNews?.filter(
    (newItem) => newItem.isBookmarked === true
  );

  return (
    <div className="bookmarks-container">
      <Title title="Bookmarked Posts" />
      <div className="news-list">
        {bookmarkedNews &&
          bookmarkedNews.map((newsItem) => (
            <BlogPostItem key={newsItem.id} newsItem={newsItem} />
          ))}
        {bookmarkedNews?.length === 0 && <NoBookmarksMessage />}
        {isPending &&
          Array.from({ length: 4 }, (_, index) => <SkeletonNew key={index} />)}
        {isError && <ErrorMessage refreshButton={true} />}
      </div>
    </div>
  );
};

export default Bookmarks;
