# call

Recode `call` with the help of the `apply` function:

```js
Function.prototype.myCall = function(/* … */) {
  // …
};

function addToThis(a, b) {
  return this + a + b;
}

const res1 = addToThis.call(30, 7, 5);
const res2 = addToThis.myCall(30, 7, 5);
console.log(res1 + ' = ' + res2);
```
