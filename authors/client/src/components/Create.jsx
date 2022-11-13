import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';




const Create = () => {
    //STEP 1------state variables for the form also state variables first
    const [name, setName] = useState("");
    const [age, setAge] = useState(0);
    const [retired, setRetired] = useState(false);
    const [genre, setGenre] = useState("Thriller");

    const [error, setError] = useState("")

    const navigate = useNavigate();
    
    //STEP 2----------we need a from handler
    const formHandler = () => {
        const newAuthor = {name, age, retired, genre};
        console.log(newAuthor);

        //CALL THE API INTO THE FORM HANDLER
        createApi(newAuthor);
    }
    //STEP------3we need an axios call post/api
    const createApi = (author) => {
        axios.post("http://localhost:8000/api/authors/new", author)
        .then(res => {
            console.log(res);
            //navigate
            navigate("/");
        })
        .catch(err =>  {
            console.log(err.response.data.message);
            setError(err.response.data.message);
        })
    }
    





    return (
        <>
            <h2>Create Author</h2>
            <Link to={"/"}>Home</Link>

            <div>
                <h3 style={{"color": "red"}}>{error}</h3>
                <p>Add Name</p>
                <input type="text" value={name} onChange={e => setName(e.target.value)}/>
                <p>Add age</p>
                <input type="number" value={age} onChange={e => setAge(e.target.value)}/>
                <p>Retired? Check the box if so</p>
                <input type="checkbox" checked={retired} onChange={e => setRetired(e.target.checked)}/>
                <p>Select Genre</p>
                <select value={genre} onChange={e => setGenre(e.target.value)}>
                    <option value="Thriller">Thriller</option>
                    <option value="Anime">Anime</option>
                    <option value="Romance">Romance</option>
                    <option value="Pokemon">Pokemon</option>
                    <option value="Sci-Fi">Sci-Fi</option>
                </select> <br/>
                <button onClick={formHandler}>Add Author</button>
            </div>
        
        </>
    )
}

export default Create;