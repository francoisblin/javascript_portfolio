# this

Try to execute those samples and see if they behave as you would have expected:

```js
console.log(this);

function myFunc() {
  console.log(this);
}
myFunc();

var obj = {fn: myFunc, test: 42};
obj.fn();

obj.fn2 = function() {
  myFunc();
};
obj.fn2();
```

How ECMAScript decides what `this` is? Where is it allowed?
