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
    Object.as
    delete newObj.keysign({}, object, { [key]: value })}
    return newObj
}

function updateObjectWithKeyAndValue(obj, key, value) {
 
  return Object.assign({}, obj, { [key]: value })
}
var obj = { foo: 'bar' }
 
var newObj = Object.assign({}, obj)
 
newObj // { foo: 'bar' }
 
delete newObj.foo // true
 
newObj // {}
 
obj // { foo: 'bar' }