import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

const DisplayAllProducts = (props) => {
    
    //-------THIS WILL DISPLAY ALL PRODUCTS
    const [allProducts, setAllProducts] = useState([])
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get("http://localhost:8000/api/products")
            .then(res => {
                console.log(res.data);
                setAllProducts(res.data)
                setLoaded(true);
            })
            .catch(err => console.log(err))
    }, [])

    //-------THIS WILL ALLOW YOU TO CREATE A NEW PRODUCT
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");
    
    const formHandler = () => {
        const newProduct = {
            title: title,
            price: price,
            description: description
        }
        console.log()
    }

    // const newProductApi = () => {
    //     axios.post("http://localhost:8000/api/products/new", product)
        
            
    // }
    
    const createProduct = (e) => {
        e.preventDefault();
        const newProduct = {
            title,
            price,
            description
        }
        axios.post("http://localhost:8000/api/products/new", newProduct)
            .then(res => console.log(res.data))
                
            .catch(err => console.log(err))
    }


        //--------Delete
    const deleteHandler = (id) => {
        deleteProductApi(id);
    }

    const deleteProductApi = (id) => {
        axios.delete(`http://localhost:8000/api/products/delete/${id}`)
            .then(res => {
                console.log(res);
                removeProductFromProducts(id);
            })
            .catch(err => {
                console.log(err);
            })
    }

    const removeProductFromProducts = (id) => {
        setAllProducts(allProducts.filter(product => product._id !== id))
    }

    return (
        <>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

                <h2>Product Manager</h2>
                <form onSubmit={createProduct}>
                    title: <input onChange={(e => setTitle(e.target.value))} value={title} /> <br />
                    price: <input onChange={(e => setPrice(e.target.value))} value={price} type="number" min="1" max="5000" /> <br />
                    description: <input onChange={(e => setDescription(e.target.value))} value={description} /> <br />
                    <button onClick={formHandler}>submit</button>
                </form>
            </div>

            <hr />
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <h1>All Products</h1>
                {   loaded && allProducts.map((product, key) =>
                    <div key={key}>
                            <Link to={`/product/${product._id}`}> {product.title}</Link>
                            <button onClick={e => deleteHandler(product._id)}>Delete Product</button>
                    </div>
                )
            }               
            </div>
                    
        </>
    )

}


export default DisplayAllProducts 