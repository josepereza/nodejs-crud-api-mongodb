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

// define a simple route
app.get('/', (req, res) => {
    res.json({"message": "Welcome to Agrifuture. To be a good farmer."});
})

// listen for requests
app.listen(3000, () => {
    console.log("Server's listening on: http://localhost:3000")
})