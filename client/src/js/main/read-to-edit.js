const axios = require('axios');

const $diaryContentContainer = document.querySelector('.diary-content-container');
const $diaryWriteContainer = document.querySelector('.diary-write-container');
const $writeInput = document.querySelector('.write-input');
const $writeTime = document.querySelector('.write-time');
const $writeText = document.querySelector('.write-text');

const toEdit = () => {
  $diaryContentContainer.classList.remove('is-active');
  $diaryWriteContainer.classList.add('is-active');

  $writeInput.value = document.querySelector('.content-title').textContent;
  $writeTime.textContent = document.querySelector('.content-time').textContent;
  $writeText.value = document.querySelector('.content-text').textContent;
};

export default async e => {
  const list = await axios.get('http://localhost:7000/diaries');
  const { data: diary } = list;
  // const targetContent = [...diary].filter(item => {
  //   if (item.id === e.target.parentNode.id) return item.id;
  // });

  return toEdit(diary);
};