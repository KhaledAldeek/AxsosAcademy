import React from 'react';
import Form from "./Form.jsx";
import axios from "axios";

const Create = () => {
    const handleCreate = async (data) => {
        try{
            await axios.post("http://localhost:8008/api/createproduct", data);
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