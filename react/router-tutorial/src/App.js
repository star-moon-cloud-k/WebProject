import React, {useState} from 'react';
import {Link, Route, Routes} from "react-router-dom";
import About from './component/About';
import Home from './component/Home';
import Profile from "./component/Profile";
import Profiles from "./component/Profiles";
import HistorySample from "./component/HistorySample";

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
                <li>
                    <Link  to="/profiles">프로필</Link>
                </li>
                <li>
                    <Link  to="/history">History 예제</Link>
                </li>
            </ul>
            <Routes>
                <Route path="/" exact={false} element={<Home/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path="/profiles/*" element={<Profiles/>}/>
                <Route path="/history" element={<HistorySample/>}/>
            </Routes>
        </div>
    );
};

export default App;