import React from "react";
import './App.css'
import Nav from "./Components/Nav.jsx";

function App() {
    const [divs, setDivs] = React.useState([]);
    const [color, setColor] = React.useState("");

    return (
        <div className={"w-1/1 h-[97vh]]  flex flex-col justify-start"}>
            <Nav setColor={setColor} color={color} divs={divs} setDivs={setDivs}/>
            {/*the box is individual component*/}
        </div>
    )
}

export default App
