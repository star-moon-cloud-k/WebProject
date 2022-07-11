import React from 'react';
import './App.css';
import MyComponent from "./Component/MyComponent";
import Counter from "./Component/Counter";
import Say from "./Component/Say";

const App = () => {
    const age = 5;
    return (<>
        <Counter/>
            <Say/>
        </>
    )


}

export default App;
