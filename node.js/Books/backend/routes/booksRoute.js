import express from 'express';
import { Book } from '../models/bookModel.js';
import upload from '../middleware/multer.js';
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// Route for Save a new Book
router.post('/', protect, upload.single('image'), async(request, response)=>{


    try {


        if(
            !request.body.title ||
            !request.body.author ||
            !request.body.publishYear
        ){
            return response.status(400).send({
                Message: 'Send all required fields: title, author, puplishYear',
            });
        }

        let imageUrl = '';
        if (request.file) {
            imageUrl = `${request.protocol}://${request.get('host')}/uploads/${request.file.filename}`;
        }
        
        const newBook = {
            title: request.body.title,
            author: request.body.author,
            publishYear: request.body.publishYear,
            image: imageUrl,
            userId: request.user._id, // Attach the logged-in user's ID to the book
        };

        const book = await Book.create(newBook);
        return response.status(201).send(book);

    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });        
    }
})

// Route for Get All Books from database
router.get('/', protect, async (request, response)=>{
    try {
        const books = await Book.find({ userId: request.user._id }); // Fetch books only for the logged-in user
        return response.status(200).json({
            count: books.length,
            data: books,
        });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
})

// Route Books from database by id // Route for Get a Book by ID (user-specific)
router.get('/:id', protect, async (request, response)=>{
    try {
        const { id } = request.params;

         // Check if the book exists and belongs to the logged-in user
        const book = await Book.findById(id);
        if (!book) {
            return response.status(404).json({ message: 'Book not found' });
        }
        if (book.userId.toString() !== request.user._id.toString()) {
            return response.status(403).json({ message: 'Unauthorized action' });
        }
        
        return response.status(200).json(book);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
})

// Route for Update a Book
router.put('/:id', protect, async(request, response)=>{
    try {
        if (
            !request.body.title ||
            !request.body.author ||
            !request.body.publishYear
        ) {
            return response.status(400).send({
                message: 'Send all required fields: title, author, publishYear',
            });
        }

        const { id } = request.params;

        // Check if the book exists and belongs to the logged-in user
        const book = await Book.findById(id);
        if (!book) {
            return response.status(404).json({ message: "Book not found" });
        }
        if (book.userId.toString() !== request.user._id.toString()) {
            return response.status(403).json({ message: "Unauthorized action" });
        }

        // Update the book
        const result = await Book.findByIdAndUpdate(id, request.body, {new: true});
        if (!result){
            return response.status(404).json({ message: 'Book not found' });
        }

        return response.status(200).send({ message: 'Book updated successfully', data: result });

    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
})

// Route for Delete a book
router.delete('/:id', protect, async (request, response)=>{
    try {
        const { id } = request.params;

        // Check if the book exists and bleongs to the logged-in user
        const book = await Book.findById(id);
        if (!book) {
            return response.status(404).json({ message: 'Book not found' });
        }
        if (book.userId.toString() !== request.user._id.toString()) {
            return response.status(403).json({ message: 'Unauthorized action' });
        }
        

        // Delete the book        
        const result = await Book.findByIdAndDelete(id);
        if (!result){
            return response.status(404).json({ message: 'Book not found' });
        }

        return response.status(200).send({ message: 'Book deleted successfully' });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
})

export default router;