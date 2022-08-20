const mongoose = require('mongoose'); //imports Mongoose API which i s an object modelling tool for MongoDB


// Defining Book schema- singular
// create a new instance for entry into the database
// Mongoose starts with a shema
// Each schema maps to a MongoDB collection and defines
// the shape of the documents within the collection

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    isbn: {
        type: Number,
        required: true,
        immutable: true,
        min:1,
        max: 50
    },
    author: {
        type: String,
        required: true,
        minLenght: 1,
        maxLenght: 30 
    },
    description: {
        type: String
    },
    publish_date: {
        type: Date
    },
    publisher: {
        type: String
    },
    update_date: {
        type: Date,
        default: () => Date.now()
    }
})

// To use our schema definition, we need to convert our bookSchema into a Model
// Models are fancy constructors
// an instance of a model is a document
// Models create and read docs from DBs

module.exports = Book = mongoose.model('Book', bookSchema)

