const analyse = require('./analyze')
const model = require('./model')
const request = require('superagent')
const fs = require('fs')

const apiKey = process.env.DATA_GOUV_API_KEY  // in CI, this is set in the graphical interface

const scanners = ['inspect', 'sslyze', 'tls', 'pageload']
const name = 'sites'
const options = {
  dockerImage: 'betagouv/domain-scan',
  scanners,
  file: `${name}.csv`,
}

analyse(options, (err, stdout, stderr) => {
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

    console.log(`last updated at ${lastUpdated}`);

    if (!process.env.DATA_GOUV_API_KEY) {
      console.log('data.gouv api key not found, the generated results will not be uploaded')
      process.exit(0)
    }

    // This URL comes from the ressource hosted on our 'Incubateur' organization on data.gouv.fr
    // To become a member, request an invite from an existing admin
    request
      .post('http://www.data.gouv.fr/api/1/datasets/5805f1e2c751df2bb879df72/resources/234299a6-e9a4-4cf4-a220-681a94ac3e92/upload/')
      .attach('file', filePath)
      .set('X-API-KEY', apiKey)
      .set('Accept', 'application/json')
      .end(function(err, res){
        if (err) {
          console.log(err)
          process.exit(1)
        }

        console.log(`successfully uploaded ${filePath} to data.gouv`)
        console.log(`response: ${res.status}: ${JSON.stringify(res.body)}`);
        process.exit(0)
      })
  })
})
