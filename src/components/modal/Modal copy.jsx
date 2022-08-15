import React from "react";
import { Button } from "../button/Button";

import './modal.css';

export const Modal = ({ title, children, onCancelModal, onAcceptModal, acceptEnabled, isLoading }) => {
  return (
    <div className="modal">
      <header className="modal__header">
        <h1>{title}</h1>
      </header>
      <div className="modal__content">{children}</div>
      <div className="modal__actions">
        <Button design="danger" mode="flat" onClick={onCancelModal}>
          Cancel
        </Button>
        <Button
          mode="raised"
          onClick={onAcceptModal}
          disabled={!acceptEnabled}
          loading={isLoading}
        >
          Accept
        </Button>
      </div>
    </div>
  );
};
