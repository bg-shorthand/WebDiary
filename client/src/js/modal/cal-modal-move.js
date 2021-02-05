import { monthNames } from './cal-modal';
import calModalRender from './cal-modal-render';

const $headYear = document.querySelector('.diary-calendar__year');
const $headMonth = document.querySelector('.diary-calendar__month');

const preBtnE = () => {
  const curYear = $headYear.textContent;
  const curMonth = $headMonth.textContent;

  if (monthNames.indexOf(curMonth) > 0) {
    $headMonth.textContent = monthNames[monthNames.indexOf(curMonth) - 1];
    console.log(`${$headYear.textContent}-${monthNames.indexOf($headMonth.textContent)}-1`);
    calModalRender(`${$headYear.textContent}-${monthNames.indexOf($headMonth.textContent) + 1}-1`);
  } else {
    $headYear.textContent = curYear - 1;
    $headMonth.textContent = monthNames[monthNames.length - 1];
    calModalRender(`${$headYear.textContent}-${monthNames.indexOf($headMonth.textContent) + 1}-1`);
  }
};
const nextBtnE = () => {
  const curYear = $headYear.textContent;
  const curMonth = $headMonth.textContent;
  
  if (monthNames.indexOf(curMonth) < 11) {
    $headMonth.textContent = monthNames[monthNames.indexOf(curMonth) + 1];
    calModalRender(`${$headYear.textContent}-${monthNames.indexOf($headMonth.textContent) + 1}-1`);
  } else {
    $headYear.textContent = +curYear + 1;
    $headMonth.textContent = monthNames[0];
    calModalRender(`${$headYear.textContent}-${monthNames.indexOf($headMonth.textContent) + 1}-1`);
  }
};

export { preBtnE, nextBtnE };