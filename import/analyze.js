const exec = require('child_process').exec;

module.exports = function({ dockerImage, scanners, file}, callback) {
  const cmd = 'docker run ' +
    '-v ' + __dirname + '/../data:/data ' +
    '-v ' + __dirname + '/../results:/home/scanner/results ' +
    dockerImage +
    ' /data/' + file + ' --scan=' + scanners.join(',') +
    ' --force';

  console.log(`running scan\n${cmd}`);
  exec(cmd, callback);
}
