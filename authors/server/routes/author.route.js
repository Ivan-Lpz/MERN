//import the controller to use the instantiated model
const AuthorController = require ("../controllers/author.controller")


//YOU CAN SEE THESE AS "BUTTONS" EACH OF THESE CAN BE A BUTTON THAT THE USER CAN CLICK
module.exports = (app) => {
    //---FIND ALL PRODUCTS ROUTE
    app.get("/api/authors", AuthorController.findAllAuthors)

    ///RANDOM PRODUCT ROUTE
    // app.get("/api/authors/random", AuthorController.randomProduct)
    
    //---CREATE NEW PRODUCT
    app.post("/api/authors/new", AuthorController.createAuthor)

    //----FIND ONE BY ID
    app.get("/api/author/:id", AuthorController.findOneAuthor)

    //UPDATE/EDIT
    app.put("/api/author/update/:id", AuthorController.updateExistingAuthor)

    //DELETE
    app.delete("/api/author/delete/:id", AuthorController.deleteAuthor)

}