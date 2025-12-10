import React from 'react';
import {useContext} from "react";
import MyContext from "../contexts/myContext.js";

const NavBar = () => {
    const nameHolder = useContext(MyContext)
    return (
        <div>
            <div className={"bg-purple-700 p-10 text-right sticky top-0 text-white text-3xl"}>
                {nameHolder.name}
            </div>
        </div>
    );
};

export default NavBar;