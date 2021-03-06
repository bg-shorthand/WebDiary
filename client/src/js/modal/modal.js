import selectModal from './select-modal';
import { getDate, confirm } from './write-modal';
import calModalRender from './cal-modal-render';
import calModalPresent from './cal-modal-present';
import { preBtnE, nextBtnE } from './cal-modal-move';
import isDiary from './cal-modal-isDiary';
import readDiary from './cal-modal-readDiary';

const today = new Date();
const $diaryCalendarPreBtn = document.querySelector('.diary-calendar__pre-btn');
const $diaryCalendarNextBtn = document.querySelector('.diary-calendar__next-btn');
const $writeCompleted = document.querySelector('.write-completed');

export default () => {
  selectModal();
  getDate();
  $writeCompleted.addEventListener('click', confirm);
  document.querySelector('.calendar').addEventListener('click', calModalRender(today));
  $diaryCalendarPreBtn.addEventListener('click', preBtnE);
  $diaryCalendarNextBtn.addEventListener('click', nextBtnE);
  document.querySelector('.calendar').addEventListener('click', isDiary);
  $diaryCalendarPreBtn.addEventListener('click', isDiary);
  $diaryCalendarNextBtn.addEventListener('click', isDiary);
  document.querySelector('table').addEventListener('click', readDiary);
  
  calModalPresent();
}