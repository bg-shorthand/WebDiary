const $writeYear = document.querySelector('.write__year');
const $writeMonth = document.querySelector('.write__month');
const $writeDate = document.querySelector('.write__date');
const $writeDay = document.querySelector('.write__day');
const $writeInput = document.querySelector('.write-input');
const $writeText = document.querySelector('.write-text');

const todayDate = new Date();

const getDate = () => {
  $writeYear.textContent = todayDate.getFullYear();
  $writeMonth.textContent = todayDate.toString().slice(4, 7).toUpperCase();
  $writeDate.textContent = todayDate.getDate();
  $writeDay.textContent = `( ${todayDate.toString().slice(0, 3).toUpperCase()} )`;
};

$writeInput.onkeyup = ({ keyCode, target }) => {
  const content = target.value.trim();
  if (keyCode !== 13 || content === '') return;
  $writeText.focus();
};

// $writeInput.onblur = ({target}) => {
//   const content = target.value.trim();
//   if (content === '') return;
// };

$writeText.onkey

export default () => {
  getDate();
};
