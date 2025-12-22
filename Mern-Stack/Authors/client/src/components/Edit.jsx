import React from 'react';
import Form from "./Form.jsx";
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";

function Edit() {
    const {id} = useParams();
    const redirect = useNavigate();

    const handleUpdate = async (data) => {
        try{
            await axios.put("http://localhost:8008/api/edit/"+id, data);
            redirect("/authors");
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <Form handleFunction={handleUpdate} buttonText={"Update"} id={id}/>
        </div>
    );
}

export default Edit;