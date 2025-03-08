const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

let comments = [];

app.post('/comments', (req, res) => {
    const comment = req.body.comment;
    comments.push(comment);
    res.status(201).send({ message: 'Comment added.' });
});

app.get('/comments', (req, res) => {
    res.status(200).send(comments);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
