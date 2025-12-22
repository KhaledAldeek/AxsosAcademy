import React from 'react';
import Form from "./Form.jsx";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const Create = () => {
    const redirect = useNavigate();

    const handleCreate = async (data) => {
        try {
            await axios.post("http://localhost:8008/api/create", data);
            redirect("/authors")
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <Form handleFunction={handleCreate} buttonText={"Create"}/>
        </div>
    );
};

export default Create;