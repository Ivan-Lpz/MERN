const mongoose = require("mongoose");

module.exports = (DB_NAME) => {
    
    mongoose.connect(`mongodb://localhost/${DB_NAME}`, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log(`connected to ${DB_NAME}`))
    .catch(err => console.log( `cannot connect ${DB_NAME}`, err))
}