import React from "react";

import "@components/ui/skeleton/SkeletonNew.scss";

const SkeletonNew = () => {
  return (
    <div className="skeleton-news-container">
      <div className="author">
        <div className="skeleton-author"></div>
        <div className="skeleton-author-info"></div>
      </div>
      <div className="content">
        <div className="wrapper">
          <div className="skeleton-news"></div>
          <div className="skeleton-news"></div>
          <div className="skeleton-news"></div>
        </div>
        <div className="skeleton-news-image"></div>
      </div>
      <div className="keyword-wrapper">
        <div className="skeleton-keyword"></div>
        <div className="skeleton-keyword"></div>
      </div>
    </div>
  );
};

export default SkeletonNew;
