import React from 'react';
import {Link, Route, Routes} from "react-router-dom";
import About from './component/About';
import Home from './component/Home';

const App = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/">홈</Link>
                </li>
                <li>
                    <Link to="about">소개</Link>
                </li>
            </ul>
            <hr/>
            <Routes>
                <Route path="/" exact={false} element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/info" element = {<About/>}/>
            </Routes>
        </div>
    );
};

export default App;