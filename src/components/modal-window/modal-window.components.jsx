/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from "react";

import "./modal-window.styles.scss";

import CustomButton from "../custom-button/custom-button.component";
import CustomForm from "../custom-form/custom-form.component";

const ModalWindow = ({ handleToggleModal, onToggle }) => (
  <div className={`modal-window ${onToggle ? "active" : "hide"}`}>
    <div className="modal-window-block">
      <span className="title">Please sign in</span>
      <span className="subtitle">Sing in to manage your account</span>
      <span className="modal-window-close" onClick={handleToggleModal}>
        &#10006;
      </span>
      <form>
        <CustomForm type="text" placeholder="Email" />
        <CustomForm type="password" placeholder="Password" />
        <CustomButton onType="google">Sign With Google</CustomButton>
      </form>
    </div>
  </div>
);

export default ModalWindow;
