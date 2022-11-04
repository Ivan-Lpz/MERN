import { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';


const Planet = props => {

    const [planet, setPlanet] = useState({
        name: "",
        climate: "",
        terrain: "",
        surface_water: "",
        population: ""
    });


    const { id } = useParams();
    const navigate = useNavigate();
    const [selectId, setSelectId] = useState(id);


    const changeHandler = () => {
        navigate(`/planets/${selectId}`);
    }


    useEffect(() => {
        axios.get(`https://swapi.dev/api/planets/${selectId}`)
        .then(res => {
            setPlanet(res.data);
        })
        .catch(err => {
            console.log(err)
        })
    }, [selectId]);

    return (
        <>
            <h1>Hello I am Planet</h1>
            <input type="text" value={selectId} onChange={e => setSelectId(e.target.value)}></input>
            <button onClick={changeHandler}>Click me</button>
            <div>
                <h1>{planet.name}</h1>
                <li>Climate: {planet.climate}</li>
                <li>Terrain: {planet.terrain}</li>
                <li>Surface Water: {planet.surface_water}</li>
                <li>Population: {planet.population}</li>
            </div>
            <Link to={"/about"}>Go to about</Link>
            <Link to={"/"}>Go Home</Link>
        </>
    )
}


export default Planet;