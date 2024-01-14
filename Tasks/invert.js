'use strict';
// Reverse an array, you can't use .reverse()

const invertArray = (object) => {

  const res = [];

  while (object.length > 0) {
    res.push(object.pop());
  }

  return res;
};

module.exports = invertArray;
