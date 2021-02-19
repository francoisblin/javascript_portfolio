function myBind(fn, thisArg) {
    let self = fn
    return function() {
        return self.apply(thisArg, arguments)
    }
  }
  
  function simpleTest(a) {
    console.log(this);
    console.log(a);
  
    return 42;
  }
  
  var bound = myBind(simpleTest, 42);
  bound('a is a superb string');
  
  console.log('--');
  
  bound = myBind(simpleTest, {test: 42});
  console.log('The answer is: ' + bound('oh yes it is! (not like this)'));