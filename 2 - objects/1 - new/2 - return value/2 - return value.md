# return value

But what is `new` really returning? Always a new object it has created like we coded before?

Handle the return value properly in your implementation of `new`.

## Starting point

```js
function myNew(Ctor) {
  // …
}

function MyCtor(arg) {
  if (arg)
    return {test: 42};

  this.arg = 21;
  return 42;
}
MyCtor.prototype.sayHello = function() {
  console.log('hello');
};

var obj = myNew(MyCtor, 42);
console.log(obj instanceof MyCtor); // should print false
console.log(obj.test); // should print 42

obj = myNew(MyCtor);
console.log(obj.arg); // should print 21
console.log(obj instanceof MyCtor); // should print true
obj.sayHello(); // should print hello
```
