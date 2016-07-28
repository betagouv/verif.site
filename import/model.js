const csv = require('csv-parser')
const fs = require('fs')
const async = require('async')

module.exports = function(results, callback) {

  const data = {}

  async.every(results, addResult, callback);


  function addResult(result, cb) {
    fs.createReadStream(__dirname + '/../results/'+ result + '.csv')
    .pipe(csv())
    .on('data', function(row) {
      const domain = row.Domain
      if( !data[domain]) {
        data[domain] = {}
      }
      data[domain][result] = removePrototype(row)
    })
    .on('end', () => {
      cb(data)
    })
  }


}
function removePrototype(object) {
  return Object.assign({}, object);
}
