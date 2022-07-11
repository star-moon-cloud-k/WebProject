import React from 'react';
import './App.css';
import MyComponent from "./Component/MyComponent";

const App = () => {
    const age = 5;
    return (
        <MyComponent age = {age} name = "react" favoriteNumber={1}>리액트</MyComponent>
    )


}

export default App;
