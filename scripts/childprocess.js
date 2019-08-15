/**
 * A very basic http demo for nodeJS.
 * Creates a server and executes a blocking windows batch (main.bat) script asynchronously
 * Data from the bat script is returned as a response from the /scriptest route
 */
const http = require('http')
const path = require('path')
const PORT = 3000
const { spawn, spawnSync } = require('child_process')

/**
 * Executes a windows batch (.bat) script synchronously
 * Warning: all noode process and server requests will hang until the bat script has finished
 * @param {String} batScript windows .bat script file name (or full path, if placed on other folders)
 * @returns {String} (see main.bat for output)
 */
const callSpawnSync = function(batScript) {
    // WARNING! Synchronous method here
    // Execute the bat script
    let script = spawnSync('cmd.exe', ['/c', batScript], {
      detached: true,    
    })

    // data is returned from script
    if (script.stderr.toString() !== '') {
      return script.stderr.toString()
    } else {
      return script.stdout.toString()
    }
}

/**
 * Executes a windows batch (.bat) script ASYNChronously
 * Other process can run while waiting for script to finish
 * @param {String} batScript windows .bat script file name (or full path, if placed on other folders)
 * @returns {String} (see main.bat for output)
 */
const callSpawnAsync = function(batScript) {
  return new Promise((resolve, reject) => {
    try {
      // Execute the bat script
      let script = spawn('cmd.exe', ['/c', batScript], {
        detached: true
      })

      // listen for the bat script's completion (data is returned from script)
      script.stdout.on('data', (data) => {
        resolve(data.toString())
      })

      // listen for errors
      script.stderr.on('data', (data) => {
        reject(data.toString())
      })
    } catch (error) {
      reject(error)
    }
  })
}

/**
 * Windows bat script call from GET /scriptest
 */
http.createServer(function(req, res){
  if (req.url === '/scriptest') {
    callSpawnAsync(path.join(__dirname, '/main.bat')).then((result) => {
      res.writeHead(200, {'Content-Type': 'text/plain'})
      res.end(result)
    }).catch((error) => {
      res.writeHead(200, {'Content-Type': 'text/plain'})
      res.end('error: ' + error)
    })
  } else {
    res.writeHead(200, {'Content-Type': 'text/plain'})
    res.end('Invalid route')
  }
}).listen(PORT, () => console.log(`listening on ${PORT}`))