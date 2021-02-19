Function.prototype.myBind = function(thisArg) {
    let self = this
    let partialArgs = Array.prototype.slice.call(arguments, 1)
    return function() {
        return self.apply(thisArg, partialArgs.concat(Array.prototype.slice.call(arguments)))
    }
  };
  
  function addToThis(a, b) {
    return this + a + (b || 0);
  }
  
  var bound = addToThis.myBind(40, 2);
  console.log(bound()); // prints 42
  
  bound = addToThis.myBind(10, 20, 12);
  console.log(bound()); // prints 42
  
  bound = addToThis.myBind(32);
  console.log(bound(10)); // prints 42