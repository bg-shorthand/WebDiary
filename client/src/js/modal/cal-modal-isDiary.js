const axios = require('axios');

const isDiary = async () => {
  const res = await axios.get('http://localhost:7000/diaries');
  const { data: diaries } = res;

  for (let i = 1; i < 43; i++) {
    document.querySelector(`.day${i}`).lastElementChild.classList.remove('far', 'fa-star')
  }
  diaries.forEach(({ id }) => {
    if (document.getElementById(`${id}`) !== null) {
      document.getElementById(`${id}`).lastElementChild.classList.add('far', 'fa-star');
    }
  });
};

export default isDiary;