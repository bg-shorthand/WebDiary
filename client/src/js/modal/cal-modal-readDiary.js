const axios = require('axios');

export default async e => {
  if (!e.target.classList.contains('is-diary-mark')) return;
  console.log(e.target.parentNode.id);

  const res = await axios.get(`http://localhost:7000/diaries/${e.target.parentNode.id}`);
  const { data: diary } = res;

  document.querySelector('.diary-calendar-container').classList.remove('is-active');
  document.querySelector('.diary-content-container').classList.add('is-active');
  document.querySelector('.content-title').textContent = diary[0].title;
  document.querySelector('.content-time').textContent = diary[0].id;
  document.querySelector('.content-text').textContent = diary[0].content;
}