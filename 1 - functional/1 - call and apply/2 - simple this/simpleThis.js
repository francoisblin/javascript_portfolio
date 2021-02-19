function simpleThis() {
    return this + 12;
  }

console.log(simpleThis.call(30));
console.log(simpleThis.apply(30));

function simpleThis2(a, b) {
    console.log('a = ' + a);
    console.log(b)
    return this + a;
  }


console.log(simpleThis2.call(20, 15));
console.log(simpleThis2.apply(28, [20, 12]));