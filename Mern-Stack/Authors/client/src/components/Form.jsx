import React, {useEffect} from 'react';
import {useState} from 'react';
import axios from "axios";

function Form(props) {
    const {id} = props;
    const [name, setName] = useState("");
    const [nameErr, setNameErr] = useState("");

    useEffect(() => {
        if(id){
            const getAuthor = async () => {
                try{
                    const apiAuthor = await axios.get("http://localhost:8008/api/author/"+id);
                    setName(() => apiAuthor.data.name);
                } catch (error) {
                    console.log(error);
                }
            }
            getAuthor();
        }
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();

        setNameErr("");

        let hasErrors = false;

        if(name.trim().length < 3){
            setNameErr("Name must be at least 3 chars.");
            hasErrors = true;
        }

        if(hasErrors) return;

        props.handleFunction({name});
        setName("");

    }

    return (
        <>
            <form
                style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
                onSubmit={handleSubmit}
            >
                <label>Name:</label>
                <input
                    className={"border p-2"}
                    type="text"
                    value={ name || ""}
                    onChange={(e) => {
                        setName(e.target.value)
                    }}
                    placeholder="name"
                />
                {nameErr ? <p style={{color:"red"}}>{nameErr}</p> : null}

                <input type="submit" value={`${props.buttonText}`} style={{marginTop:"10px"}} className={"border p-1"} />
            </form>
        </>
    )
}

export default Form;