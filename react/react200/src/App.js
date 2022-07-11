import React from 'react';
import './App.css';

function App() {
    const name = '리액트';
    const style = {
        backgroundColor : 'black',
        color : 'aqua',
        fontSize : '80px',      //font-size
        fontWeight : 'bold',    //font-weight
        padding : 11           //단위를 생략하면 px로 지정
    }
    return (
        <>
        <div style={style}>{name}</div>
        <div className="react">{name}</div>
        </>
    )
}

export default App;
