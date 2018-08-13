/**
 * Creates a server and write an html page from a file
 * Parses the URL into parts
 */
const http = require('http');
const url = require('url');
const fs = require('fs');

http.createServer(function(req, res){
    var q = url.parse(req.url);

    // Returns the web root
    console.log('host: ' + q.host);   
    
    // Returns the /webroot/<path>
    console.log('path: ' + q.pathname);

    // Returns the URL parameters query
    console.log('params: ' + q.search);

    // Returns an object of URL parameter-value pairs
    var params = q.query;

    // Load and render the html file
    fs.readFile('./public/index.html', function(err, data){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
    });
}).listen(8080);