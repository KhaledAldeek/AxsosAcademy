import React, {useState} from 'react';
import axios from "axios";
import {useEffect} from "react";
import {Link} from "react-router-dom";

const Products = () => {

    const [products, setProducts] = useState([]);

    const getAllProducts = async () => {
        try {
            const apiProducts = await axios.get("http://localhost:8008/api/products");
            setProducts(apiProducts.data);
        } catch (error) {
            console.log(error)
        }
    };

    useEffect(() => {
        getAllProducts();
    }, [products]);

    const handleDelete = (id) => {
        axios
            .delete("http://localhost:8008/api/deleteproduct/" + id)
            .then(() => {
                console.log("deleted successfully!!")
                getAllProducts();
            })
            .catch((err) => console.log(err));
    };

    return (
        <div>
            <h2>All Products</h2>
            {products.map((product) => (
                <div key={product._id}>
                    <Link to={`/products/${product._id}`}>
                        <p>{product.name}</p>
                    </Link>

                    <button type="button" onClick={() => handleDelete(product._id)}>
                        Delete
                    </button>

                    <hr />
                </div>
            ))}
        </div>
    );
};

export default Products;