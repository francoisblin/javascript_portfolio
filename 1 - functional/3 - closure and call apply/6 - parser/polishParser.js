function tokenToAction(token) {
    switch (token) {
      case '+':
        return function (l, r) { return l + r }
      case '-':
        return function (l, r) { return l - r }
      case '*':
        return function (l, r) { return l * r }
      case '/':
        return function (l, r) { return l / r }
    }
  
    if (token.match(/[a-zA-Z_][a-zA-Z0-9_]*/)) {
      return function() {
        if (!(token in this))
          throw new Error('Unknown variable ' + token)
        return this[token]
      }
    }
    
    if (token.match(/-?[0-9]*.?[0-9]*/)) {
      const value = +token
      return function() { return value }
    }
  
    throw new Error('Unknown token ' + token)
  }
  
function internalPolishParser(tokens) {
    if (!tokens.length)
      throw new Error('Missing tokens…')
  
    const action = tokenToAction(tokens.shift())
  
    if (!action.length)
      return action
    
    const argsFn = []
    for (let i = 0; i < action.length; ++i)
      argsFn.push(internalPolishParser(tokens))
    
    const computeArgs = argsFn.reduce(function(acc, fn) {
      return function() {
        return acc.call(this).concat(fn.call(this))
      }
    }, function() { return [] })
  
    return function() {
      return action.apply(this, computeArgs.call(this))
    }
  }
  
  function polishParser(expression) {
    const tokens = expression.split(/\s+/)
  
    // parse
    const fn = internalPolishParser(tokens)
  
    if (tokens.length)
      throw new Error('Too much tokens…')
  
    return fn
  }
  
  console.log(polishParser('+ a 3').call({a: 39}))