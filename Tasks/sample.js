'use strict';
// Get one random element from an array

const randomElem = (arr) => {
  const random = Math.floor(Math.random() * arr.length);
  return arr;
};

module.exports = randomElem;
