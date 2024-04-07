import React from "react";
import { getIconPath } from "@utils/navigation.service";

import Button from "@components/ui/button/Button";

import { ReactSVG } from "react-svg";
import "@components/blog-posts/search-no-result/SearchNoResult.scss";

const SearchNoResult = ({ resetSearchInput }) => {
  return (
    <div className="no-results-container">
      <ReactSVG src={getIconPath("computer-dead")} className="error-icon" />
      <div className="error-message">
        Could not find any news matching your search.
      </div>

      <p className="error-info">
        Please check for typos or try to use different keywords and more general
        terms.
      </p>

      <Button
        label="Clear Search"
        icon={getIconPath("clear")}
        className="medium blue"
        onClick={resetSearchInput}
      />
    </div>
  );
};

export default SearchNoResult;
