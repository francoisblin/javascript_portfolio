# instanceof

What is really `instanceof` doing? Let's find out! Recode it!

To do that, you will need to be able to cross the `prototype chain`. You will need to use `Object.getPrototypeOf(obj)` to do that. As its name implies, it returns the prototype of the provided object.

## Starting point

```js
function myInstanceOf(val, Ctor) {
  // …
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
```
