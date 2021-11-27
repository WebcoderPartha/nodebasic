const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('homepage');
});

app.get('/post/:id', (req, res) => {
   res.send(`Post id is ${req.params.id} | ${req.statusCode}`);
});

app.listen(port, () => console.log(`Listening on port ${port}`));