import React, {useState, Suspense} from "react";
import logo from './logo.svg';
import './App.css';

import loadable from '@loadable/component';

const SplitMe = loadable( () => import('./notify'),{
  fallback: <div>loading</div>
});


function App() {
  const [visible, setVisible] = useState(false);

  const onMouseOver = () =>{
    SplitMe.preload();
  }

  const onClick = () =>{
    setVisible(true);
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p onClick={onClick} onMouseOver={onMouseOver}>Hello React!</p>
          {visible && <SplitMe/>}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
