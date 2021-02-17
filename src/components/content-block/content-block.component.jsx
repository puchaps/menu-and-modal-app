import React from "react";

import "./content-block.styles.scss";

import ContentModal from "../content-modal/context-modal.component";
import ContentMenu from "../content-menu/content-menu.component";

const ContentBlock = () => (
  <div className="content-block">
    <ContentModal />
    <ContentMenu />
  </div>
);

export default ContentBlock;
