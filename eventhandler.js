/**
 * Demo on using events and EventEmitter
 */

const http = require('http');
const url = require('url');
const events = require('events');
const EventEmitter = new events.EventEmitter();

// Method to call when event is fired
var clickHandler = function(res){
    console.log('was clicked');

    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write('loaded from event handler');
    res.end();    
};

// Assign named event to EventEmitter
EventEmitter.on('click', clickHandler);

// Create server and run
http.createServer(function(req, res){
    // Call the created event
    EventEmitter.emit('click', res);
}).listen(8080);