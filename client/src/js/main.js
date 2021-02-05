import listRender from './main/list-render';
import readData from './main/read-data';
import readToEdit from './main/read-to-edit';

import modal from './modal/modal';

listRender();
modal();
document.querySelector('.diary-list').addEventListener('click', readData);
document.querySelector('.content-edit').addEventListener('click', readToEdit);