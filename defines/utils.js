const { spawn } = require('child_process')

module.exports = {
  /**
   * Executes a windows batch (.bat) script ASYNChronously
   * Other process can run while waiting for script to finish
   * @param {String} batScript windows .bat script file name (or full path, if placed on other folders)
   * @returns {String} (see main.bat for output)
   */
  callSpawnAsync: function(batScript) {
    return new Promise((resolve, reject) => {
      let script = spawn('cmd.exe', ['/c', batScript], {
        detached: true
      })
    
      script.stdout.on('data', (data) => {
        resolve(data.toString())
      })
    })
  },

  /**
   * Returns and renders an html website
   * @param {Obhect} res nodejs http server repsonse
   * @param {String} data html file or text to render as html
   */
  renderHTML: function(res, data) {
    res.writeHead(200);
    res.write(data);
    res.end();
  }
}