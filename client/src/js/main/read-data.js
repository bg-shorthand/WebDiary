const axios = require('axios');

// let diary = [];

const $diaryContentContainer = document.querySelector('.diary-content-container');
const $contentTitle = document.querySelector('.content-title');
const $contentTime = document.querySelector('.content-time');
const $contentYear = document.querySelector('.content__year');
const $contentMonth = document.querySelector('.content__month');
const $contentDate = document.querySelector('.content__date');
const $contentDay = document.querySelector('.content__day');
const $contentText = document.querySelector('.content-text');

const diaryRender = diary => {
  let html = '';

  diary.forEach(({id, title, content}) => {
    html += `<section class="diary-content">
      <h3 class="content-title">${title}</h3>
      <p class="content-time">
        <span class="content__year">${id}</span>
        <span class="content__month">Feb</span>
        <span class="content__date">1</span>
        <span class="content__day">MON</span>
      </p>
      <p class="content-text">${content}</p>
      <div class="content-btn">
        <button type="button" class="content-edit far fa-edit" title="다이어리 편집하기">edit</button>
        <button type="button" class="content-close fas fa-times" title="다이어리 읽기 페이지 나가기"></button>
      </div>
    </section>`;
  });

  $diaryContentContainer.innerHTML = html;
};

// const getDiary = () => {
//   axios
//     .get(`/diaries/${id}`)
//     .then()
// };

export default async () => {
  const list = await axios.get('http://localhost:7000/diaries');
  const { data: diaries } = list;
  console.log(diaries);

  diaryRender(diaries);
};
