const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    // console.log(req.url)
    if (req.url === '/'){
        fs.readFile('./page.html', 'utf8', (err, data) => {
            res.writeHead('200', {'Content-Type': 'type:html'});
            res.end(data);
        })
    }else{
        res.writeHead('200', {'Content-Type': 'type:plain'});
        res.end('404 Not found');
    }
});
server.listen(3000)
console.log('running')