// Return an array without duplicates
'use strict'

const distinct = (arr) => {
  const arrSet = new Set();

  arr.forEach((item) => {
    if (arrSet.has(item)) {
      delete arrSet[item];
    } else {
      arrSet.add(item);
    }
  });

  return arr
};

module.exports = distinct;
