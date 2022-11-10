//---Controller
//making queries to the databse
//using the model so, we have to import the model 
const Product = require("../models/product.model");

//YOU CAN THINK OF THIS AS THE BEHAVIOR OF THE BUTTONS THAT ARE TRIGGERED BY THE BUTTON PRESSES
//make all the CRUD!!
//CREATE
module.exports.createProduct = (req,res) => {
    Product.create(req.body)
        .then(newProduct => res.json({
            product: newProduct
        }))
        .catch(err => res.json({message: 'something went wrong', error: err}))
}

//READ ALL
module.exports.findAllProducts = (req, res) => {
    //use the model to execute a query
    Product.find()
    .then(allDaProducts => {
        //Important what we return here is what we will recieve in REACT
        res.json(allDaProducts)
    })
    .catch(err => res.json({message: "something went wrong", serverError: err}))
}

//READ ONE BY ID
module.exports.findOneProduct = (req, res) => {
    Product.findOne({ _id: req.params.id })
    .then(oneProduct => res.json({ product: oneProduct}))
    .catch(err => res.json({ message: "Something went wrong", error: err}))
}

//UPDATE BY ID
module.exports.updateExistingProduct = (req, res) => {
    Product.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedProduct => res.json({product: updatedProduct}))
        .catch(err => res.json({ message: 'Something went wrong', error: err}));
}

//DELETE
module.exports.deleteProduct = (req, res) => {
    Product.deleteOne({ _id: req.params.id})
    .then(result => res.json({result: result}))
    .catch(err => res.json({message: 'Something went wrong', error: err}));
}

//RANDOM Product FUNCTION
// module.exports.randomJoke = (req, res) => {
//     Product.find()
//     .then(allDaJokes => {
//         const randomJokeIndex = Math.floor(Math.random() * allDaJokes.length);
//         res.json({result: allDaJokes[randomJokeIndex]})
//     })
//     .catch(err => res.json({message: 'Something went wrong', error: err}));

// }
