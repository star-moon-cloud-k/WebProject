import React from 'react';
import './App.css';
import MyComponent from "./Component/MyComponent";
import Counter from "./Component/Counter";
import Say from "./Component/Say";
import EventPractice from "./Component/EventPractice";

const App = () => {
    const age = 5;
    return (<>
        <Counter/>
            <Say/>
            <EventPractice/>
        </>
    )


}

export default App;
