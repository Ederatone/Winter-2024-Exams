'use strict';
// Reverse an array, you can't use .reverse()

const invertArray = (object) => {

  const res = [];

  for (let i = 0; i < object.length; i++) {

    res.push(object.pop());

  }

  return res;
};

module.exports = invertArray;
