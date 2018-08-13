/**
 * Creates a server and write an html page from a file
 * Parses the URL into parts.
 * Implements simple routing.
 */

 // Modules
const http = require('http');
const url = require('url');
const fs = require('fs');

// Constants
const port = 8080;


// Create and run server
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
    var data = "It works!";
    var pages = [];


    if(q.pathname === '/'){
       data = fs.readFileSync('public/index.html', 'utf8');
    }
    else if(q.pathname === '/elf'){
        data = fs.readFileSync('public/views/elf.html', 'utf8');
    }   
    else if(q.pathname === '/wizard'){
        data = fs.readFileSync('public/views/wizard.html', 'utf8');
    }      
    else if(q.pathname === '/knight'){
        data = fs.readFileSync('public/views/knight.html', 'utf8');
    }     
    else if(q.pathname === '/js/jquery-3.3.1.min.js'){
        data = fs.readFileSync('public/js/jquery-3.3.1.min.js', 'utf8');
    } 
    else{
        data = fs.readFileSync('public/404.html', 'utf8');
    }
    
    // Render the static file
    res.writeHead(200);
    res.write(data);
    res.end();

}).listen(port, () => console.log(`Listening on port http://localhost:${port}`));