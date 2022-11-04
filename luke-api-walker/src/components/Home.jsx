import { useEffect } from 'react';
import {Link, useParams } from 'react-router-dom';


const Home = props => {

    const params = useParams;
    useEffect(() => {
        console.log(params);
    }, [])



    return (
        <>
            <h1>Hello I am home</h1>
            <Link to={"/about"}>Go to about</Link>
        </>
    )
}


export default Home;