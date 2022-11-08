//---Controller
//making queries to the databse
//using the model so, we have to import the model 
const Joke = require("../models/joke.model")

//make all the CRUD!!
//CREATE
module.exports.createJoke = (req,res) => {
    Joke.create(req.body)
        .then(newJoke => res.json({
            joke: newJoke
        }))
        .catch(err => res.json({message: 'something went wrong', error: err}))
}

//READ ALL
module.exports.findAllJokes = (req, res) => {
    //use the model to execute a query
    Joke.find()
    .then(allDaJokes => {
        //Important what we return here is what we will recieve in REACT
        res.json(allDaJokes)
    })
    .catch(err => res.json({message: "something went wrong", serverError: err}))
}

//READ ONE BY ID
module.exports.findOneJoke = (req, res) => {
    Joke.findOne({ _id: req.params.id })
    .then(oneJoke => res.json({ joke: oneJoke}))
    .catch(err => res.json({ message: "Something went wrong", error: err}))
}

//UPDATE BY ID
module.exports.updateExistingJoke = (req, res) => {
    Joke.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedJoke => res.json({joke: updatedJoke}))
        .catch(err => res.json({ message: 'Something went wrong', error: err}));
}

//DELETE
module.exports.deleteJoke = (req, res) => {
    Joke.deleteOne({ _id: req.params.id})
    .then(result => res.json({result: result}))
    .catch(err => res.json({message: 'Something went wrong', error: err}));
}

//RANDOM JOKE FUNCTION
module.exports.randomJoke = (req, res) => {
    Joke.find()
    .then(allDaJokes => {
        const randomJokeIndex = Math.floor(Math.random() * allDaJokes.length);
        res.json({result: allDaJokes[randomJokeIndex]})
    })
    .catch(err => res.json({message: 'Something went wrong', error: err}));

}
