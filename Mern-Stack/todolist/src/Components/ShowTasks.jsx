import React, {useState} from 'react';


function ShowTasks({tasks, setTasks}) {

    const handleStatusChange = (index, checked) => {
        const updatedTasks = [...tasks];
        updatedTasks[index].status = checked;
        setTasks(updatedTasks);
    };

    const handleClick = (e, index) => {
        e.preventDefault();
        const newtasks = [
                ...tasks.slice(0, index),
                ...tasks.slice(index + 1)
        ]
        setTasks(newtasks);
    }


    return (
        <div className={"mx-auto w-full"}>
            {
                tasks.map((task, index) => (
                    <div key={index} className={"task w-full mt-4"}>
                        <p className={"flex gap-3 text-center w-full "}>
                            { 
                                task.status ?
                                    <span className={"line-through w-[70%]"}>{task.description}</span>
                                    :
                                    <span className={"w-[70%]"}>{task.description}</span>
                            }
                            <input type="checkbox" checked={task.status} onChange={e => {handleStatusChange(index, e.target.checked)}}/>
                            <input type={"submit"} className={"border-3"} value={"delete"} onClick={(e) => handleClick(e, index)}/>
                        </p>
                    </div>
                ))
            }
        </div>
    );
}

export default ShowTasks;