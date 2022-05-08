import React, {useEffect, useLayoutEffect, useRef, useState} from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from './components/Login';

import Register from "./components/Registration";
import useToken from './components/useToken';
import Content from "./components/content";




function App() {
    const [examples, setExamples] = useState(true);

    const { token, setToken } = useToken();

    if(!token) {
        return (
            <div className="App">
                <header className="App-header">
                    <BrowserRouter>
                        <Routes>
                            <Route path="/*" element={<Login setToken={setToken}/>}/>
                            <Route path="/register" element={<Register/>}/>
                        </Routes>
                    </BrowserRouter>
                </header>
            </div>)
    }
    return (
        <div className="App">
            <header className="App-header">
                    <BrowserRouter>
                        <Routes>
                            <Route path="/" element={<Content quote={"Content"}/>}/>
                        </Routes>
                    </BrowserRouter>
            </header>
        </div>
    );
}

export default App;