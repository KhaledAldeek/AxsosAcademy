import React, {useContext} from 'react';
import MyContext from "../contexts/myContext.js";

const Form = () => {
    const setter = useContext(MyContext);
    return (
        <div className={"mt-10"}>
            <label className={"text-2xl"}>Your name: </label>
            <input type={"text"} className={"ml-5 bg-gray-200 rounded-lg h-10 pl-3"}
            placeholder={"Enter your name..."} onChange={(e) => {setter.setName(e.target.value)}}/>
        </div>
    );
};

export default Form;