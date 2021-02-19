# Object.create

But what does it do? `Object.create` creates a new object (no way!) that:

- is empty
- has a prototype that is the object given as first argument to `Object.create`

## Starting point

```js
function myObjectCreate(obj) {
  // …
}

var obj = {test: 42};
var obj2 = myObjectCreate(obj);

console.log(obj2.test); // prints 42

obj2.test = 21;
console.log(obj2.test); // prints 21

delete obj2.test;
console.log(obj2.test); // prints 42

console.log(obj2.__proto__ === obj); // prints true
```
