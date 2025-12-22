import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HeaderLinks from "./components/HeaderLinks.jsx";
import {Routes} from "react-router-dom";
import PlayersList from "./components/Players.jsx";

function App() {
    const [count, setCount] = useState(0)

    return (
        <div className={"ml-80"}>
            <HeaderLinks/>
            <PlayersList/>
            <Routes>

            </Routes>
        </div>
    )
}

export default App
