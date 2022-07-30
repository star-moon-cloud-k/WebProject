import React from 'react';
import {Route} from 'react-router-dom';
import About from './component/About';
import Home from './component/Home';

const App = () => {
    return (
        <div>
            <Route path="/" component={Home}/>
            <Route path="/about" component={About}/>
        </div>
    );
};

export default App;