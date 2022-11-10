import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios'
import { useState } from 'react';

const DisplayOne = (props) => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [product, setProduct] = useState({
        _id: "",
        title: "",
        price: 0,
        description: ""
    })

    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");


    const formHandler = () => {
        const updatedProduct = {
            title: title,
            price: price,
            description: description
        }

        editOneProductApi(updatedProduct);
    }

    const editOneProductApi = (product) => {
        axios.put(`http://localhost:8000/api/products/update/${id}`,product)
            .then(res => {
                console.log(res);
                navigate('/');
            })
            .catch(err => {
                console.log(err);
            })
    }



    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res => {
                console.log(res.data.product);
                setProduct(res.data.product);
                setTitle(res.data.product.title);
                setPrice(res.data.product.price);
                setDescription(res.data.product.description);
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    return (
        <>
            <h1>DisplayOne: {id}</h1>
            <div>
                <p>Title: {product.title}</p>
                <p>Price: {product.price}</p>
                <p>Description: {product.description}</p>
            </div>
            <div>
                <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
                <input type="number" min="1" max="5000" value={price} onChange={e => setPrice(e.target.value)} />
                <input type="text" value={description} onChange={e => setDescription(e.target.value)} />
                <button onClick={formHandler}>Edit Product</button>
            </div>
        </>
    )
}


export default DisplayOne