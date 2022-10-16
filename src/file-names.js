const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */

function renameFiles(names) {
  const map = new Map();
  for (let i = 0; i < names.length; i++) {
      const index = names.indexOf(names[i]);
      if (index === i)
          map.set(names[i], 1);
      else if (index < i) {
          let count = map.get(names[i]);
          count = count ? count : 1;
          map.set(names[i], count + 1);
          names[i] += `(${count})`;
      }
  }
  return names;
}


module.exports = {
  renameFiles
};
