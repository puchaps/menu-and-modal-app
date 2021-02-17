import React from "react";

import "./video-bg.styles.scss";

import videoBg from "../../video/video-bg.mp4";

const VideoBg = () => <video src={videoBg} autoPlay loop muted controls />;

export default VideoBg;
