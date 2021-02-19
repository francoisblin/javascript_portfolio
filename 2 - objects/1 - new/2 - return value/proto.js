function MyConstructor () {

}

var myProto = {}

MyConstructor.prototype = myProto

var myObject = new MyConstructor()

console.log(myObject.__proto__ === myProto)

