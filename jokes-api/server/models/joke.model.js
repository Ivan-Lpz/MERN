//IMPORT MONGOOSE TO BUILD A MODEL
const mongoose = require("mongoose");

//the schema - rules that the entries in the DB must follow
const JokeSchema = new mongoose.Schema({
    setup: String,
    punchline: String
}, {timestamps:true})

//the model - this is what we use to make the actual queries to the DB
const joke = mongoose.model("Joke", JokeSchema)
//export the model 
module.exports = joke;