/**
 * A very basic http demo for nodeJS.
 * Creates a server and write a plain text output on web
 */
const http = require('http');
const PORT = process.env.PORT || 5000

http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello, world!');
}).listen(PORT, () => console.log(`listening on ${PORT}`));