'use strict';
// Filter array by type name

const filterArray = (array, type) => {
  return array.filter((el) => typeof el === type);
};

module.exports = filterArray;
