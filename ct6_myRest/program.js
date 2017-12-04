module.exports = function average(...numbers) {

  let sum = numbers.reduce(function (a, b) {

    return a + b;

  }, 0);
 
  return sum/numbers.length;

    
};