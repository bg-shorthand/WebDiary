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
const thisMonth = monthNames[today.getMonth()];
const thisDate = today.getDate();
const thisDay = dayNames[today.getDay()];

export { today, thisYear, thisMonth, thisDate, thisDay, monthNames };
