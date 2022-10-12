const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {

  let digits = [],
      num = n,
      result = 0;

  for (let i = 0; num; i++) {
    digits.push(num % 10);
    num = Math.floor(num / 10);
  }
  for (let i = 0; i < digits.length; i++) {
    let x = 0;
    for (let j = digits.length-1; j >= 0; j--) {
      if(j !== i) {
        x = x * 10 + digits[j];
      }
    }
    result = Math.max(x, result);
  }
  return result
}

module.exports = {
  deleteDigit
};
