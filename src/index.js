import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter, Routes, Route} from "react-router-dom";

import ToDoContainer from "./functionBased/components/ToDoContainer";

import "./functionBased/App.css";
import About from "./functionBased/pages/About";
import NotMatch from "./functionBased/pages/NotMatch";
import Navbar from "./functionBased/components/Navbar";

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route exact path="/" element={<ToDoContainer />} />
                <Route path="/about-app" element={<About type="about-app"/>} />
                <Route path="/about-author" element={<About type="about-author"/>} />
                <Route path="/*" element={<NotMatch />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
document.getElementById("root"));