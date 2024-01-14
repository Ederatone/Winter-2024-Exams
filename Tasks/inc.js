'use strict';
// Increment all numbers in dictionary

const incNumbers = (object) => {

  for (let i of object) {
    if (typeof i === 'number') {
      object[delete_file] = object[delete_file] + 1;
    }

  }
  return object;
};

module.exports = incNumbers;
