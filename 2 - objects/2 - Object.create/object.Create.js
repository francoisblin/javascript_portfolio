function MyCtor() {
}

function myObjectCreate(obj) {
    MyCtor.prototype = obj
    console.log(MyCtor.prototype)
    return new MyCtor
}




  
  var obj = {test: 42};
  var obj2 = myObjectCreate(obj);
  
  console.log(obj2.test); // prints 42
  
  obj2.test = 21;
  console.log(obj2.test); // prints 21
  
  delete obj2.test;
  console.log(obj2.test); // prints 42
  
  console.log(obj2.__proto__ === obj); // prints true