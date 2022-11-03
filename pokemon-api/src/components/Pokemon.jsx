import { useState } from 'react';
import axios from 'axios';
import OnePokemon from './OnePokemon';

const Pokemon = props => {
    const [allPokemon, setallPokemon] = useState ([]);



    const api = () => {
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=100")
            .then (res => {
                // console.log(res.data.results);
                setallPokemon(res.data.results);
                // console.log(allPokemon);
            })
            .catch (err => {
                console.log(err)
            })
    }


    return ( 
        <>
            <h1>Hi I am pokemon</h1>
            <button onClick={api}>Get all pokemon</button>
            {
                allPokemon.map((e, key) => 
                    <OnePokemon key={key} pokemon={e}/>
                    
                )
            }       
        </>
    )
}


export default Pokemon;