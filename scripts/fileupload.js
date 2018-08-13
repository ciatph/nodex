/**
 * Read a file and upload it on server
 */
const fs = require('fs');
const http = require('http');
const formidable = require('formidable');

http.createServer(function(req, res){
    if(req.url === '/fileupload'){
        var form = formidable.IncomingForm();
        form.parse(req, function(err, fields, files){
            res.write('File uploaded');
            res.end();
        });
    }
    else{
        var formtext = `
            <form action="fileupload" method="post" enctype="multipart/form-data">
                <input type="file" name="filetoupload"><br>
                <input type="submit">
            </form>`;
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(formtext);    
        return res.end();    
    }
}).listen(8080);