import { today, thisYear, thisMonth, thisDate, thisDay } from './cal-modal';

const axios = require('axios');

const $thisYear = document.querySelector('.diary-calendar__year');
const $thisMonth = document.querySelector('.diary-calendar__month');
const $prevMonthBtn = document.querySelector('.diary-calendar__pre-btn');
const $nextMonthBtn = document.querySelector('.diary-calendar__next-btn');

export default () => {
  $thisYear.textContent = thisYear;
  $thisMonth.textContent = thisMonth;
};

// for (let i = 0; i < 100; i++) {
//   console.log((new Date(+(new Date()) + (i * 86400000))).getDate());
// };
