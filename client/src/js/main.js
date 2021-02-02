import test1 from './test';
import test2 from './test2';
const axios = require('axios');

test1();
test2();

axios.get('http://localhost:7000/todos')
  .then(res => {
    console.log(res.data);
  });