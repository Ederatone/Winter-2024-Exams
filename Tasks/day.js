// Get day number

const DAYS = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];

const parseDay = (s) => {
  let i;
  for (i = 0; i < DAYS.length; i++) {
    if (s.startsWith(DAYS[i])) {
      return i + 1;
    }
  }
  return -1;
};

module.exports = parseDay;
