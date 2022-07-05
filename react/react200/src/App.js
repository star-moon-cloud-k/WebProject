import logo from './logo.svg';
import './App.css';
import React from 'react';
import Es6 from "./component/Es6";
import Variable from "./component/Variable";
import SpreadOperator from "./component/SpreadOperator";
import ClassPrototype from "./component/ClassPrototype";
import ArrowFunction from "./component/ArrowFunction";
import ForEach from "./component/ForEach";
import Map from "./component/Map";

function App() {
    return (
        <div>
            <h1>Start React 200!</h1>
            <p>CSS 적용하기</p>
            <ClassPrototype/>
            <Map/>
        </div>
    );
}

export default App;
