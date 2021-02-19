# polish parser

What is the `polish notation`? It is a way to describe mathematical operations that is easy to parse for computers and remove the need for parenthesis. It is harder to read for humans, which is why we don't use it commonly.

It consist in putting the operator before its operands so you can easily deduce on what it applies. `operator (left operand) (right operand)`. But enough with words! Examples!

`+ 2 3` is a very simple operation. It meets the description above `+ (2 is left operand) (3 is right operand)`. You deduced it a long while ago, it is the same thing as `2 + 3`.

Let's try something "harder": `* + 2 3 4`. Here we can rewrite it like this: `* (+ (2) (3)) (4)`. This is obviously the same as: `(2 + 3) * 4`. As you can see, the operator priorities are implicit in the notation, removing the need for the parenthesis. But what if we wanted to write `2 + 3 * 4` with its normal operator priorites? Easy: `+ 2 * 3 4`. This can be rewritten as `+ (2) (* (3) (4))`. This is what we wanted.

Why the hell am I talking about polish notation? Well, you might have guessed it, I want you to code a parser for it. But not a stupid parser. An optimized one. And it should support variables. And floating point values. And negative values (by using minus without a space between it and the number).

Examples of valid expressions:

```
+ 3.45 -2   = 3.45 + -2
+ 2 - 3 4   = 2 + (3 - 4)
- a 42      = (variable a) - 42
```

## Starting point

```js
function polishParser(/* … */) {
  // …
}

var expression = polishParser('- a 42');
console.log(expression.call({a: 84})); // prints 42
console.log(expression.call({a: 42})); // prints 0
```

As you might have guessed, `polishParser` should return a `function`. It should get the variables values from `this`.

The actual parsing should happen in `polishParser` and not in the returned function.

This is because we might want to execute the expressions with multiple values for each variables and we want to parse the expression only once.

Plus, we like to let the optimizer do its assembling magic.

**Please try your parser with more complex expressions than `- a 42`!**
