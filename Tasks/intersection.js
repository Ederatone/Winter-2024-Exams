'use strict';
// Find an intersection of two dictionaries

const intersection = (object1, object2) => {
  const object1Keys = Object.keys(object1);
  const res = {};

  for (const key of object1Keys) {

    res[key] = object1[key];
  }
  return res;
};

module.exports = intersection;
