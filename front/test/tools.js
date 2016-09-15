
function deepClone(object) {
  return JSON.parse(JSON.stringify(object))
}

export {deepClone}
