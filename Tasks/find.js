'use strict';
// Find key by value

const findKey = (object, value) => {

  for (const name of Object.keys(object)) {
    if (object[name] === value) {
      return name;
    }
  }

  return undefined;
};

module.exports = findKey;
