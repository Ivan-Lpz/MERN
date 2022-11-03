import { useState, useEffect } from 'react';
import axios from 'axios';


const OnePokemon = props => {
    const { pokemon } = props;
    const [thisPokemon, setThisPokemon] = useState({
        sprites: {
            front_default: ""
        }
    })
    //data.sprites.front_default
    useEffect(() => {
        axios.get(pokemon.url)
            .then(res => {
                console.log(res.data);
                setThisPokemon(res.data);
            })
            .catch(err => { })
    }, [])

    return (
        <>
            <div>
            <img src={thisPokemon.sprites.front_default} alt="sprite" />
            </div>
        </>
    )
}




export default OnePokemon;