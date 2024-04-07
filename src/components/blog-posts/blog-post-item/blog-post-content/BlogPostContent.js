import React from "react";
import { useNavigate } from "react-router-dom";

import "@components/blog-posts/blog-post-item/blog-post-content/BlogPostContent.scss";

const BlogPostContent = ({ id, category = "finance", title, text, image }) => {
  const navigate = useNavigate();

  const navigateHandler = () => {
    navigate(`/blog-post/${id}`);
  };

  return (
    <>
      <div className="news-wrapper" onClick={navigateHandler}>
        <div className="title-wrapper">
          <h2 className="title">{title}</h2>
          <p className="text">{text}</p>
        </div>
        <img className="news-image" src={image} alt="new" />
      </div>
      <div className="news-info">
        {/* <span className="keyword">Finance</span>
        <span className="keyword">Business</span> */}
        <span
          className="time"
          title="The approximate time to read this new. Calculation made base on the word count."
        >
          ~5 mins read
        </span>
      </div>
    </>
  );
};

export default BlogPostContent;
