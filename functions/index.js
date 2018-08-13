const functions = require('firebase-functions');
const fs = require('fs');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

exports.router = functions.https.onRequest((req, res) => {
    console.log('--url: ' + req.url);
    
    // Default page
    var pageview = '../public/404.html';

    // Get the html page
    if(req.url === '/wizard'){
        pageview = '../public/views/wizard.html';
    }
    else if(req.url === '/knight'){
        pageview = '../public/views/knight.html';
    }
    else if(req.url === '/elf'){
        pageview = '../public/views/elf.html';
    }

    // Render the page on browser as response
    fs.readFile(pageview, (err, data) => {
        if(err){
            console.log('error: ' + err);
        }

        res.set('Content-Type', 'text/html');
        res.send(data);
    });
});