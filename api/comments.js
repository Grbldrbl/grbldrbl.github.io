const comments = [];

export default function handler(req, res) {
    if (req.method === 'POST') {
        const { name, text } = req.body;
        if (name && text) {
            comments.push({ name, text, createdAt: new Date() });
            res.status(201).json({ message: 'Comment added.' });
        } else {
            res.status(400).json({ error: 'Name and text are required.' });
        }
    } else if (req.method === 'GET') {
        res.status(200).json(comments);
    } else {
        res.status(405).json({ error: 'Method not allowed.' });
    }
}
