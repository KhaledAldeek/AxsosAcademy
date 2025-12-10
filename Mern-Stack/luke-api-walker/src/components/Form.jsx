import React from 'react';
import {Route, Routes, useNavigate} from "react-router-dom";
import Info from "./Info.jsx";


const Form = () => {
    const [category, setCategory] = React.useState("people");
    const [id, setId] = React.useState("");
    const redirect = useNavigate();

    const handelSubmit = () => {
        // redirect("/:"+category +"/:"+id);
        redirect(`/${category}/${id}`);

    }

    return (
        <>
            <div className={"flex items-center justify-center space-x-2xl"}>
                <label className={"text-xl font-bold"}>
                    Search for:
                    <select name="cat" id="cat" className={"ml-5 text-xl p-2 rounded-lg border-3 border-black"}
                            onChange={(e) => setCategory(e.target.value)}>
                        <option value="people">people</option>
                        <option value="planets">planets</option>
                        <option value="starships">starships</option>
                    </select>
                </label>
                <label className={"text-xl font-bold"}>
                    ID:
                    <input type="text" name="id" id="id" className={"ml-5 text-xl rounded-lg border-3 border-black"}
                           onChange={(e) => setId(e.target.value)}/>
                </label>

                <button className={"p-5 bg-red-500"} onClick={handelSubmit}>Search</button>
            </div>
            <Routes>
                <Route path="/:category/:id" element={<Info/>}/>
            </Routes>
        </>
    );
};

export default Form;