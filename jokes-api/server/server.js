const express = require("express");
const app = express();
const PORT = 8000;
const DB = "jokes";


// - - - MIDDLEWARE - - -
app.use(express.json(), express.urlencoded({extended: true}));


//CONNECTED TO DATABASE USING MONGOOSE
require("./config/mongoose.config")(DB)

//-----import the routes after the database connection
require("./routes/joke.route")(app)



//START THE SERVER as well as nodemon server.js in the terminal
app.listen(PORT, () => console.log(`>> server up on ${PORT} <<`))