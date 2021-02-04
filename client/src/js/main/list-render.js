const axios = require('axios');

const $diaryList = document.querySelector('.diary-list');
const $diaryMainYear = document.querySelector('.diary-main__year');
const $diaryMainMonth = document.querySelector('.diary-main__month');

$diaryMainYear.textContent = new Date().getFullYear();
$diaryMainMonth.textContent = new Date().getMonth() + 1;

const listRender = diaries => {
  
  let html = '';

  diaries.forEach(({ id, title }) => {
    
    if ( new Date(id).getMonth() === new Date().getMonth() ) {
      const date = new Date(`${id}`).getDate();
      const day = new Date(`${id}`).toString().slice(0, 3).toUpperCase();
  
      html += `<li class="diary-item">
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


