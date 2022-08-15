import React, {useState, Suspense} from "react";
import logo from './logo.svg';
import './App.css';

const SplitMe = React.lazy( () => import('./notify'));


function App() {
  const [visible, setVisible] = useState(false);

  const onClick = () =>{
    setVisible(true);
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p onClick={onClick}>Hello React!</p>
        <Suspense fallback={<div>loading</div>}>
          {visible && <SplitMe/>}
        </Suspense>
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
