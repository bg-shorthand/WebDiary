import selectModal from './select-modal';
import getDate from './write-modal';
import calModalRender from './cal-modal-render';
import calModalPresent from './cal-modal-present';
import { preBtnE, nextBtnE } from './cal-modal-move';
import isDiary from './cal-modal-isDiary';

const $diaryCalendarPreBtn = document.querySelector('.diary-calendar__pre-btn');
const $diaryCalendarNextBtn = document.querySelector('.diary-calendar__next-btn');

export default () => {
  selectModal();
  getDate();
  document.querySelector('.calendar').addEventListener('click', calModalRender(new Date()));
  $diaryCalendarPreBtn.addEventListener('click', preBtnE);
  $diaryCalendarNextBtn.addEventListener('click', nextBtnE);
  document.querySelector('.calendar').addEventListener('click', isDiary);
  $diaryCalendarPreBtn.addEventListener('click', isDiary);
  $diaryCalendarNextBtn.addEventListener('click', isDiary);
  
  calModalPresent();
}