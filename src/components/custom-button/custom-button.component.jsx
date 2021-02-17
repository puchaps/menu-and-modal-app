/* eslint-disable react/jsx-props-no-spreading */
import React from "react";

import "./custom-button.styles.scss";

const CustomButton = ({ children, onType = "", ...otherProps }) => (
  <button className={`custom-button ${onType}`} {...otherProps} type="button">
    {children}
  </button>
);

export default CustomButton;
