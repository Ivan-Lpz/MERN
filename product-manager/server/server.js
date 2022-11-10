const express = require("express");
const cors = require('cors')
const app = express();
const PORT = 8000;
const DB = "products";

// - - - MIDDLEWARE - - -
// app.use(cors({
//     origin: "http://localhost:3000",
//     methods: ["GET", "POST"]
// }))


//MIDDLEWARE
app.use(cors())
app.use(express.json(), express.urlencoded({extended: true}));


//CONNECTED TO DATABASE USING MONGOOSE
require("./config/mongoose.config")(DB)

//-----import the routes after the database connection
require("./routes/product.route")(app)



//START THE SERVER as well as nodemon server.js in the terminal
app.listen(PORT, () => console.log(`>> server up on ${PORT} <<`))

