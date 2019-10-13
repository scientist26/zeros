module.exports = function zeros(expression) {
  var factorial = BigInt(1);
  factorial = expression
    .split('*')
    .map(item => getFactorialNumber(item))
    .reduce((result, current) => result * current);

  return getZerosFromFactorial(factorial);
  
  function getFactorialNumber(expression) {
    var arr = expression.split('!');
    var numberFact = +arr[0];
    if (arr.length > 2) {
      if (numberFact % 2 === 0) {
        return getEvenFactorial(numberFact);
      } else {
        return getOddFactorial(numberFact);
      }
    } else {
      return getStraightFactorial(numberFact);
    }
  }

  function getStraightFactorial(numberFact) {
    var i = BigInt(1);
    var factorial = BigInt(1);
    
    while (i <= numberFact) {
      factorial *= i;
      i++;
    }
    
    return factorial;
  }

  function getOddFactorial(numberFact) {
    var i = BigInt(1);
    var factorial = BigInt(1);
    
    while (i <= numberFact) {
      if (!isOddBitInt(i)) {
        i++;
        continue;
      };
      
      factorial *= i;
      i++;
    }
    
    return factorial;
  }
  
  function getEvenFactorial(numberFact) {
    var i = BigInt(1);
    var factorial = BigInt(1);
    
    while (i <= numberFact) {
      if (isOddBitInt(i)) {
        i++;
        continue;
      }
      
      factorial = factorial * i;
      i++;
    }
    
    return factorial;
  }
  function isOddBitInt(number) {
    return number.toString().slice(-1) % 2 !== 0
  }

  function getZerosFromFactorial(number) {
    var arr = number
    .toString()
    .split('')
    .reverse();
    var result = 0;

    for (var i = 0; arr[i] === '0'; i++) {
      result++;
    }
    return result;
  }
}
