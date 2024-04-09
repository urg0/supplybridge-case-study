// IMPORTANT: Weird looking code because of the lack of the perfect api

import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchData } from "@utils/api.service";

import AuthorCard from "@components/ui/card/AuthorCard";
import BlogPostDetailsActions from "@components/blog-posts/blog-posts-details/actions/BlogPostDetailsActions";
import SkeletonNew from "@components/ui/skeleton/SkeletonNew";
import LottiePlayer from "@components/ui/lottie-player/LottiePlayer";
import ErrorMessage from "@components/ui/error/ErrorMessage";
import { Toaster } from "react-hot-toast";

import { ReactSVG } from "react-svg";
import AppIcons from "@root/constants/assetManager/AppIcons";
import AppAnimations from "@root/constants/assetManager/AppAnimations";

import "@pages/blog-post-details/BlogPostDetails.scss";

const BackIcon = AppIcons.GetIcon("back");
const LoadingAnimation = AppAnimations.getAnimation("loading");

const BlogPostDetails = () => {
  const { _id } = useParams();
  const navigate = useNavigate();

  const { data, isPending, isError, error } = useQuery({
    queryKey: ["news", _id],
    queryFn: () =>
      fetchData(
        `https://6612f97253b0d5d80f66ac1d.mockapi.io/dummy-posts/blogposts/${_id}`
      ),
    staleTime: 0,
  });

  return (
    <>
      <Toaster />
      <div className="news-details-container">
        <ReactSVG
          src={BackIcon}
          className="back-icon"
          onClick={() => navigate("/home")}
        />
        {data && (
          <>
            <div className="title-container">
              <h2 className="news-title">{data.title} </h2>
              <span className="news-subtitle">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati, modi. modi.
              </span>
              <div className="author-info">
                <AuthorCard
                  avatar={data.avatar}
                  fullName={data.fullName}
                  job={data.job}
                  date={data.date}
                />
              </div>
              <BlogPostDetailsActions
                id={_id}
                isBookmarked={data.isBookmarked}
                blogPost={data}
              />
            </div>
            {/* IMPORTANT: Weird looking code because of the lack of the perfect api  */}

            <p className="news-text">
              {data.text}
              {data.text}
            </p>
            <img src={data.image} alt="news" className="news-image" />
            <p className="news-text">
              {data.text}
              {data.text}
              {data.text}
              {data.text}
            </p>
            <p className="news-text">{data.text}</p>
            <p className="news-text">
              {data.text}
              {data.text}
            </p>
          </>
        )}
        {isPending && (
          <LottiePlayer
            animationData={LoadingAnimation}
            style={{ height: 128, width: 128, marginTop: "13%" }}
            className="loading-animation"
          />
        )}
        {isError && <ErrorMessage refreshButton={true} />}
      </div>
    </>
  );
};

export default BlogPostDetails;
