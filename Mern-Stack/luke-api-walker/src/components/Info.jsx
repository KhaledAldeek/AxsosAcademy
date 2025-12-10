import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useParams} from "react-router-dom";


const Info = () => {
    const [data, setData] = useState([])
    const {category, id} = useParams()
    useEffect(() => {
        axios.get("https://swapi.dev/api/"+ category +"/"+ id).then((response) => {
            setData(response.data);
            // console.log(response.data)
        })
    }, [category, id]);
    return (
        <>
            <div>


                {data && category === "people" && (
                    <div>
                        <h1>{data.name}</h1>
                        <p><span className={"font-bold"}>Height:</span> {data.height}cm</p>
                        <p><span className={"font-bold"}>mass:</span> {data.mass} KG</p>
                        <p><span className={"font-bold"}>hair_color:</span> {data.hair_color}</p>
                        <p><span className={"font-bold"}>skin_color:</span> {data.skin_color}</p>
                    </div>
                )}
                {data && category === "planets" && (
                    <div>
                        <h1>{data.name}</h1>
                        <p><span className={"font-bold"}>Height:</span> {data.height}cm</p>
                        <p><span className={"font-bold"}>rotation period:</span> {data.rotation_period} KG</p>
                        <p><span className={"font-bold"}>orbital period:</span> {data.orbital_period}</p>
                        <p><span className={"font-bold"}>diameter:</span> {data.diameter}</p>
                    </div>
                )}

                {data && category === "starships" && (
                    <div>
                        <h1>{data.name}</h1>
                        <p><span className={"font-bold"}>model:</span> {data.model} KG</p>
                        <p><span className={"font-bold"}>manufacturer:</span> {data.manufacturer}</p>
                        <p><span className={"font-bold"}>MGLT:</span> {data.MGLT}</p>
                    </div>
                )}
            </div>
        </>
    );
};

export default Info;