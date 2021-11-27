const express = require('express');
const app = express();
const port = process.env.PORT || 3000;


app.use('/css', express.static(__dirname+ '/public'));

// app.use((req, res, next) => {
//     console.log('middleware');
//     next();
// })

app.get('/', (req, res)=> {
    res.send(`
    <!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
<h3>sdkdjfl</h3>
</body>
</html>
    
    `)
});

app.listen(port, ()=>{
    console.log(`Listening is ${port}`);
})