import React from "react";

import "./index.style.scss";

import ContentBlock from "./components/content-block/content-block.component";
import MainContextProvider from "./context/context";
import VideoBg from "./components/video-bg/video-bg.component";

const App = () => (
  <MainContextProvider>
    <VideoBg />
    <ContentBlock />
  </MainContextProvider>
);

export default App;
