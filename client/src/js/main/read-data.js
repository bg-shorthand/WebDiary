const axios = require('axios');

const $diaryContentContainer = document.querySelector('.diary-content-container');
const $contentTitle = document.querySelector('.content-title');
const $contentTime = document.querySelector('.content-time');
const $contentText = document.querySelector('.content-text');
const $diaryContent = document.querySelector('.diary-content');

const diaryRender = diary => {
  diary.forEach(({ id, title, content }) => {
    $contentText.textContent = content;
    $contentTitle.textContent = title;
    $contentTime.textContent = id;
    $diaryContent.id = id;
  });
};

export default async e => {
  const list = await axios.get('http://localhost:7000/diaries');
  const { data: diary } = list;

  const targetContent = [...diary].filter(item => {
    if (item.id === e.target.parentNode.id) return item.id;
  });

  diaryRender(targetContent);
};
