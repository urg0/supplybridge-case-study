import React from "react";
import ReactDOM from "react-dom";

import { ReactSVG } from "react-svg";
import AppIcons from "@root/constants/assetManager/AppIcons";

import "@components/ui/modal/Modal.scss";

const CloseIcon = AppIcons.GetIcon("close");

const Modal = ({ isOpen, onClose, children, isMessage = false }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div
      className={`modal-overlay ${isMessage && "message"} `}
      onClick={onClose}
    >
      <div
        className="modal-content"
        onClick={(event) => event.stopPropagation()}
      >
        <ReactSVG src={CloseIcon} className="close-icon" onClick={onClose} />
        {children}
      </div>
    </div>,
    document.getElementById("modal-root")
  );
};

export default Modal;
