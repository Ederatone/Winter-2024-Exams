// Return an array without duplicates
'use strict'

const distinct = (arr) => {
  const newArr = [];

  arr.forEach((item) => {
    if (newArr.includes(item)) {
      delete arrSet[item];
    } else {
      newArr.push(item);
    }
  });

  return arr;
};

module.exports = distinct;
