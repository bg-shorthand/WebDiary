import selectModal from './select-modal';
import calModalRender from './cal-modal-render';

const $diaryCalendarPreBtn = document.querySelector('.diary-calendar__pre-btn');
const $diaryCalendarNextBtn = document.querySelector('.diary-calendar__next-btn');
import calModalPresent from './cal-modal-present';

export default () => {
  console.log('modal');
  selectModal();
  document.querySelector('.calendar').addEventListener('click', calModalRender(new Date()));

  // $diaryCalendarPreBtn.addEventListener('click', preBtnE);
  // $diaryCalendarNextBtn.addEventListener('click', nextBtnE);
  // document.querySelector('.diary-calendar__pre-btn').addEventListener('click', () => {

  // })
  calModalPresent();
}