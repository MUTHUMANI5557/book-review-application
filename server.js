const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static('public'));
app.use(express.json());

let books = [];
let reviews = [];

app.get('/api/books', (req, res) => {
    res.json(books);
});

app.post('/api/books', (req, res) => {
    const { title, author } = req.body;
    books.push({ id: books.length + 1, title, author });
    res.status(201).json({ message: 'Book added successfully' });
});

app.post('/api/reviews', (req, res) => {
    const { bookId, review } = req.body;
    reviews.push({ bookId, review });
    res.status(201).json({ message: 'Review added successfully' });
});

app.get('/api/reviews/:bookId', (req, res) => {
    const bookId = parseInt(req.params.bookId);
    const bookReviews = reviews.filter(r => r.bookId === bookId);
    res.json(bookReviews);
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
