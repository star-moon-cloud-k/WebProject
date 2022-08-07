import React from "react";
import Counter from './component/Counter'
import Todos from './component/Todos'
import CounterContainer from "./containers/CounterContainer";

const App = () => {
    return (
        <div>
            <CounterContainer/>
            <hr/>
            <Todos/>
        </div>
    );
};

export default App;