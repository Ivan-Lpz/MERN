//---Controller
//making queries to the databse, //using the model so, we have to import the model 
const Author = require("../models/author.model");

//YOU CAN THINK OF THIS AS THE BEHAVIOR OF THE BUTTONS THAT ARE TRIGGERED BY THE BUTTON PRESSES
//make all the CRUD!!
//CREATE
module.exports.createAuthor = (req,res) => {
    Author.create(req.body)
        .then(newAuthor => res.json({
            author: newAuthor
        }))
        .catch(err => res.status(400).json(err))
}

//READ ALL
module.exports.findAllAuthors = (req, res) => {
    //use the model to execute a query
    Author.find()
    .then(allDaAuthors => {
        //Important what we return here is what we will recieve in REACT
        res.json(allDaAuthors)
    })
    .catch(err => res.status(400).json(err))}

//READ ONE BY ID
module.exports.findOneAuthor = (req, res) => {
    Author.findOne({ _id: req.params.id })
    .then(oneAuthor => res.json({ author: oneAuthor}))
    .catch(err => res.status(400).json(err))}

//UPDATE BY ID
module.exports.updateExistingAuthor = (req, res) => {
    Author.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedAuthor => res.json({author: updatedAuthor}))
        .catch(err => res.status(400).json(err))}

//DELETE
module.exports.deleteAuthor= (req, res) => {
    Author.deleteOne({ _id: req.params.id})
    .then(result => res.json({result: result}))
    .catch(err => res.status(400).json(err))}


