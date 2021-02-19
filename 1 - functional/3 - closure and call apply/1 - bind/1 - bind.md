# bind

Recode the `bind` method of `ECMAScript` but handle only its first argument.

## Starting point

```js
Function.prototype.myBind = function(/* … */) {
  // …
};

function simpleTest(a) {
  console.log(this);
  console.log(a);

  return 42;
}

var bound = simpleTest.myBind(42);
bound('a is a superb string');

console.log('--');

bound = simpleTest.myBind({test: 42});
console.log('The answer is: ' + bound('oh yes it is! (not like this)'));
```

Then also try to code bind as a standalone method:

```js
function myBind(fn /* … */) {
  // …
}

function simpleTest(a) {
  console.log(this);
  console.log(a);

  return 42;
}

var bound = myBind(simpleTest, 42);
bound('a is a superb string');

console.log('--');

bound = myBind(simpleTest, {test: 42});
console.log('The answer is: ' + bound('oh yes it is! (not like this)'));
```

The console should print the following if your code is working:

```
42
a is a superb string
--
{ test: 42 }
oh yes it is! (not like this)
The answer is: 42
```
