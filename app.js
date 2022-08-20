const express = require('express'); //import express
const connectDB = require('./config/db') //import connected db to main app
const bodyParser = require('body-parser')

// routes
const books = require('./routes/api/books');

// connect app
const app = express();

// Connect Database
connectDB()

//Parses incoming json request body
app.use(bodyParser.json())

// use routes
app.use('/api/books', books)

// tester  get route
app.get('/', (req,res) => res.send('Hello world!'));

// port for running application
const port = process.env.PORT || 8082;

// express is listeng on port for requests
app.listen(port, () => console.log(`Server is running on port ${port}`))