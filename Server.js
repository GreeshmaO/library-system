const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const port = 3046;

// Middleware
app.use(express.json());
app.use(cors({
    origin: "*", // Allow all origins
    methods: ["GET", "POST", "DELETE"]
}));

// MongoDB connection
mongoose.connect('mongodb+srv://reddygreesh14:fVrjdJd145dDGeD4@cluster0.vfxaj.mongodb.net/DB1?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('MongoDB connection error:', err));

// Book Schema and Model
const bookSchema = new mongoose.Schema({
    title: String,
    author: String,
    yearPublished: Number
});
const Book = mongoose.model('Book', bookSchema);

// GET all books from MongoDB
app.get('/books', async (req, res) => {
    try {
        const books = await Book.find();
        res.json(books);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// POST a new book to MongoDB
app.post('/books', async (req, res) => {
    const { title, author, yearPublished } = req.body;

    if (!title || !author || !yearPublished) {
        return res.status(400).json({ error: "All fields are required" });
    }

    try {
        const newBook = new Book({ title, author, yearPublished });
        const savedBook= await newBook.save();
        console.log('Book saved:',savedBook);
        res.status(201).json(savedBook);

    } catch (err) {
        console.error('Error Saving book',err);
        res.status(500).json({ error: err.message });
    }
});

// DELETE a book by ID from MongoDB
app.delete('/books/:id', async (req, res) => {
    try {
        const deletedBook = await Book.findByIdAndDelete(req.params.id);
        if (!deletedBook) {
            return res.status(404).json({ error: "Book not found" });
        }
        res.json({ message: "Book deleted successfully" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Start server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
