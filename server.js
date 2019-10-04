const express = require('express')
const bodyParser = require('body-parser')

// create express app
const app = express();

// bodyParsre is a middleware.
// A middleware is a function that has access to the request and response objects. 
// It can execute any code, transform the request object, or return a response.

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())

// Configuring the database
const dbConfig = require('./config/database.config.js')
const mongoose = require('mongoose')

mongoose.Promise = global.Promise

// Connecting to the database
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true,
}).then(() => {
    console.log("Successfully connected to the database")
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err)
    process.exit()
})

// define a simple route
app.get('/', (req, res) => {
    res.json({"message": "Welcome to Agrifuture. To be a good farmer."});
})

// Require Notes routes
require('./app/routes/note.routes.js')(app)

// listen for requests
app.listen(3000, () => {
    console.log("Server's listening on: http://localhost:3000")
})