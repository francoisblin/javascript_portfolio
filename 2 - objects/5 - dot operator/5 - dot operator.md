# . (dot operator)

Let's recode the `.` operator.

To recode `.` we obviously can't use `.` (or its sibling `[]`). That would defeat the point right?

It should not be hard to recode the `.` operator since it is very similar to the `in` operator.

## Starting point

```js
function myDot(obj, attr) {
  // …
}

var obj = {a: 42};
console.log(myDot(obj, 'a')); // prints 42

var obj2 = Object.create(obj);
console.log(myDot(obj2, 'a')); // prints 42

console.log(myDot(obj2, 'b')); // prints undefined
```

## Some more

If you still have some time left, also handle `getters` (we will see how they work later on). To do this, you just need to know that `Object.getOwnPropertyDescriptor` will return an object not containing `value` but a `get` method instead. You will have to call it to get the attribute's value.

You can use those tests instead to also check for `getters`:

```js
function myDot(obj, attr) {
  // …
}

var obj = {
  a: 42,
  b: false,
  c: undefined,
  get getter() {
    return this.a - 21;
  },
  get falseGetter() {
    return false;
  },
};
console.log(myDot(obj, 'a')); // prints 42
console.log(myDot(obj, 'getter')); // prints 21
console.log(myDot(obj, 'b')); // prints false
console.log(myDot(obj, 'falseGetter')); // prints false
console.log(myDot(obj, 'c')); // prints undefined

var obj2 = Object.create(obj);
obj2.a = 12;
console.log(myDot(obj2, 'a')); // prints 12
console.log(myDot(obj2, 'getter')); // prints -9
console.log(myDot(obj2, 'b')); // prints false
```
