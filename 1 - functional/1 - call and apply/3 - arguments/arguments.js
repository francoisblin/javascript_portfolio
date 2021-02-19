function someConvertTest() {
    return Array.prototype.slice.call(arguments);
  }
  
  console.log(someConvertTest(1, 2, 3, '…', 42)); // prints [1, 2, 3, '…', 42]