

function polishParser(newOperation) {
  let operation = newOperation.split(' ')
   return polishParserArray(operation)
}

const operatorArray = ['+', '-', '*', '/']

function polishParserArray(operation) {
  let itemShifted = operation.shift()
  if (operatorArray.indexOf(itemShifted) === -1 ) { 
    return function() {
      if (this[itemShifted]) {
        return this[itemShifted]
      }
      return Number(itemShifted)
    }
  } else {
      let left = polishParserArray(operation)
      let right = polishParserArray(operation)
      return function() {
        return evaluate(itemShifted, left.bind(this), right.bind(this))
      }
  }
}


function evaluate(operator, left, right) {
  switch(operator) {
    case '+':
      return left() + right()
    case '-':
      return left() - right()
    case '*':
      return left() * right()
    case '/':
      return left() / right()
  }
}


var expression = polishParser('- a 42');

console.log(expression.call({a: 84})); // prints 42
// console.log(expression.call({a: 42})); // prints 0