# Simple this

Replace the comments in this very simple code so `42` is printed twice on the console:

```js
function simpleThis() {
  return this + 12;
}

console.log(simpleThis.call(/* … */));
console.log(simpleThis.apply(/* … */));
```


# Simple this 2

Replace the comments in this very simple code:

```js
function simpleThis2(a) {
  console.log('a = ' + a);
  return this + a;
}

console.log(simpleThis2.call(/* … */));
console.log(simpleThis2.apply(/* … */));
```

To print on the console:

```
a = 15
42
a = 28
42
```
