require('dotenv').config()
const express =  require('express')
const connectDb = require("./db/config")
const app = express()

const PORT = process.env.PORT || 5000

app.listen(PORT, connectDb)