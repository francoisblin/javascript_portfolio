# curry

This is an advanced example, to help you use closures and calls in a more complex environment.

Recode `curry` the same way as defined in the `lodash` documentation. You can read it [here](https://lodash.com/docs#curry).

## Starting point

```js
function curry(/* … */) {
  // …
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
```

To say it otherwise, `curry` is like an automated `partial` call until you have enough arguments to run the function. At this moment it executes it.
It does not affect the behaviour of `this` which is defined by the call actually running the function.
