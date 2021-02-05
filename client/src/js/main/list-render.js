const axios = require('axios');

const $diaryList = document.querySelector('.diary-list');
const $diaryMainYear = document.querySelector('.diary-main__year');
const $diaryMainMonth = document.querySelector('.diary-main__month');
const $btnBeforeMonth = document.querySelector('.btn-before-month');
const $btnAfterMonth = document.querySelector('.btn-after-month');
const $diaryPlus = document.querySelector('.diary-plus');
const $writeInput = document.querySelector('.write-input');
const $writeText = document.querySelector('.write-text');

let todayYear = new Date().getFullYear();
let todayMonth = new Date().getMonth() + 1;

const viewDate = (year, month) => {
  $diaryMainYear.textContent = year;
  $diaryMainMonth.textContent = month;
};

const listRender = diaries => {
  let html = '';

  diaries.forEach(({ id, title }) => {
    const today = new Date(id)
    // if ( h.getMonth() === new Date().getMonth() ) {
    if ( todayYear === today.getFullYear() && todayMonth === today.getMonth() + 1 ) {
      const date = today.getDate();
      const day = today.toString().slice(0, 3).toUpperCase();
  
      html += `<li class="diary-item" id="${id}">
          <h3 class="diary__title">${title}</h3>
          <span class="date__number">${date}</span>
          <span class="date__day">${day}</span>
        </li>`;
    }
  });

  $diaryList.innerHTML = html;
};

window.onload = viewDate(todayYear, todayMonth);

$btnBeforeMonth.onclick = () => {
  if (todayMonth === 1) { 
    todayYear += -1;
    todayMonth = 12;
  } else {
    todayMonth += -1;
  }
  viewDate(todayYear, todayMonth);

  axios.get('http://localhost:7000/diaries')
    .then(res => res.data)
    .then(listRender)
    .catch(console.error);
  // listRender();
};

$btnAfterMonth.onclick = () => {
  if (todayMonth === 12) {
    todayYear += 1;
    todayMonth = 1;
  } else {
    todayMonth += 1
  }
  viewDate(todayYear, todayMonth);
  // listRender();
  axios.get('http://localhost:7000/diaries')
    .then(res => res.data)
    .then(listRender)
    .catch(console.error);
};

const previous = async () => {
  const list = await axios.get('http://localhost:7000/diaries');
  const { data: diaries } = list;
  
  const todayDate = new Date();
  const year = todayDate.getFullYear();
  const month = todayDate.getMonth() + 1;
  const date = todayDate.getDate();
  const generateId = () => `${year}-${("0" + month).slice(-2)}-${("0" + date).slice(-2)}`;

  const idList = diaries.map(_diaries => _diaries.id);
  if (idList.find(id => id === generateId())) {
    const pre = await axios.get(`http://localhost:7000/diaries/${generateId()}`);
    const { data: diary } = pre;
    $writeInput.value = diary[0].title; 
    $writeText.value = diary[0].content;
  }
};

$diaryPlus.addEventListener('click', previous);

export default async () => {
  const list = await axios.get('http://localhost:7000/diaries');
  const { data: diaries } = list;
  // console.log(diaries);
  listRender(diaries);
};
