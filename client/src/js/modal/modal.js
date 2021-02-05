import selectModal from './select-modal';
import { getDate, confirm } from './write-modal';
import calModalRender from './cal-modal-render';
import calModalPresent from './cal-modal-present';

const $diaryCalendarPreBtn = document.querySelector('.diary-calendar__pre-btn');
const $diaryCalendarNextBtn = document.querySelector('.diary-calendar__next-btn');
const $writeCompleted = document.querySelector('.write-completed');

export default () => {
  console.log('modal');
  selectModal();
  getDate();
  $writeCompleted.addEventListener('click', confirm);
  document.querySelector('.calendar').addEventListener('click', calModalRender(new Date()));

  // $diaryCalendarPreBtn.addEventListener('click', preBtnE);
  // $diaryCalendarNextBtn.addEventListener('click', nextBtnE);
  // document.querySelector('.diary-calendar__pre-btn').addEventListener('click', () => {

  // })
  calModalPresent();
}