// import React, {useState} from 'react'
// import axios from 'axios'

// const Form = (props) => {

//     const [title, setTitle] = useState("")
//     const [price, setPrice] = useState(0)
//     const [description, setDescription] = useState("")
//     const createProduct = (e) => {
//         e.preventDefault();
//         const newProduct = {
//             title,
//             price,
//             description
//         }
//         axios.post("http://localhost:8000/api/products/new", newProduct)
//         .then(res => console.log(res.data))
//         .catch(err => console.log(err))
//     }

//     return (
//         <>
//         <h2>Product Manager</h2>
//         <form onSubmit={createProduct}>
//             title: <input onChange={(e => setTitle(e.target.value))} value={title} /> <br/>
//             price: <input onChange={(e => setPrice(e.target.value))} value={price} type="number" /> <br/>
//             description: <input onChange={(e => setDescription(e.target.value))} value={description} /> <br/>
//             <button>submit</button>
//         </form>
//         </>
//     )
// }

// export default Form