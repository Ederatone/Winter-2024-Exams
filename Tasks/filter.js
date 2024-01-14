'use strict';
// Filter array by type name

const filterArray = (array, type) => {
  const res = array.filter((el) => typeof el === type);
  return res;
};

module.exports = filterArray;
