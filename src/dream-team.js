const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */

// Imagine you and your friends decide to create a dream team. This team should have a cool secret name that contains encrypted information about it. For example, these may be the first letters of the names of its members in upper case sorted alphabetically. Your task is to implement the createDreamTeam(members) function that returns name of a newly made team (string) based on the names of its members (Array). Good luck!

// Names of the members should be strings. Values with other type should be ignored. In case of wrong members type function must return false.
function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  }

  let member = members.filter((member) =>
    typeof member === "string" ? member.trim() : null
  );
  member = member
    .map((el) => el.trim().toUpperCase()[0])
    .sort()
    .join("");
  return member;
}

module.exports = {
  createDreamTeam,
};
