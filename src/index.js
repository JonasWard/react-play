import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {ProjectOverview} from "./Components/ProjectOverview";
import {NotFound} from "./Components/NotFound";

ReactDOM.render(
    <BrowserRouter basename={"/react-play/"}>
        <Routes>
            <Route path="projects" element={<ProjectOverview/>}/>
            <Route exact path="" element={<App/>}/>
            <Route exact path="404" element={<NotFound/>}/>
        </Routes>
    </BrowserRouter>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
