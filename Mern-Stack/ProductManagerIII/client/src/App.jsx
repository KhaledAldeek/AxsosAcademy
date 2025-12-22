import {useState} from 'react'
import './App.css'
import axios from "axios";
import {useEffect} from "react";
import {Routes, Route, Link} from "react-router-dom";
import Form from "./components/Form.jsx";
import Product from "./components/Product.jsx";
import Update from "./components/Update.jsx";
import Products from "./components/Products.jsx";
import Create from "./components/Create.jsx";


function App() {
    const [product, setProduct] = useState({});
    return (
        <>
            <Routes>
                <Route path={"/"} element={<><Create/>  <Products/></>  } />
                <Route path={"/products/:id"} element={<Product product={product} setProduct={setProduct}/>}/>
                <Route path={"/update/:id"} element={<Update product={product} setProduct={setProduct} />} />
            </Routes>
        </>
    );
}

export default App
