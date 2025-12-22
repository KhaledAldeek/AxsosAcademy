import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
import {useNavigate} from "react-router-dom";

// solve that in (async and await)...............
export const api = axios.create({
    baseURL: "http://localhost:8008/api",
});

const Product = (props) => {
    const {product, setProduct} = props;
    const redirect = useNavigate();
    const {id} = useParams();

    useEffect(() => {
        axios.get(`http://localhost:8008/api/products/${id}`)
            .then((res) => setProduct(res.data))
            .catch((err) => console.log(err));
    }, [id]);

    const handleDelete = async (e) => {
        e.preventDefault();
        try {
            await api.delete("/deleteproduct/" + e.target.value);
            redirect(`/`);
        } catch (error) {
            console.error(error);
        }
    }

    const handleUpdate = async (e) => {
        e.preventDefault();
        redirect("/update/"+e.target.value);
    }

    return (
        <>
            <p>Name: {product.name}</p>
            <p>Price: ${product.price}</p>
            <p>Description: {product.description}</p>
            <button onClick={(e) => handleDelete(e)} value={product._id}>Delete</button>
            <button onClick={(e) => handleUpdate(e)} value={product._id}>Update</button>
        </>
    );
};

export default Product;
