const analyse = require('./analyze')
const model = require('./model')
const fs = require('fs')

const scanners = ['inspect', 'sslyze', 'tls', 'pageload']

const name = 'sites'
const options = {
  dockerImage: 'domainscan_scan',
  scanners,
  file: name+ '.csv',
}



analyse(options, (err, stdout, stderr) => {
  if(err) return console.error(err)
  console.log('analyze Done')

  console.log('create model')

  const files = scanners.map((item) => {
    return {name: item, path: __dirname + '/../results/' + item + '.csv'}
  })
  files.push({name: 'meta', path: __dirname + '/../data/' + name + '.csv'})

  model(files, (data) => {
    fs.writeFileSync(__dirname + '/../data/sites.json', JSON.stringify({data, meta: {lastUpdated: Date.now()}}), 'utf8')
  })
})
