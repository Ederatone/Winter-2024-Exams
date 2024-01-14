'use strict';
// Return an array without duplicates

const duplicate = (value, number) => {

  const res = [];
  for (let i = 0; i < number; i++) {
    res[i] = value;
  }

  return res;
};

module.exports = duplicate;
