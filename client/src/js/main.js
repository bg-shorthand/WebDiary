import test1 from './test';
import test2 from './test2';

test1();
test2();

fetch('http://localhost:7000/todos')
  .then(res => res.json())
  .then(res => {
    console.log(res);
  });