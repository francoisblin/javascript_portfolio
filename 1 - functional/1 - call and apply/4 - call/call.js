Function.prototype.myCall = function(thisArg) {
  console.log(this)
  console.log(thisArg)
    const args = Array.prototype.slice.call(arguments, 1)
    console.log(args)
    return this.apply(thisArg, args)
  };
  
  function addToThis(a, b) {
    return this + a + b;
  }
  
  const res1 = addToThis.call(30, 7, 5);
  const res2 = addToThis.myCall(30, 7, 5);
  console.log(res1 + ' = ' + res2);