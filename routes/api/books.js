const express = require('express');
const router = express.Router();

// Load Book model
const Book = require('../../models/Book');

// @route GET api/books/test
// @description tests books route
// @access Public
router.get('/test', (req, res) => res.send('book route testing!'));

// @route GET api/books
// @descriptions GEt all books
// @access  Public
router.get('/', async(req, res) => {
    try{
        const booksDataResponse = await Book.find()
        res.json(booksDataResponse)
    } catch (error) {
        res.status(404).json({ nobooksfound: 'No Books found: '+error.message})
    }
})

// @route GET api/books/;id
// @description Get single book by id
// @access Public

router.get('/:id', async(req,res) => {
    try{
        const bookDataResponse = await Book.findById(req.params.id)
        res.json(bookDataResponse)
    } catch (err) {
        res.status(400).json({error: 'Unable to add this book: '+err.message})
    }
})

// @route POST api/books
// @description add/save book
// @access Public
router.post('/', async (req, res) => {
    try{
        await Book.create(req.body)
        res.json({msg: 'Book added successfully'})
    } catch(err) {
        res.status(400).json({error: 'Unable to add this book: '+err.message})
    }
})
module.exports = router;