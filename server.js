const express = require('express');
const app = express();
app.use(express.json());

let comments = [];

app.post('/comments', (req, res) => {
  const comment = req.body;
  comments.push(comment);
  res.status(201).send(comment);
});

app.get('/comments', (req, res) => {
  res.send(comments);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
