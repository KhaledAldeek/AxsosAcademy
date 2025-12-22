import {useState} from 'react'
import './App.css'
import axios from "axios";
import {useEffect} from "react";
import {Routes, Route, Link} from "react-router-dom";
import CreateProduct from "./components/CreateProduct.jsx";
import Product from "./components/Product.jsx";


function App() {
    return (
        <>
            <Routes>
                <Route path={"/products"} element={<CreateProduct/>} />
                <Route path={"/products/:id"} element={<Product/>}></Route>
            </Routes>
        </>
    );
}

export default App
