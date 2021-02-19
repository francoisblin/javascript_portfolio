function executeAll(fns) {
    return fns.reduce(function(acc, curr) {
        return function() {
            acc.call(this)
            curr.apply(this, arguments)
        }
    }, function(){})
  }
  
  var allNbs = executeAll([
    console.log.bind(console, '1'),
    console.log.bind(console, '2'),
    console.log.bind(console, '3'),
  ]);
  console.log('--'); // prints "--"
  allNbs(); // prints "1" "2" "3" (on separate lines)
  
  var thisTest = executeAll([function() {
    console.log(this.x);
  }, function() {
    console.log(this.x / 2);
  }]);
  thisTest.call({x: 42}); // prints "42" "21" (on separate lines)
  
  // should work with an empty array
  var doNothing = executeAll([]);
  doNothing();