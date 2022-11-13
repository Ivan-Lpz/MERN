import React, { useEffect } from 'react'
import { useNavigate, useParams, Link } from 'react-router-dom';
import axios from 'axios'
import { useState } from 'react';

    const Edit = (props) => {
    
    const { id } = useParams();
    const navigate = useNavigate();

    const [author, setAuthor] = useState({
        _id:"",
        name: "",
        age: 0,
        retired: false,
        genre: ""
    })

    const [name, setName] = useState("");
    const [age, setAge] = useState(0);
    const [retired, setRetired] = useState(false);
    const [genre, setGenre] = useState("");

    const formHandler = () => {
        const updatedAuthor = {
            name: name,
            age: age,
            retired: retired,
            genre: genre
        }
        editAuthorApi(updatedAuthor);
    }

    const editAuthorApi = (author) => {
        axios.put(`http://localhost:8000/api/author/update/${id}`, author)
            .then(res => {
                console.log(res);
                navigate('/');
            })
            .catch(err => {
                console.log(err);
            })
    }

    //This displays the information for the edit page
    useEffect(() => {
        axios.get(`http://localhost:8000/api/author/${id}`)
            .then(res => {
                console.log(res);
                setAuthor(res.data.author)
                setName(res.data.author.name);
                setAge(res.data.author.age);
                setRetired(res.data.author.retired);
                setGenre(res.data.author.genre);
            })
            .catch(err => {
                console.log(err);
            })
    }, [])



    return (
        <>
            <h2>Hello {author.name}</h2>
            <Link to={"/"}>Home</Link>
            <div>
            <p>Edit Name</p>
                <input type="text" value={name} onChange={e => setName(e.target.value)}/>
                <p>Edit age</p>
                <input type="number" value={age} onChange={e => setAge(e.target.value)}/>
                <p>Edit Retired? Check the box if so</p>
                <input type="checkbox" checked={retired} onChange={e => setRetired(e.target.checked)}/>
                <p>Edit Genre</p>
                <select value={genre} onChange={e => setGenre(e.target.value)}>
                    <option value="Thriller">Thriller</option>
                    <option value="Anime">Anime</option>
                    <option value="Romance">Romance</option>
                    <option value="Pokemon">Pokemon</option>
                    <option value="Sci-Fi">Sci-Fi</option>
                </select> <br/>
                <button onClick={formHandler}>Edit Author</button>
            </div>
        </>
    )
}

export default Edit;