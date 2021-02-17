/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from "react";

import "./menu-preview.styles.scss";

import MenuItem from "../menu-item/menu-item.component";

const MenuPreview = ({ onToggleMenu, handleToggleMenu }) => (
  <div className={`menu-preview ${onToggleMenu ? "active" : "hide"}`}>
    <div className="menu-preview-title">
      <h1>Menu</h1>
      <span className="menu-preview-close" onClick={handleToggleMenu}>
        &#9668;
      </span>
    </div>
    <div className="menu-items">
      <MenuItem
        onTitle="Home"
        onUrlImg="https://www.flaticon.com/svg/vstatic/svg/25/25694.svg?token=exp=1612219027~hmac=c3f386a3de6cc101e6ae8f5822e9e4ec"
      />
      <MenuItem
        onTitle="Team"
        onUrlImg="https://www.flaticon.com/svg/vstatic/svg/681/681494.svg?token=exp=1612219101~hmac=2ec7e49fbb564cde8d784270791f89e6"
      />
      <MenuItem
        onTitle="Project"
        onUrlImg="https://www.flaticon.com/svg/vstatic/svg/861/861319.svg?token=exp=1612219117~hmac=1ed17ed6c3d1a2687b553bc43dfdb678"
      />
      <MenuItem
        onTitle="Calendar"
        onUrlImg="https://www.flaticon.com/svg/vstatic/svg/61/61469.svg?token=exp=1612219138~hmac=eb557610d83022a305446f38c537e8b7"
      />
      <MenuItem
        onTitle="Documents"
        onUrlImg="https://www.flaticon.com/svg/vstatic/svg/2541/2541979.svg?token=exp=1612219162~hmac=3d65f4b5e47cc20f2fede04a570224f7"
      />
    </div>
  </div>
);

export default MenuPreview;
