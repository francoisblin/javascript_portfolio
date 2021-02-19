function addX(x) {
    return function(y) {
        return x + y
    }
  }
  
var add5 = addX(5);
var add10 = addX(10);
  
console.log(add5(0), add5(37), add10(12)); 