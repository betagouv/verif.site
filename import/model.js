const csv = require('csv-parser')
const fs = require('fs')
const async = require('async')

module.exports = function(results, callback) {

  const data = {}

  async.every(results, addResult, callback);

  function addResult(result, cb) {
    fs.createReadStream(result.path)
    .pipe(csv())
    .on('data', function(row) {
      const domain = row.Domain
      if( !data[domain]) {
        data[domain] = {}
      }
      data[domain][result.name] = cleanObject(row)
    })
    .on('end', () => {
      cb(data)
    })
  }
}

function cleanObject(object) {
  let cleanedObject = removePrototype(object)
  cleanedObject = parseObject(cleanedObject)
  return cleanedObject
}

function removePrototype(object) {
  return Object.assign({}, object);
}

function parseObject(object) {
  const newObject = {}
  const keys = Object.keys(object)
  keys.forEach((key) => {
    if(object[key] === 'True') {
      newObject[key] = true
    } else if (object[key] === 'False') {
      newObject[key] = false
    } else {
      newObject[key] = object[key]
    }
  })
  return newObject
}
