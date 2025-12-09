import {useState} from 'react'
import './App.css'
import AddTask from "./Components/AddTask.jsx";
import ShowTasks from "./Components/ShowTasks.jsx";

function App() {
    const [tasks,setTasks] = useState([]);


    return (
        <div className={"w-full h-screen flex flex-col"}>
            <AddTask tasks={tasks} setTasks={setTasks} />
            <ShowTasks tasks={tasks} setTasks={setTasks} />
        </div>
    )
}

export default App