import './App.css'
import Form from "./components/Form.jsx";
import Create from "./components/Create.jsx";
import {Routes, Route} from "react-router-dom";
import Authors from "./components/Authors.jsx";
import Edit from "./components/Edit.jsx";

function App(props) {
    return(
        <>

            <Routes>
                <Route path={"/authors/new"} element={<Create />}/>
                <Route path={"/authors"} element={<Authors />}/>
                <Route path={"/authors/edit/:id"} element={<Edit/>}/>
            </Routes>
        </>
    )
}

export default App
