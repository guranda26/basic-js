const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  let number = matrix.length;
  let catsCount = 0;
  for (let i = 0; i < number; i++) {
    let row = matrix[i];
    for (let j = 0; j < row.length; j++) {
      if (row[j] === "^^") {
        catsCount++;
      }
    }
  }
  return catsCount;
}

module.exports = {
  countCats,
};
