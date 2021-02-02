import './index.style.scss';

import ContentBlock from './components/content-block/content-block.component';
import MainContextProvoder from './context/context';
import VidepBg from './components/video-bg/video-bg.component';

const App = () => {
  return (
    <MainContextProvoder>
      <VidepBg/>
      <ContentBlock/>
    </MainContextProvoder>
  );
}

export default App;
