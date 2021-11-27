const https = require('https');
const http = require('http');
const url = 'https://jsonplaceholder.typicode.com/posts';

const server = http.createServer((req, resServer) => {

    if (req.method === 'GET' && req.url === '/posts'){

        https.get(url, requestJson=> {
            requestJson.on('data', data=> {
                requestJson.setEncoding('utf8');
                resServer.write(data)
            });
            requestJson.on('end', () => {
                resServer.end();
                console.log('Server is end')
            })
        })
    }else{
        resServer.writeHead('404', {'Content-Type': 'text/plain'});
        resServer.end('404 not found!')
    }

})
server.listen(3333)

console.log("server is running")