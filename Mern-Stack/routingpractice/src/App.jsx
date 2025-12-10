import React from 'react';
import './App.css'
import {Routes, Route, Link} from 'react-router-dom'
import Home from "./components/Home.jsx";
import Word from "./components/Word.jsx";
import Number from "./components/Number.jsx";


function App() {
    return (
        <>
            <Routes>
                <Route path="/home" element={<Home/>}/>
                <Route path={"/:word"} element={<Word/>}/>
                <Route path={"/:word/:textColor/:bgColor"} element={<Word/>}/>
            </Routes>
        </>
    )
}

export default App
