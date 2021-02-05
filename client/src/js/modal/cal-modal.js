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

const thisMonth = monthNames[today.getMonth()];
console.log(thisMonth);

const thisDate = today.getDate();
console.log(thisDate);

const thisDay = dayNames[today.getDay()];
console.log(thisDay);

export { today, thisYear, thisMonth, thisDate, thisDay, monthNames };
