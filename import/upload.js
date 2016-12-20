const request = require('superagent')

module.exports = function upload({filePath, url, apiKey}, callback) {
  request
    .post(url)
    .attach('file', filePath)
    .set('X-API-KEY', apiKey)
    .set('Accept', 'application/json')
    .end(function(err, res){
      if (err) callback(err)

      callback(null, `successfully uploaded ${filePath} to ${url}, response: ${res.status}: ${JSON.stringify(res.body)}`)
    })
}
