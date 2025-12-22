import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useNavigate, useParams} from "react-router-dom";
import Form from "./Form.jsx";

const Update = () => {
    const {id} = useParams();
    const redirect = useNavigate();

    const handleUpdate = async (data) => {
        try{
            await axios.put("http://localhost:8008/api/updateproduct/"+id, data);
            redirect("/");
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <div>
            <Form handleFunction={handleUpdate} buttonText={"Update"} id={id} />
        </div>
    );
};

export default Update;