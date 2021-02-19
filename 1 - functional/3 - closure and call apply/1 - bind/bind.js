Function.prototype.myBind = function(thisArg) {
  let self = this
  return function() {
   return self.apply(thisArg, arguments)
  }
};

function simpleTest(a) {
  console.log(this);
  console.log(a);

  return 42;
}

var bound = simpleTest.myBind(42);
bound('a is a superb string');

console.log('--');

bound = simpleTest.myBind({test: 42});
console.log('The answer is: ' + bound('oh yes it is! (not like this)'));