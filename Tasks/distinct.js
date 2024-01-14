// Return an array without duplicates
'use strict'

const DISTINCT = (data) => {
  const A = new Set();

  data.forEach((a) => {
    if (A.has(a)) {
      delete data[w];
    } else {
      A.add(a);
    }
  });

  return data
};

module.exports = DISTINCT;
