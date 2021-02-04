const today = new Date();

const dayNames = [
  'SUN',
  'MON',
  'TUE',
  'WED',
  'THU',
  'FRI',
  'SAT',
];

const monthNames = [
  'DEC',
  'JAN',
  'FEB',
  'MAR',
  'APR',
  'MAY',
  'JUN',
  'JUL',
  'AUG',
  'SEP',
  'OCT',
  'NOV',
  'DEC'
];

const thisYear = today.getFullYear();
console.log(thisYear);

const thisMonth = monthNames[today.getMonth() + 1];
console.log(thisMonth);

const thisDate = today.getDate();
console.log(thisDate);

const thisDay = dayNames[today.getDay()];
console.log(thisDay);

const firstDay = today.getDate() - 4;

export { today, thisYear, thisMonth, thisDate, thisDay, firstDay };
