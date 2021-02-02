import './video-bg.styles.scss';

import videoBg from '../../video/video-bg.mp4';

const VidepBg = () => {
  return <video src = {videoBg} autoPlay loop muted controls/>
};

export default VidepBg;