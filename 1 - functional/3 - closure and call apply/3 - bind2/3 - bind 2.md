# bind 2

Let's stick everything together. With the help of the previous 2 exercises, add support for all `bind` arguments.

Basically, `bind` takes optional arguments after this. If they are specified, they will predefine the first arguments of the function, like `partial`.

Then why `partial`? Because in `bind`, `this` is mandatory. Sometimes you don't want to predefine `this` and `null` won't do the trick.

## Starting point

```js
Function.prototype.myBind = function(/* … */) {
  // …
};

function addToThis(a, b) {
  return this + a + (b || 0);
}

var bound = addToThis.myBind(40, 2);
console.log(bound()); // prints 42

bound = addToThis.myBind(10, 20, 12);
console.log(bound()); // prints 42

bound = addToThis.myBind(32);
console.log(bound(10)); // prints 42
```

## Some more

If you have some time, also handle this on the standalone version.

`bind` also has some edge cases that are not described here. If you still have some time, find out more about those on the [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind).

It would be great to implement these edge cases to have a `bind` that reflects better what the specs says!

*Note :* some `bind` edge cases does not seem to be very well supported by all VMs (including V8).
