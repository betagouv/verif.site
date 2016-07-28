const analyse = require('./analyze')


const options = {
  dockerImage: 'domainscan_scan',
  scanners: ['inspect', 'sslyze', 'tls', 'pageload'],
  file: 'example.csv',
}

analyse(options, (err, stdout, stderr) => {
  
})
