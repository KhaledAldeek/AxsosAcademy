import React from 'react';

const  AddTask = ({tasks, setTasks}) => {

    const handleClick = (e) => {
        e.preventDefault();
        let taskDesc = document.getElementById("task");
        const task = {
            "description":taskDesc.value,
            "status":false
        };
        setTasks([...tasks,task]);
        taskDesc.value = "";
    }

    return (
        <div className={"flex items-center justify-center flex-col h-[30%] w-[40%] gap-5 mx-auto"}>
            <input type={"text"} className={"border-3 border-black w-full"} id={"task"} />
            <button type={"submit"} className={"border-3 border-black p-3"} onClick={handleClick}>Add Task</button>
        </div>
    );
}

export default AddTask;