import React from 'react';
import './App.css';
import MyComponent from "./Component/MyComponent";

const App = () => {
    const age = 5;
    return (
        <MyComponent age = {age}  favoriteNumber={1}>리액트</MyComponent>
    )


}

export default App;
