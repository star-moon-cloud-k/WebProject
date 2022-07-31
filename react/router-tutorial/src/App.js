import React, {useState} from 'react';
import {Link, Route, Routes} from "react-router-dom";
import About from './component/About';
import Home from './component/Home';
import Profile from "./component/Profile";

const App = () => {
    const [data , setData] = useState({username : ''})
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

                    <Link  to="/profile/velopert">velopert 프로필</Link>
                </li>
                <li>
                    <Link to="/profile/gildong">gildong 프로필</Link>
                </li>
            </ul>
            <hr/>
            <Routes>
                <Route path="/" exact={false} element={<Home/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path="/profile/:username" element={<Profile  match = {data}/>}/>
            </Routes>
        </div>
    );
};

export default App;