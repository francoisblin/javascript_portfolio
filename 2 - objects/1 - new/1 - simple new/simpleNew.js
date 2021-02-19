//New crée un objet video il attache le prototype du constructeur pour mettre 

function myNew(Ctor) {
    var myObj = {}
    myObj.__proto__ = Ctor.prototype
    Ctor.apply(myObj, Array.prototype.slice.call(arguments, 1))
    return myObj
  }
  
  function MyCtor(arg) {
    this.arg = arg;
  }
  MyCtor.prototype.sayHello = function() {
    console.log('hello');
  };
  
  var obj = myNew(MyCtor, 42);
  console.log(obj.arg); // should print 42
  console.log(obj instanceof MyCtor); // should print true
  obj.sayHello(); // should print hello