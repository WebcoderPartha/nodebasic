const https = require('https');
const fs = require('fs');
const url = 'https://jsonplaceholder.typicode.com/posts';

https.get(url, res => {

    body = '';
    res.setEncoding('utf8');

    res.on('data', data=> {
        body += data;
    });

    res.on('end', ()=> {
        body = JSON.parse(body);
        for(const value of body){
           console.log(value.id)
        }

    })

})