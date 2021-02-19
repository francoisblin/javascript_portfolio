// function myInstanceOf(val, Ctor) {
//     if (typeof val !== 'object' && typeof val !== 'function') {
//         return false
//     }

//     var proto = val
//     do {
//         proto = Object.getPrototypeOf(proto)
//         if ( proto === Ctor.prototype ) return true
//     } while (proto)
//     return false
//   }
  
function myInstanceOf(val, Ctor) {
    if (typeof val !== 'object' && typeof val !== 'function') {
        return false
    }

    var proto = val
    
    if (!proto) {
        return false
    }
    proto = Object.getPrototypeOf(proto)
    if ( proto === Ctor.prototype ) return true
    return myInstanceOf(proto, Ctor)
  }

  console.log(myInstanceOf({}, Object)); // should print true
  console.log(myInstanceOf(42, Number)); // should print false
  console.log(myInstanceOf(new Number(42), Number)); // should print true
  
  function A() {}
  function B() {}
  B.prototype = Object.create(A.prototype);
  var b = new B();
  console.log(myInstanceOf(b, B)); // should print true
  console.log(myInstanceOf(b, A)); // should print true
  console.log(myInstanceOf(b, Object)); // should print true
  console.log(myInstanceOf(b, Number)); // should print false