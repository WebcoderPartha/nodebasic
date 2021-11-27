const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}))
app.use('/form', express.static(__dirname+'/public'));

app.use((req, res, next) => {
    console.log('middleware');
    next();
})
app.post('/post', (req, res)=> {
    console.log(req.body)
})

app.listen(port, ()=> {
    console.log(`Listening is ${port}`);
})