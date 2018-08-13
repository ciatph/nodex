/**
 * Creates a server and write an html page from a file
 * Parses the URL into parts.
 * Implements simple routing.
 */
const http = require('http');
const url = require('url');
const fs = require('fs');

const port = 8080;

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

    // Load the static html or javascript file
    var data = (q.pathname === '/') ? fs.readFileSync('public/index.html', 'utf8') : 
        fs.readFileSync('public/js/jquery-3.3.1.min.js', 'utf8');
    
    // Render the static file
    res.writeHead(200);
    res.write(data);
    res.end();
}).listen(port, () => console.log(`Listening on port http://localhost:${port}`));