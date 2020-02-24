function updateObjectWithKeyAndValue(object, key, value) {
 
  return Object.assign({}, object, { [key]: value })
}
 
updateObjectWithKeyAndValue(object, key, value)

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  
  object[key] = value
  
  return object
}

function deleteFromObjectByKey(object, key) {
  var newObj = function updateObjectWithKeyAndValue(object, key, value) {
    Object.assign({}, object, { [key]: value })}
    delete newObj.key
    return newObj
}

function updateObjectWithKeyAndValue(obj, key, value) {
 
  return Object.assign({}, obj, { [key]: value })
}