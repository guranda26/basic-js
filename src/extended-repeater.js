const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  // Convert str to string in case it's not
  str = String(str);

  // Initialize default values for options
  const repeatTimes = options.repeatTimes || 1;
  const separator = options.separator !== undefined ? options.separator : "+";
  const addition =
    options.addition !== undefined ? String(options.addition) : "";
  const additionRepeatTimes = options.additionRepeatTimes || 1;
  const additionSeparator =
    options.additionSeparator !== undefined ? options.additionSeparator : "|";

  const fullAddition = new Array(additionRepeatTimes)
    .fill(addition)
    .join(additionSeparator);

  const result = new Array(repeatTimes)
    .fill(str + fullAddition)
    .join(separator);

  return result;
}

module.exports = {
  repeater,
};
