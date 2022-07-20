import React, {useState} from "react";
import logo from './logo.svg';
import './App.css';
import Counter from "./component/Counter";
import Info from "./component/Info"
import CounterReducer from "./component/CounterReducer";
const App = () =>  {

  const [visible, setVisible] = useState(false)
      return(
  < div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button
          onClick={() =>{
            setVisible(!visible);
          }}
          >
          {visible ? '숨기기' : '보이기'}
          <hr/>
          {visible && <Info />}
        </button>
          <CounterReducer/>
          <Info/>
      </header>

    </div>
      );
}

export default App;
