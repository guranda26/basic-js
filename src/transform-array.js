const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  const transformedArray = [];

  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case "--discard-next":
        i++;
        if (i < arr.length) transformedArray.push("--discarded");
        break;
      case "--discard-prev":
        if (
          transformedArray.length > 0 &&
          transformedArray[transformedArray.length - 1] !== "--discarded"
        ) {
          transformedArray.pop();
        }
        break;
      case "--double-next":
        if (i + 1 < arr.length) {
          transformedArray.push(arr[i + 1]);
        }
        break;
      case "--double-prev":
        if (
          transformedArray.length > 0 &&
          transformedArray[transformedArray.length - 1] !== "--discarded"
        ) {
          transformedArray.push(transformedArray[transformedArray.length - 1]);
        }
        break;
      default:
        if (arr[i] !== "--discarded") {
          transformedArray.push(arr[i]);
        }
        break;
    }
  }

  return transformedArray.filter((el) => el !== "--discarded");
}

module.exports = {
  transform,
};
