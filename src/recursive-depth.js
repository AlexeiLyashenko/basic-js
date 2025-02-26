const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    if (!Array.isArray(arr)) return 0;
    let depth = 0;
    depth++;
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            depth += this.calculateDepth(arr.flat());
            break;
        }
    }
    return depth;
  }
}

module.exports = {
  DepthCalculator
};
