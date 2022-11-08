//import the controller to use the instantiated model
const JokeController = require ("../controllers/joke.controller")

module.exports = (app) => {
    //---FIND ALL JOKES ROUTE
    app.get("/api/jokes", JokeController.findAllJokes)

    ///RANDOM JOKE ROUTE
    app.get("/api/jokes/random", JokeController.randomJoke)
    
    //---CREATE NEW JOKE
    app.post("/api/jokes/new", JokeController.createJoke)

    //----FIND ONE BY ID
    app.get("/api/jokes/:id", JokeController.findOneJoke)

    //UPDATE/EDIT
    app.put("/api/jokes/update/:id", JokeController.updateExistingJoke)

    //DELETE
    app.delete("/api/jokes/delete/:id", JokeController.deleteJoke)

}