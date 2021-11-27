const express = require('express');

const app = express();
const port = process.env.PORT || 3000

app.get('/', (req, res) => {

    res.send('<h2>Home page</h2>');

});

app.get('/about', (req, res)=> {
    res.send('<h2>About Page</h2>')
})

app.listen(port);
console.log('its working')