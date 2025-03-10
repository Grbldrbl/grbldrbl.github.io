const comments = [];

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { username, comment } = req.body;
    comments.push({ username, comment, timestamp: new Date().toISOString() });
    res.status(201).json({ message: 'Comment added' });
  } else if (req.method === 'GET') {
    res.status(200).json(comments);
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
