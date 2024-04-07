import React from "react";

import Modal from "@components/ui/modal/Modal";

import "@components/author/AuthorModal.scss";
import Button from "@components/ui/button/Button";

const AuthorModal = ({ isOpen, onClose, fullName, avatar, job }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="author-modal-container">
        <img src={avatar} alt="author" className="author-avatar" />
        <div className="author-info-container">
          <h2 className="author-fullname">
            {fullName} <span className="followers"> 227 Followers</span>{" "}
          </h2>
          <span className="author-job">{job}</span>
          <span className="author-info">Birthdate: 2 April 2001</span>
          <span className="author-info">Birthplace: New York </span>
          <span className="author-info">Email: urgulerr@gmail.com </span>
          <div className="button-wrapper">
            <Button
              className="orange medium disabled"
              label="See the articles"
            />
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default AuthorModal;
