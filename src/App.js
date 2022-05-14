import './App.css';
import React, {useEffect, useLayoutEffect, useRef, useState} from 'react';
import {BrowserRouter, NavLink, Route, Routes} from "react-router-dom";

import logo from "./book.ico"

import Login from './components/Login';

import Register from "./components/Registration";
import useToken from './components/useToken';
import Content from "./components/content";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import classes from "./components/all.module.css";



function App() {
    const [examples, setExamples] = useState(true);

    const { token, setToken } = useToken();

    if(!token) {
        return (
            <div className="App">
                <header className="App-header">
                    <BrowserRouter>
                        <div className={`navigation ${classes.all}`}>
                            <nav className={`navbar navbar-fixed-top`}>
                                <div className={` text-center ${classes.container} ${classes.nav}`}>
                                    <NavLink className={`navbar-brand ${classes.par} `} to="/">
                                        <img src={logo} alt={'Logo'} className={classes.img}/>
                                    </NavLink>
                                    <NavLink className={`navbar-brand ${classes.par} ${classes.links}`} to="/">
                                        Login
                                    </NavLink>
                                    <NavLink className={`navbar-brand ${classes.par} ${classes.links}`} to="/register">
                                        Registration
                                    </NavLink>
                                    <NavLink className={`navbar-brand ${classes.par} ${classes.links}`} to="/about">
                                        About project
                                    </NavLink>
                                </div>
                            </nav>
                        </div>
                        <Routes>
                            <Route path="/" element={<Login setToken={setToken}/>}/>
                            <Route path="/register" element={<Register/>}/>
                            <Route path="/about" element={<About quote={"About"}/>}/>
                        </Routes>
                        <Footer/>
                    </BrowserRouter>
                </header>
            </div>

        );
    }
    return (
        <div className="App">
            <header className="App-header">
                    <BrowserRouter>
                        <Header/>
                        <Routes>
                            <Route path="/" element={<Content quote={"Content"}/>}/>
                            <Route path="/about" element={<About quote={"About"}/>}/>
                        </Routes>
                        <Footer/>
                    </BrowserRouter>
            </header>
        </div>
    );
}

export default App;