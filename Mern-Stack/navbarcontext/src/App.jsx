import {useState} from 'react'
import './App.css'
import Form from "./components/Form.jsx";
import MyContext from "./contexts/myContext.js"
import NavBar from "./components/NavBar.jsx";


function App() {
    const [name,setName ] = useState("KhaledAldeek");
    return (
        <>
            <MyContext.Provider value={{name, setName}}>
                <NavBar/>
                <Form/>
            </MyContext.Provider>
        </>
    )
}

export default App
