import logo from './logo.svg';
import './App.css';
import {Component} from "react";
import SassComponent from "./component/SassComponent";
import CSSModule from "./component/CSSModule";
import StyledComponent from "./component/StyledComponent";

class App extends Component{
  render() {
    return (
        <div className="App">

            <StyledComponent/>
        </div>
    );
  }
}

export default App;
