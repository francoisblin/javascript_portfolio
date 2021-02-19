# buggy sample

Execute the following snippet of code:

```js
for (var i = 0; i < 10; ++i) {
  setTimeout(function() {
    console.log(i);
  });
}
console.log(-1);
```

Why is the result not what we might expect?

Try to use a closure to fix this problem…
