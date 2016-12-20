const analyse = require('./analyze')
const model = require('./model')
const upload = require('./upload')
const fs = require('fs')

// In CI, this is set in the graphical interface
const apiKey = process.env.DATA_GOUV_API_KEY

// This URL comes from the ressource hosted on our 'Incubateur' organization on data.gouv.fr
// To become a member, request an invite from an existing admin
const url = 'http://www.data.gouv.fr/api/1/datasets/5805f1e2c751df2bb879df72/resources/234299a6-e9a4-4cf4-a220-681a94ac3e92/upload/'

const scanners = ['inspect', 'inspect', 'sslyze', 'tls', 'pageload']
const name = 'sites'
const options = {
  dockerImage: 'betagouv/domain-scan',
  scanners,
  file: `${name}.csv`,
}

analyse(options, (err) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }

  const files = scanners.map((item) => {
    return {name: item, path: `${__dirname}/../results/${item}.csv`}
  })

  files.push({name: 'meta', path: `${__dirname}/../data/${name}.csv`})

  model(files, (data) => {
    const filePath = `${__dirname}/../data/${name}.json`
    const lastUpdated = new Date().toLocaleString()

    fs.writeFileSync(filePath, JSON.stringify({data, meta: { lastUpdated }}, null, 2), 'utf8')

    if (!process.env.DATA_GOUV_API_KEY) {
      console.log('data.gouv api key not found, the generated results will not be uploaded')
      process.exit(0)
    } else {
      upload({ filePath, url, apiKey}, function(err, result) {
        if (err) {
          console.log(err)
          process.exit(1)
        }

        console.log(result)
        process.exit(0)
      })
    }
  })
})
