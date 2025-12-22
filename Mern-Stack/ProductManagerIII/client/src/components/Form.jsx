import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const Form = (props) => {
    const {id} = props
    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");

    const [nameErr, setNameErr] = useState("");
    const [priceErr, setPriceErr] = useState("");
    const [descriptionErr, setDescriptionErr] = useState("");


    useEffect(
        () => {
            if(id){
                const getProduct = async () => {
                    try{
                        const apiProduct = await axios.get("http://localhost:8008/api/products/"+id);
                        setName(() => apiProduct.data.name);
                        setPrice(() => apiProduct.data.price);
                        setDescription(() => apiProduct.data.description);
                    } catch (error) {
                        console.log(error)
                    }
                }
            getProduct();
            }
        }, [id]
    );

    const handleSubmit = (e) => {
        e.preventDefault();

        setNameErr("");
        setPriceErr("");
        setDescriptionErr("");

        let hasErrors = false;

        if (name.trim().length < 2) {
            setNameErr("Name must be at least 2 characters");
            hasErrors = true;
        }

        if (Number(price) <= 0 || price === "") {
            setPriceErr("Price must be greater than 0");
            hasErrors = true;
        }

        if (description.trim().length < 2) {
            setDescriptionErr("Description must be at least 2 characters");
            hasErrors = true;
        }

        if(hasErrors) return;

        console.log(name)
        console.log(price)
        console.log(description)
        props.handleFunction({name, price, description});
        setName("")
        setPrice("")
        setDescription("")
    };

    return (
        <>
            <form
                style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
                onSubmit={handleSubmit}
            >
                <label>Name:</label>
                <input
                    type="text"
                    value={ name || ""}
                    name={"name"}
                    onChange={(e) => {
                        setName(e.target.value)
                    }}
                    placeholder="name"
                />
                {nameErr ? <p style={{color:"red"}}>{nameErr}</p> : null}

                <label>Price:</label>
                <input
                    type="number"
                    value={ price || 0 }
                    onChange={(e) => {
                        setPrice(e.target.value)
                    }}

                    placeholder="0"
                />
                {priceErr ? <p style={{color:"red"}}>{priceErr}</p> : null}

                <label>Description:</label>
                <input
                    type="text"
                    value={ description || "" }
                    onChange={(e) => {
                        setDescription(e.target.value)
                    }}
                    placeholder="description"
                />
                {descriptionErr ? <p style={{color:"red"}}>{descriptionErr}</p> : null}

                <input type="submit" value={`${props.buttonText}`} style={{marginTop:"10px"}} />
            </form>

            <br />
            <br />
        </>
    );
};

export default Form;
