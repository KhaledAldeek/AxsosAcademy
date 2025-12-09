import React, { useState } from 'react';

const  AddTask = ({tasks, setTasks}) => {
    const [task, setTask] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        setTasks([...tasks, task]);
    }

    const handleChange = (e) => {
        e.preventDefault();
        const task = {
            "description": e.target.value,
            "status":false
        }
        setTask(task);
    }

    return (
        // form
        <form onSubmit={(e) => handleSubmit(e)} className={"flex items-center justify-center flex-col h-[30%] w-[40%] gap-5 mx-auto"}>
                <input type={"text"} onChange={(e) => handleChange(e)} className={"border-3 border-black w-full"} id={"task"} />
                <button type={"submit"} className={"border-3 border-black p-3"}>Add Task</button>
        </form>

    );
}

export default AddTask;