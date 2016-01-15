var fs = require('fs')
  , path = require('path')
  , scheduler = require('./scheduler');

module.exports = function(lib, folders) {
  folders.forEach(function(folder) {

    var directory = path.join(lib, folder, 'jobs');

    if (fs.existsSync(directory) === false) return;

    var files = fs.readdirSync(directory);

    files.forEach(function(file) {
      var Job = require(path.join(directory, file));
      new Job(scheduler).schedule();
    });
  });
};