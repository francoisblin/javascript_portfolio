'use strict'

function myDot(obj, attr) {
  var myProperty = obj
  while (myProperty) {
    Object.getOwnPropertyDescriptor(myProperty, attr)
    console.log(Object.getOwnPropertyDescriptor(myProperty, attr))
    if (Object.getOwnPropertyDescriptor(myProperty, attr)) return  Object.getOwnPropertyDescriptor(myProperty, attr).value
    myProperty = Object.getPrototypeOf(myProperty)  
  }
}




var obj = {a: 42};
console.log(myDot(obj, 'a')); // prints 42

var obj2 = Object.create(obj);
console.log(myDot(obj2, 'a')); // prints 42

console.log(myDot(obj2, 'b')); // prints undefined