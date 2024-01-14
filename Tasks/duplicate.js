'use strict';
// Return an array without duplicates

const duplicate = (value, number) => {

  const res = [];
  while (res.length < number) {
    res.push(value);
  }

  return res;
};

module.exports = duplicate;
