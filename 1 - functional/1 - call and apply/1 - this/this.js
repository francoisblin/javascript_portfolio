// console.log(this)

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

  // this est le premier argument de la fonction 
  // En focntion de ce qui est à gauche du