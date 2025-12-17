import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Product = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    useEffect(() => {
        axios.get(`http://localhost:8008/api/products/${id}`)
            .then((res) => setProduct(res.data))
            .catch((err) => console.log(err));
    }, [id]);
    return (
        <>
            <p>Name: {product.name}</p>
            <p>Price: ${product.price}</p>
            <p>Description: {product.description}</p>
        </>
    );
};

export default Product;
