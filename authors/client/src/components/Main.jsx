import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from "./Main.module.css"




const Main = () => {

    //use state is for storing data that can change
    const [authors, setAuthors] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/authors")
            .then(res => {
                console.log(res);
                setAuthors(res.data);
            })
            .catch(err => console.log(err))
    }, [])




    return (
        <>
            <h2 className={styles.mainHeader}>Hello Main</h2>
            <Link to={"/create"}>Add an author</Link>
            <p>We have quotes by:</p>
            {
                authors.map((author, key) =>
            <table class="table table-dark table-striped" className={styles.tableDiv} key={key}>
                
                <thead>
                    <tr>
                        <th scope="col">Author</th>
                        <th scope="col">Actions available</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><Link to={`/show/${author._id}`}>{author.name}</Link></td>
                        <td><Link to={`/edit/${author._id}`}>Edit This author</Link></td>
                    </tr>
                </tbody>
            </table>
                )
            }
        </>
    )
}

export default Main;