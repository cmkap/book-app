const express = require('express');
const router = express.Router();

// Load Book model
// const Book = require('../../models/Book');

// @route GET api/books/test
// @description tests books route
// @access Public
router.get('/test', (req, res) => res.send('book route testing!'));

// @route GET api/books
// @descriptions GEt all books
// @access  Public
router.get('/', (req, res) => {

})

module.exports = router;