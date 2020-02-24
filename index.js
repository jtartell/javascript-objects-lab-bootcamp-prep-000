function updateObjectWithKeyAndValue(object, key, value) {
 
  return Object.assign({}, object, { [key]: value })
}
 
updateObjectWithKeyAndValue(object, key, value)

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  
  object[key] = value
  
  return object
}


  describe('destructivelyUpdateObjectWithKeyAndValue(object, key, value)', function() {
    it('updates `object` with the given `key` and `value` (it is destructive) and returns the entire updated object', function() {
      var obj = { prop: 1 }

      expect(destructivelyUpdateObjectWithKeyAndValue(obj, 'prop2', 2)).toMatch({
        prop: 1,
        prop2: 2
      })

      expect(obj).toMatch({
        prop: 1,
        prop2: 2
      })
    })
  })


var obj = { foo: 'bar' }
 
var newObj = Object.assign({}, obj)
 
newObj // { foo: 'bar' }
 
delete newObj.foo // true
 
newObj // {}
 
obj // { foo: 'bar' }