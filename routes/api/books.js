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

// @route GET api/books/:id
// @description Update book
// @access Public

router.put('/:id', (req, res) => {
    Book.findByIdAndUpdate(req.params.id, req.body)
        .then(book => res.json({ msg: 'Updated succesfully' }))
        .catch(err => 
            res.status(400).json({error: 'Unable to add this book: '+ err.mesage}))
})

// @route GET api/books/:id 
// @description Delete book by id
// @access Public
router.delete('/:id', (req, res) => {
    Book.findByIdAndRemove(req.params.id, req.body)
        .then(book => res.json({msg: 'Book entry deleted successfully'}))
        .catch(err => res.status(404).json({error: 'No such book'}));
        console.log(err.message)
})
module.exports = router;