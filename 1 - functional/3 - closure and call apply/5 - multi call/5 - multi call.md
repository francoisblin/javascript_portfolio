# Multi call

Write an `executeAll()` function that takes an array of functions as its first (and only) argument and return a function that executes all the array's functions in the order they appear in the array.

The context (`this`) should be provided at the execution of the returned function.

**Constraint:** The returned function cannot iterate over the array (`executeAll` can, of course).

*Note:* You should use the `reduce` function on arrays. Its documentation is available [here, on MDN](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/reduce).

## Starting point

```js
function executeAll(fns) {
  // …
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
```
