import React from 'react';
import { Route, Routes} from "react-router-dom";
import About from './component/About';
import Home from './component/Home';
import Profile from "./component/Profile";

import Articles from "./component/Articles";
import Article from "./component/Article";
import Layout from "./Layout";

const App = () => {
    return (
            <Routes>
                <Route element = {<Layout/>}>
                <Route index element={<Home/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path="/profiles/:username" element={<Profile/>}/>

                <Route path="/articles" element={<Articles />}>
                    <Route path=":id" element={<Article />} />
                </Route>
                </Route>
            </Routes>
    );
};

export default App;