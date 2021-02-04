// const $firstDay = document.querySelector('.day1 > .date');

// export default $firstDay;

for (let i = 0; i < 100; i++) {
  console.log((new Date(+(new Date()) + (i * 86400000))).getDate());
};
