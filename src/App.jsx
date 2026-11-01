import { useState } from 'react'
import './App.css'

import { createEnum } from './Enum.jsx';
import Header from './components/Header.jsx';
import Content from './components/Content.jsx';

function App() {
  const [showControls, setShowControls] = useState(true);

  function onShowControlsChanged(e) {
    setShowControls(e.target.value);
  }

  return (
    <div className='app-root'>
      <Header onShowControlsChanged={onShowControlsChanged}></Header>
      <Content showControls={showControls}></Content>
    </div>
  );
}

export default App;
