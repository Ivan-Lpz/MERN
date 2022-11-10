//import the controller to use the instantiated model
const ProductController = require ("../controllers/product.controller")


//YOU CAN SEE THESE AS "BUTTONS" EACH OF THESE CAN BE A BUTTON THAT THE USER CAN CLICK
module.exports = (app) => {
    //---FIND ALL PRODUCTS ROUTE
    app.get("/api/products", ProductController.findAllProducts)

    ///RANDOM PRODUCT ROUTE
    // app.get("/api/products/random", ProductController.randomProduct)
    
    //---CREATE NEW PRODUCT
    app.post("/api/products/new", ProductController.createProduct)

    //----FIND ONE BY ID
    app.get("/api/products/:id", ProductController.findOneProduct)

    //UPDATE/EDIT
    app.put("/api/products/update/:id", ProductController.updateExistingProduct)

    //DELETE
    app.delete("/api/products/delete/:id", ProductController.deleteProduct)

}