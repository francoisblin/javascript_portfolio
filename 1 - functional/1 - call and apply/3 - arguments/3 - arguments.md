# arguments

You can access the list of arguments taken by your function using the special `arguments` variable. It is defined in every function scope. If you have never used `arguments` before, try out this simple sample:

```js
function argumentsTest() {
  console.log(arguments);
}

argumentsTest(1, 2, 3, '…', 42);
```

Even if `arguments` looks like an array, be careful: it is **not**. This is pretty much obvious when you execute the previous sample. The console displays `{ … }` and not `[ … ]` as it would do with an array. Thus, you can't use all the wonderful `Array` methods (like `pop` or `unshift`) on it.

Because of that, it is often necessary to convert `arguments` into an array.

A good way to achieve this would be by using one method already provided by the standard API. The problem is we just said *no `arguments.<some array method>`*.

But, because we are coding in ECMAScript, we can bypass this limitation. We can always access all array methods via the main `Array` type using its `prototype` (more on those later on). For example, `Array.prototype.pop` refers to the code executed when you do `myArr = [42]; var answer = myArr.pop();`.

Use what we have learned so far and those hints to convert `arguments` into a true `Array`.

## Starting point:

```js
function someConvertTest() {
  return Array.prototype/* … */arguments/* … */;
}

console.log(someConvertTest(1, 2, 3, '…', 42)); // prints [1, 2, 3, '…', 42]
```

## Some more intel


There are two main properties in an `arguments` object:
- `length` containing the number of arguments
- `callee` referencing the current function, it can be pretty useful when it is anonymous

You can find a lot more information about `arguments` on the [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments).
