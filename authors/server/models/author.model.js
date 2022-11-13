//IMPORT MONGOOSE TO BUILD A MODEL
const mongoose = require("mongoose");

//the schema - rules that the entries in the DB must follow

//THIS IS ALSO DEFINING WHAT WE ARE SAVING. FOR THIS EXAMPLE ITS 'PRODUCTS'
const AuthorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "must have name"],
        minlength: [3, "provide at least 3 chars"]
    },
    age: {
        type: Number,
        min: 5,
        max: 100
    },
    retired: {
        type: Boolean,
        default: false
    },
    genre: {
        type: String,
        required: true
    },
}, {timestamps:true})


//the model - this is what we use to make the actual queries to the DB
const Author = mongoose.model("Author", AuthorSchema)
//export the model 
module.exports = Author;