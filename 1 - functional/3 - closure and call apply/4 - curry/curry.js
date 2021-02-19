function partial(fn) {
    let partialArgs = Array.prototype.slice.call(arguments, 1)
    return function() {
        return fn.apply(this, partialArgs.concat(Array.prototype.slice.call(arguments)))
        
    }
  }
  
function curry(fn, arity) {
    arity = arity || fn.length
    return function() {
        let args = Array.prototype.slice.call(arguments)
        if (args.length >= arity) {
            return fn.apply(this, args)
        } 
        return curry(partial.apply(this, [fn].concat(args)), arity - arguments.length);
    }
  }
  
  function add(a, b, c, d) {
    return a + b + c + (d || 0);
  }
  
  var curried = curry(add);
  console.log(curried(11, 11, 11, 9)); // prints 42
  console.log(curried(11)(11)(11)(9)); // prints 42
  
  curried = curry(add, 3);
  console.log(curried(15, 15)(12)); // prints 42
  console.log(curried(15, 15)(10, 2)); // prints 42
  
  const add30 = curried(15, 15);
  console.log(add30(12)); // prints 42
  console.log(add30(5, 4)); // prints 39
  
  console.log(typeof curried(15)(15)); // prints function
  
  function printThis() {
    console.log(this);
  }
  curried = curry(printThis, 1);
  curried
    .call('this will be ignored here (no arguments)')
    .call('This is awesome', 'run') // prints This is awesome
  ;