function updateObjectWithKeyAndValue(object, key, value) {
 
  return Object.assign({}, object, { [key]: value })
}
 
updateObjectWithKeyAndValue(object, key, value)

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  
  object[key] = value
  
  return object
}



var obj = { foo: 'bar' }
 
var newObj = Object.assign({}, obj)
 
newObj // { foo: 'bar' }
 
delete newObj.foo // true
 
newObj // {}
 
obj // { foo: 'bar' }