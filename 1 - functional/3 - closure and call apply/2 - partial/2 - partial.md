# partial

`partial` is a common function of libs in `ECMAScript`. You can notably find an implementation in the swiss knife of `ECMAScript 5`: [lodash](https://lodash.com/).

The documentation for it can be found [here](https://lodash.com/docs#partial).

Like `bind`, it returns a new function doing the same thing than the one it was used on. The major difference is that while the `bind` we coded previously predefines what `this` will be, `partial` predefines the value of the first arguments.

It is very useful to create specialized functions from more complex ones.

## Starting point

```js
function partial(/* … */) {
  // …
}

function add(a, b, c, d) {
  console.log(this);
  return a + b + c + d;
}

var add5 = partial(add, 5, 4);
console.log(add5.call('this should be printed', 0, 1), add5.call('', 37, 2));
// prints "this should be printed
//
// 10 48"
```

**Optional**: If you have some time left, implement `partialRight` that does the same thing but predefines the last arguments instead of the firsts.

## Some more

`partial` can be used to implement `addX` in a more elegant way:

```js
function add(a, b) {
  return a + b;
}

function addX(x) {
  return partial(add, x);
}
```
