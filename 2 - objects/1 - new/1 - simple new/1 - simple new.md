# Simple new

What does `new` actually do? What are prototypes?

To better understand it, let's recode all this!

The problem is to figure an alternate syntax. The normal syntax is: `new Ctor(arguments…)` right? Let's replace this by a function then: `myNew(Ctor, arguments…)`. This is roughly the same thing and will do nicely.

*Remember:* Don't mix the `prototype` attribute that is added on a constructor (a function) to ask `new` to set a prototype on new instances and `__proto__` that reference the actual prototype.

**Note:** You should **NEVER** use `__proto__` except for this exercise.

## Starting point

```js
function myNew(Ctor) {
  // …
}

function MyCtor(arg) {
  this.arg = arg;
}
MyCtor.prototype.sayHello = function() {
  console.log('hello');
};

var obj = myNew(MyCtor, 42);
console.log(obj.arg); // should print 42
console.log(obj instanceof MyCtor); // should print true
obj.sayHello(); // should print hello
```
