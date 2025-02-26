const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const result = new Array(matrix.length);
  for (let i = 0; i < result.length; i++) {
    result[i] = new Array(matrix[i].length)
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      result[i][j] = countMineNeighbors(matrix, i, j);
    }
  }
  return result;
}

function countMineNeighbors(arr, x, y) {
  let countMine = 0;
  for (let i = x - 1; i < x + 2; i++)
    for (let j = y - 1; j < y + 2; j++)
      if (!(i < 0 || j < 0 || i > (arr.length - 1) || j > (arr[i].length - 1) || (i === x && j === y))) {
        if (arr[i][j] === true)
          countMine++;
      }
  return countMine;
}

module.exports = {
  minesweeper
};
