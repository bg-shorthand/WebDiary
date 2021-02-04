const $diaryCalendarYear = document.querySelector('.diary-calendar__year');
const $diaryCalendarMonth = document.querySelector('.diary-calendar__month');

export default date => {
  const renderDate = new Date(date);

  $diaryCalendarYear.textContent = renderDate.getFullYear();
  $diaryCalendarMonth.textContent = `${renderDate.getMonth() + 1}`;

  const firstDay = new Date(`${renderDate.getFullYear()}-${renderDate.getMonth() + 1}-1`);

  let firstSunday = {};
  switch (firstDay.getDay()) {
    case 0: firstSunday = new Date(firstDay - 86400000 * 0);
      break;
    case 1: firstSunday = new Date(firstDay - 86400000 * 1);
      break;
    case 2: firstSunday = new Date(firstDay - 86400000 * 2);
      break;
    case 3: firstSunday = new Date(firstDay - 86400000 * 3);
      break;
    case 4: firstSunday = new Date(firstDay - 86400000 * 4);
      break;
    case 5: firstSunday = new Date(firstDay - 86400000 * 5);
      break;
    case 6: firstSunday = new Date(firstDay - 86400000 * 6);
      break;
    default: firstSunday = 0;
  }

  for (let i = 1; i < 43; i++) {
    document.querySelector(`.day${i}`).setAttribute('id', `${new Date(+firstSunday + 86400000 * i - 1).toISOString().slice(0, 10)}`);

    document.querySelector(`.day${i} .date`).textContent = new Date(+firstSunday + 86400000 * (i - 1)).getDate();
  }

  // const todayId = `id${new Date().toISOString().slice(0, 10).replace(/-/g, '')}`;
  // if (document.getElementById(todayId)) {
  //   document.getElementById(todayId).classList.add('here');
  // } else if (document.getElementsByClassName('here')[0]) {
  //   document.getElementsByClassName('here')[0].classList.remove('here');
  // }
};