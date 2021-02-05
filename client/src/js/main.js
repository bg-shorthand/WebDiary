import listRender from './main/list-render';
import readData from './main/read-data';

import modal from './modal/modal';

listRender();
modal();
document.querySelector('.diary-list').addEventListener('click', readData);
