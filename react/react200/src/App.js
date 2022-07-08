import logo from './logo.svg';
import './App.css';
import React from 'react';
import JQuery from "./begginer/component/JQuery";
import ForceUpdate from "./basic/component/ForceUpdate"
import ComponentClass from './basic/component/ComponentClass'
import PureComponentClass from "./basic/component/PureComponentClass";
import ShallowEqual from "./basic/component/ShallowEqual";


function App() {
    return (
        <div>
            <h1>Start React 200!</h1>
            <p>CSS 적용하기</p>
            <JQuery/>
            <ComponentClass/>
            <PureComponentClass/>
            <ShallowEqual/>
        </div>
    );
}

export default App;
