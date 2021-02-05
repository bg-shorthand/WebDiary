const axios = require('axios');

const $diaryList = document.querySelector('.diary-list');
const $diaryMainYear = document.querySelector('.diary-main__year');
const $diaryMainMonth = document.querySelector('.diary-main__month');
const $btnBeforeMonth = document.querySelector('.btn-before-month');
const $btnAfterMonth = document.querySelector('.btn-after-month');

// $diaryMainYear.textContent = new Date().getFullYear();
// $diaryMainMonth.textContent = new Date().getMonth() + 1;

let todayYear = new Date().getFullYear();
let todayMonth = new Date().getMonth() + 1;

const viewDate = (year, month) => {
  $diaryMainYear.textContent = year;
  $diaryMainMonth.textContent = month;
};

$btnBeforeMonth.onclick = e => {
  if (todayMonth === 1) { 
    todayYear += -1;
    todayMonth = 12;
  } else {
    todayMonth += -1;
  }
  viewDate(todayYear,todayMonth);
};

$btnAfterMonth.onclick = e => {
  if (todayMonth === 12) {
    todayYear += 1;
    todayMonth = 1;
  } else {
    todayMonth += 1
  }
  viewDate(todayYear,todayMonth);
};

const listRender = diaries => {
  
  let html = '';

  diaries.forEach(({ id, title }) => {
    
    if ( new Date(id).getMonth() === new Date().getMonth() ) {
      const date = new Date(`${id}`).getDate();
      const day = new Date(`${id}`).toString().slice(0, 3).toUpperCase();
  
      html += `<li class="diary-item" id="${id}">
          <h3 class="diary__title">${title}</h3>
          <span class="date__number">${date}</span>
          <span class="date__day">${day}</span>
        </li>`;
    }
  });

  $diaryList.innerHTML = html;

};

export default async () => {
  const list = await axios.get('http://localhost:7000/diaries');
  const { data: diaries } = list;
  console.log(diaries);

  listRender(diaries);
};

// State
// let diaries = [];


