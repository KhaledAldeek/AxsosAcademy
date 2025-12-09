import React, {useEffect, useState} from 'react'
import axios from 'axios';
import './App.css'

function App() {
    const [pokemons, setPokemons] = useState([])
    const [isClicked, setIsClicked] = useState(false)

    useEffect(() => {
        if(isClicked){
            axios.get("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
                .then((response) => {
                    const names = response.data.results.map(p => p.name); // <-- الإصلاح
                    setPokemons(names);
                    console.log(names);
                })
        }
    }, [isClicked]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if(isClicked === true){
            setIsClicked(false)
        }else{
            setIsClicked(true)
        }
    }

    return (
        <>
            <form onSubmit={(e) => handleSubmit(e)}>
                <button type="submit">{
                    isClicked ? "HidePokemons" : "ShowPokemons"
                }</button>
            </form>
            <div>
                {pokemons.map((pokemon, index) => (
                    isClicked ?
                        <p key={index}>{pokemon}</p>
                        :
                        <p key={index}></p>
                ))}
            </div>

        </>
    )
}

export default App
