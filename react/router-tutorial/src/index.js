import React from 'react';
import * as ReactDOM from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>
);
reportWebVitals();
// ReactDom.render(
//     <BrowserRouter>
//         <App/>
//     </BrowserRouter>,
//     document.getElementById('root')
// );