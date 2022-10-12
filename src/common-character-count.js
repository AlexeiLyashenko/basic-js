const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let counter = 0,
      less = [],
      more = [];

  if(s1.length < s2.length) {
    less = [...s1];
    more = [...s2];
  } else {
    more = [...s1];
    less = [...s2];
  }

  for (let i = 0; i < less.length; i++) {
    const index = more.indexOf(less[i]);
    if(index >= 0) {
      more.splice(index, 1);
      counter++;
    }    
  }
  return counter;
}

module.exports = {
  getCommonCharacterCount
};
