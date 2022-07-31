import React from 'react';
import { Route, Routes} from "react-router-dom";
import About from './component/About';
import Home from './component/Home';
import Profile from "./component/Profile";

import Articles from "./component/Articles";
import Article from "./component/Article";

const App = () => {
    return (
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path="/profiles/:username" element={<Profile/>}/>
                <Route path="/articles" element={<Articles />}>
                    <Route path=":id" element={<Article />} />
                </Route>
            </Routes>
    );
};

export default App;