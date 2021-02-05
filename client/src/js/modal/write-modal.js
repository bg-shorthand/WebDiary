import axios from "axios";
import listRender from '../main/list-render';

const $modalSet = document.querySelector('.modal-set');
const $diaryWriteContainer = document.querySelector('.diary-write-container');
const $writeYear = document.querySelector('.write__year');
const $writeMonth = document.querySelector('.write__month');
const $writeDate = document.querySelector('.write__date');
const $writeDay = document.querySelector('.write__day');
const $writeInput = document.querySelector('.write-input');
const $writeText = document.querySelector('.write-text');

const todayDate = new Date();
const year = todayDate.getFullYear();
const month = todayDate.getMonth() + 1;
const date = todayDate.getDate();

const getDate = () => {
  $writeYear.textContent = year;
  $writeMonth.textContent = todayDate.toString().slice(4, 7).toUpperCase();
  $writeDate.textContent = date;
  $writeDay.textContent = `( ${todayDate.toString().slice(0, 3).toUpperCase()} )`;
};

const generateId = () => `${year}-${("0" + month).slice(-2)}-${("0" + date).slice(-2)}`;

const addDiaries = () => {
  axios.post('http://localhost:7000/diaries',
    { id: generateId(), title: $writeInput.value, content: $writeText.value })
    .then(res => res.data)
    .then(listRender);
};

$writeInput.onkeyup = ({ keyCode, target }) => {
  const content = target.value.trim();
  if (keyCode !== 13 || content === '') return;
  $writeText.focus();
};

const confirm = () => {
  if ($writeInput.value === '' || $writeText.value === '') return;
  addDiaries();
  $writeInput.value = '';
  $writeText.value = '';
  $diaryWriteContainer.classList.remove('is-active');
  $modalSet.classList.remove('is-active');
};

export { getDate, confirm };
