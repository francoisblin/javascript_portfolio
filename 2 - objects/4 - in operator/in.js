// function myIn(attr, obj) {
//     var myObj = obj
//     do {
//       if (Object.getOwnPropertyDescriptor(myObj, attr)) return true
//       myObj = Object.getPrototypeOf(myObj)  
//     } while (myObj)
//     return false
//   }

function myIn(attr, obj) {
    var myObj = obj
    if(!myObj) {
        return false
    }
    if (Object.getOwnPropertyDescriptor(myObj, attr)) return true
    myObj = Object.getPrototypeOf(myObj) 
    return myIn(attr, myObj)
  }
  
  var obj = {test: 42};
  console.log(myIn('test', obj)); // prints true
  console.log(myIn('tset', obj)); // prints false
  
  var obj2 = Object.create(obj);
  console.log(myIn('test', obj2)); // prints true
  console.log(myIn('tset', obj2)); // prints false
  
  var obj3 = Object.create(obj2);
  console.log(myIn('test', obj3)); // prints true
  console.log(myIn('tset', obj3)); // prints false