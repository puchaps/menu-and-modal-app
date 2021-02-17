import React from "react";

import "./menu-item.styles.scss";

const MenuItem = ({ onTitle, onUrlImg }) => (
  <div className="menu-item">
    <div className="menu-item-block">
      <img src={onUrlImg} alt="menu" />
      <span className="title">{onTitle}</span>
    </div>
  </div>
);

export default MenuItem;
