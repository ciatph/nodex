/**
 * Creates a server and write an html page from a file
 * Parses the URL into parts.
 * Implements simple routing.
 */

 // Modules
const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path')
const { callSpawnAsync, renderHTML } = require('./defines/utils')

// Constants
const PORT = process.env.PORT || 5000


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
    let params = q.query;

    // Load the static html or javascript file
    let data = "It works!";
    let pages = [];

    if(q.pathname === '/'){
       data = fs.readFileSync('public/index.html', 'utf8');
       renderHTML(res, data);
    }
    else if(q.pathname === '/elf'){
        data = fs.readFileSync('public/views/elf.html', 'utf8');
        renderHTML(res, data);
    }   
    else if(q.pathname === '/wizard'){
        data = fs.readFileSync('public/views/wizard.html', 'utf8');
        renderHTML(res, data);
    }      
    else if(q.pathname === '/knight'){
        data = fs.readFileSync('public/views/knight.html', 'utf8');
        renderHTML(res, data);
    }
    else if(q.pathname === '/scriptest'){
        isAsync = true
        callSpawnAsync(path.join(__dirname + '/scripts/main.bat')).then((result) => {
            res.writeHead(200);
            res.end(result);
        }).catch((error) => {
            res.writeHead(200);
            res.end(result);
        })
    }
    else if(q.pathname === '/js/jquery-3.3.1.min.js'){
        data = fs.readFileSync('public/js/jquery-3.3.1.min.js', 'utf8');
        renderHTML(res, data);
    }
    else if (q.pathname === '/favicon.ico') {
        // do nothing
    }
    else{
        data = fs.readFileSync('public/404.html', 'utf8');
        renderHTML(res, data);
    }
}).listen(PORT, () => console.log(`Listening on port http://localhost:${PORT}`));