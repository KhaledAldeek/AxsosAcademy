import React from 'react';
import {Link} from "react-router-dom";

const HeaderLinks = () => {
    return (
        <div>
            <p className={"mt-5 text-blue-500 underline flex gap-3 items-end text-2xl"}>
                <Link to={""}>ManagePlayers</Link><span className={"text-4xl text-black "}>|</span><Link to={""}>Manage Player Status</Link></p>
        </div>
    );
};

export default HeaderLinks;