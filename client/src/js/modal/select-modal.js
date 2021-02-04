const $diaryPlus = document.querySelector('.diary-plus');
const $calendar = document.querySelector('.calendar');
const $modalSet = document.querySelector('.modal-set');
const $diaryList = document.querySelector('.diary-list');
const $diaryContentContainer = document.querySelector('.diary-content-container');
const $diaryWriteContainer = document.querySelector('.diary-write-container');
const $diaryCalendarContainer = document.querySelector('.diary-calendar-container');
const $contentClose = document.querySelector('.content-close');
const $writeClose = document.querySelector('.write-close');
const $diaryCalendarCloseBtn = document.querySelector('.diary-calendar__close-btn');

export default () => {
  console.log('selectModal');

  $diaryPlus.onclick = () => {
    $modalSet.classList.add('is-active');
    $diaryWriteContainer.classList.add('is-active');
  };
  $calendar.onclick = () => {
    $modalSet.classList.add('is-active');
    $diaryCalendarContainer.classList.add('is-active');
  };
  $diaryList.onclick = e => {
    if (e.target.matches('ul')) return;
    $modalSet.classList.add('is-active');
    $diaryContentContainer.classList.add('is-active');
  };
  
  $contentClose.onclick = () => {
    $modalSet.classList.remove('is-active');
    $diaryContentContainer.classList.remove('is-active');
  };
  $writeClose.onclick = () => {
    $modalSet.classList.remove('is-active');
    $diaryWriteContainer.classList.remove('is-active');
  };
  $diaryCalendarCloseBtn.onclick = () => {
    $modalSet.classList.remove('is-active');
    $diaryCalendarContainer.classList.remove('is-active');
  };

  $diaryContentContainer.onclick = e => {
    if (!e.target.classList.contains('diary-content-container')) return;
    $modalSet.classList.remove('is-active');
    $diaryContentContainer.classList.remove('is-active');
  };
  $diaryWriteContainer.onclick = e => {
    if (!e.target.classList.contains('diary-write-container')) return;
    $modalSet.classList.remove('is-active');
    $diaryWriteContainer.classList.remove('is-active');
  };
  $diaryCalendarContainer.onclick = e => {
    if (!e.target.classList.contains('diary-calendar-container')) return;
    $modalSet.classList.remove('is-active');
    $diaryCalendarContainer.classList.remove('is-active');
  };
};