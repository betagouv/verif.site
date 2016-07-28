const analyse = require('./analyze')
const model = require('./model')

const scanners = ['inspect', 'sslyze', 'tls', 'pageload']


const options = {
  dockerImage: 'domainscan_scan',
  scanners,
  file: 'sites.csv',
}



analyse(options, (err, stdout, stderr) => {
  if(err) return console.error(err)
  console.log('analysed Done')

  console.log('create model')
  model(scanners, (data) => {
    console.log('END', JSON.stringify(data))
  })
})
