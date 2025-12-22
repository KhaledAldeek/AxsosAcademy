import {useState, useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Register from "./components/Register.jsx";
import Login from "./components/Login.jsx"
import {Routes, Route} from "react-router-dom";
import Home from "./components/Home.jsx";

function App() {
    const [isLogged, setIsLogged] = useState(false);

    useEffect(() => {
        const saved = localStorage.getItem("isLogged");
        if (saved === "true") setIsLogged(true);
    }, []);

    return (
        <>
            <Routes>
                <Route path={"/"} element={<Register isLogged={isLogged} setIsLogged={setIsLogged} />}/>
                <Route path={"/login"} element={<Login isLogged={isLogged} setIsLogged={setIsLogged}/>}/>
                <Route path={"/home"} element={<Home isLogged={isLogged} setIsLogged={setIsLogged}/>}/>
            </Routes>
        </>
    )
}

export default App
