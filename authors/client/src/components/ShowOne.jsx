import { Link, useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';



const ShowOne = () => {
    const {id} = useParams();
    const [author, setAuthor] = useState({})
    const [loaded, setLoaded] = useState(false);
    const navigate = useNavigate(); 

    const deleteHandler = () => {
        axios.delete(`http://localhost:8000/api/author/delete/${id}`)
        .then(res => {
            navigate("/");
        })
        .catch(err => {
            console.log(err)
        })
    }


    useEffect(() => {
        console.log(id);
        axios.get(`http://localhost:8000/api/author/${id}`)
            .then(res => {
                console.log(res);
                setAuthor(res.data.author);
                setLoaded(true);
            })
            .catch(err => {
                console.log(err)
            })
    }, [id])




    return (
        <>
            <h2>Hello ShowOne</h2>
            <Link to={"/"}>Home</Link>

            { 
            loaded && 
            <ul>
                    <li>Author Name: {author.name}</li>
                    <li>Author's Age: {author.age}</li>
                    <li>Preferred Genre: {author.genre}</li>
                    <li>Retired: {author.retired ? "yes" : "no"}</li>
                    <button onClick={deleteHandler}>Delete This Author</button>
                </ul>
            }
        </>
    )
}

            

                

export default ShowOne;