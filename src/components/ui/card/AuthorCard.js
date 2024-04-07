import React, { useState } from "react";

import { dateFormatter } from "@utils/utils.service";
import AuthorModal from "@components/author/AuthorModal";

import "@components/ui/card/AuthorCard.scss";

const AuthorCard = ({ date, avatar, fullName, job }) => {
  const [isAuthorModalOpen, setIsAuthorModalOpen] = useState(false);

  return (
    <>
      <div className="author-card-container">
        <div
          className="author-container"
          onClick={() => setIsAuthorModalOpen(true)}
        >
          <img className="avatar" src={avatar} alt="new" />
          <div className="author">
            <h4 className="full-name">{fullName}</h4>
            <span className="job">{job}</span>
          </div>
        </div>
        <span className="about">
          about
          <u className="category">Finance</u>
        </span>
        <span className="date">•{dateFormatter(date)}</span>
      </div>
      {isAuthorModalOpen && (
        <AuthorModal
          isOpen={isAuthorModalOpen}
          onClose={() => setIsAuthorModalOpen(false)}
          fullName={fullName}
          avatar={avatar}
          job={job}
        />
      )}
    </>
  );
};

export default AuthorCard;
