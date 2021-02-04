import { today, thisYear, thisMonth, thisDate, thisDay, firstDay } from './modal/cal-modal';
// import $firstDay from './modal/cal-modal-table';

const axios = require('axios');

const $thisYear = document.querySelector('.diary-calendar__year');
const $thisMonth = document.querySelector('.diary-calendar__month');
const $prevMonthBtn = document.querySelector('.diary-calendar__pre-btn');
const $nextMonthBtn = document.querySelector('.diary-calendar__next-btn');
const $firstDay = document.querySelector('.week1 > .day5');
const $week1 = document.querySelector('.week1');
const $day1 = document.querySelector('day')
// today.setDate(1);

$thisYear.textContent = thisYear;
$thisMonth.textContent = thisMonth;

// $firstDay.textContent = (new Date(+new Date())).getDate();
$firstDay.textContent = (new Date(today.setDate(2))).getDate();


// $prevMonthBtn.onclick = e => {
//   $thisMonth - 1;
// };

// $nextMonthBtn.onclick = e => {
//   e.textContent + 1;
// };

// axios.get('http://localhost:7000/diaries')
//   .then(({ data }) => {
//     console.log(data);
//   });

// axios.get('http://localhost:7000/diaries/210202')
//   .then(({ data }) => {
//     console.log(data);
//   })

// axios.post('http://localhost:7000/diaries', {
//   id: 123456,
//   title: 'new',
//   content: 'new'
// })
//   .then(({ data }) => {
//     console.log(data);
//   })

// axios.patch('http://localhost:7000/diaries/210202', {
//   title: '수정',
//   content: '수정'
// })
//   .then(({ data }) => {
//     console.log(data);
//   })

axios.delete('http://localhost:7000/diaries/210202')
  .then(({ data }) => {
    console.log(data);
  });