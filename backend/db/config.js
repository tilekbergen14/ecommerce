const mongoose = require("mongoose")
require('dotenv').config

const mongoDb = async () => {
    try{
        mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log("Succesfully connected to the database!")
    }
    catch(err){
        console.log("Couldn't connect to the server")
    }
}

module.exports = mongoDb