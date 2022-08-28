const express = require('express'); //import express
const connectDB = require('./config/db') //import connected db to main app
var cors = require('cors')
//const bodyParser = require('body-parser')  // express.json is preferred as it already built in

// routes
const books = require('./routes/api/books');

// connect app
const app = express();

// Connect Database
connectDB()

// cors
app.use(cors({ origin: true, credentials: true }));

//Parses incoming json request body
//app.use(bodyParser.json())

// Init Middleware
app.use(express.json({ extended: false }))


// use routes
app.use('/api/books', books)

// tester  get route
app.get('/', (req,res) => res.send('Hello world!'));

// port for running application
const port = process.env.PORT || 8082;

// express is listeng on port for requests
app.listen(port, () => console.log(`Server is running on port ${port}`))