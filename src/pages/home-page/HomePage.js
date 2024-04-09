import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";

import { eventsUrl, fetchData } from "@utils/api.service";
import { ReactSVG } from "react-svg";

import { Toaster } from "react-hot-toast";

import Title from "@components/ui/title/Title";
import BlogPostItem from "@components/blog-posts/blog-post-item/BlogPostItem";
import SearchNoResult from "@components/blog-posts/search-no-result/SearchNoResult";
import SkeletonNew from "@components/ui/skeleton/SkeletonNew";
import ErrorMessage from "@components/ui/error/ErrorMessage";

import AppIcons from "@root/constants/assetManager/AppIcons";

import "@pages/home-page/HomePage.scss";

const SearchIcon = AppIcons.GetIcon("search");

const HomePage = () => {
  const {
    data: allNews,
    isPending,
    isError,
  } = useQuery({
    queryKey: ["news"],
    queryFn: () => fetchData(eventsUrl),
  });

  const [searchParams, setSearchParams] = useSearchParams();
  const [searchInput, setSearchInput] = useState(
    searchParams.get("search") || ""
  );

  const searchInputChangeHandler = (event) => {
    setSearchInput(event.target.value);
    setSearchParams({ search: event.target.value });
  };

  const resetSearchInputHandler = () => {
    setSearchInput("");
  };

  const filteredNews = allNews?.filter((newsItem) => {
    //OPTIMIZE: What about upper case?
    return (
      newsItem.title.toLowerCase().includes(searchInput) ||
      newsItem.text.toLowerCase().includes(searchInput) ||
      newsItem.fullName.toLowerCase().includes(searchInput)
    );
  });

  return (
    <>
      <Toaster />
      <div className="all-news-container">
        <Title title="All Posts" />
        {/* REFACTOR: Extract actions to a new component. */}
        <div className="news-actions">
          <div className="search-input-container">
            <input
              type="text"
              value={searchInput}
              className="news-search-input"
              placeholder="Search within the latest news..."
              onChange={searchInputChangeHandler}
            />
            <ReactSVG src={SearchIcon} className="search-icon" />
          </div>
          {/* <select className="news-sort-options">
            <option defaultChecked disabled>
              Sort by: default
            </option>
            <option value="alphabet">Alphabet</option>
            <option value="alphabet">Alphabet-reverse</option>
            <option value="alphabet">Newest</option>
            <option value="alphabet">Shortest</option>
          </select> */}
        </div>
        <div className="news-list">
          {filteredNews &&
            filteredNews.map((newsItem) => (
              <BlogPostItem key={newsItem.id} newsItem={newsItem} />
            ))}
          {filteredNews?.length === 0 && (
            <SearchNoResult resetSearchInput={resetSearchInputHandler} />
          )}
          {isPending &&
            Array.from({ length: 4 }, (_, index) => (
              <SkeletonNew key={index} />
            ))}
          {isError && <ErrorMessage refreshButton={true} />}
        </div>
      </div>
    </>
  );
};

export default HomePage;
