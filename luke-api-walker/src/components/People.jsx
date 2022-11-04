import { useEffect, useState } from 'react';
import {Link, useParams} from 'react-router-dom';
import axios from 'axios';


const People = props => {

    const [person, setPerson] = useState({
        name: "",
        hair_color:"",
        height: "",
        mass: "",
        skin_color: ""

    });


    const {id} = useParams();
    const [selectId, setSelectId] = useState(id);
    

    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/${selectId}`)
        .then(res => {
            setPerson(res.data);})
        .catch(err => {
            console.log(err)})

    }, [selectId]);

    return (
        <>
            <h1>Hello I am People</h1>
            <input type="text" value={selectId} onChange= { e => setSelectId(e.target.value) }></input>
            <div>
                <h2>{person.name}</h2>
                <li>{person.height} cm</li>
                <li>{person.mass} kg</li>
                <li>{person.hair_color}</li>
                <li>{person.skin_color}</li>
            </div>
            <Link to={"/about"}>Go to about</Link>
            <Link to={"/"}>Go Home</Link>


        </>
    )
}


export default People;