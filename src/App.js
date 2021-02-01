import './index.style.scss';

import videoBg from './video/video-bg.mp4';

import ContentBlock from './components/content-block/content-block.component';
import MainContextProvoder from './context/context';

const App = () => {
  return (
    <MainContextProvoder>
      <video src = {videoBg} autoPlay loop muted controls/>
      <ContentBlock/>
    </MainContextProvoder>
  );
}

export default App;
