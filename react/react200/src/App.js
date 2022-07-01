import logo from './logo.svg';
import './App.css';
import React from 'react';
// import ImportComponent from "./component/ImportComponent";
// import LifeCycleRender from "./LifeCycleRender";
// import LifeCycleConstructor from "./LifeCycleConstructor";
// import LifeCycleDerivedState from "./LifeCycleDerivedState";
import LifeCycleDidMount from "./LifeCycleDidMount";
import LifeCycleshouldComponentUpdate from "./LifeCycleshouldComponentUpdate";

function App() {
  return (
  <div>
    <h1>Start React 200!</h1>
    {/*<p>CSS 적용하기</p>*/}

    <LifeCycleDidMount
        prop_value = 'LifeCycleDidMount'
    ></LifeCycleDidMount>

    <LifeCycleshouldComponentUpdate
      prop_value = 'LifeCycleShould'
      ></LifeCycleshouldComponentUpdate>
  </div>
  );
}

export default App;
