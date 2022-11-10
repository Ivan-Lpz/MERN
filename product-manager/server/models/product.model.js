//IMPORT MONGOOSE TO BUILD A MODEL
const mongoose = require("mongoose");

//the schema - rules that the entries in the DB must follow

//THIS IS ALSO DEFINING WHAT WE ARE SAVING. FOR THIS EXAMPLE ITS 'PRODUCTS'
const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "must have {PATH}"],
        minlength: [3, "provide at least 3 chars"]
    },
    price: {
        type: Number,
        required: true
    },
    description:{
        type: String,
        required: [true, "must have {PATH}"],
        minlength: [5, "provide at least 5 chars"]
    }
}, {timestamps:true})


//the model - this is what we use to make the actual queries to the DB
const Product = mongoose.model("Product", ProductSchema)
//export the model 
module.exports = Product;