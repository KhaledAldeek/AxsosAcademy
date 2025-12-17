import React from 'react';
import axios from "axios";
import {useEffect} from "react";
import {Routes, Route, Link} from "react-router-dom";
import {useState} from 'react'

const CreateProduct = () => {
    const [products, setProducts] = useState([])
    const [name, setName] = useState("")
    const [price, setPrice] = useState(0)
    const [description, setDescription] = useState("")
    const getAllProducts = () => {
        axios.get("http://localhost:8008/api/products")
            .then((res) => setProducts(res.data))
            .catch((err) => console.log(err));
    };


    useEffect(() => {
        getAllProducts();
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8008/api/createproduct", {name, price, description})
            .then((res) => {
                console.log(res)
                setProducts([...products, res.data]);
                e.target.reset();
            })
            .catch((err) => {
                console.log(err)
            })
    }
    return (<>
        <form onSubmit={(e) => handleSubmit(e)}>
            <label>Name:</label>
            <input type={"text"} onChange={(e) => setName(e.target.value)} placeholder={"name"}/>
            <br/>
            <br/>
            <label>Price:</label>
            <input type={"text"} onChange={(e) => setPrice(Number(e.target.value))} placeholder={"0"}/>
            <br/>
            <br/>
            <label>Description:</label>
            <input type={"text"} onChange={(e) => setDescription(e.target.value)} placeholder={"description"}/>
            <br/>
            <br/>
            <input type={"submit"}/>
        </form>
        <br/>
        <br/>
        <div>
            <h2>All Products</h2>
            {
                products.map((product, index) => (
                    <div key={index}>
                        <Link to={`/products/${product._id}`}>
                            <p>{product.name}</p>
                        </Link>
                        <hr/>
                    </div>
                ))
            }
        </div>

    </>)
};

export default CreateProduct;