import logo from './logo.svg';
import './App.css';
import React from 'react';
import JQuery from "./begginer/component/JQuery";
import PropsObjVal from "./basic/component/PropsObjVal"

import Props from "./basic/component/Props";
function App() {
    return (
        <div>
            <h1>Start React 200!</h1>
            <p>CSS 적용하기</p>
            <JQuery/>
            <PropsObjVal ObjectJson={
                {react:"리액트" , twohundred:"200"}
            }/>
        </div>
    );
}

export default App;
