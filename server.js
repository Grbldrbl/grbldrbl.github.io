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

app.delete('/comments/:index', (req, res) => {
    const index = parseInt(req.params.index);
    if (index >= 0 && index < comments.length) {
        comments.splice(index, 1);
        res.status(200).send({ message: 'Comment deleted.' });
    } else {
        res.status(404).send({ message: 'Comment not found.' });
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
