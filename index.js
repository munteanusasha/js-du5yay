// Very good book of Javascript
// https://eloquent-javascript.karmazzin.ru/
// dd command https://vitux.com/how-to-create-a-bootable-usb-stick-from-the-ubuntu-terminal/
// https://www.linux.com/training-tutorials/how-burn-iso-usb-drive/

//Game "SCORN"

// LLF Ubuntu https://www.dedoimedo.com/computers/low-level-formatting.html

// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>To-Do List App</h1>`;

let todolist = [];
let countid = 0;

function updateList(item){
  item = document.getElementById('add');
  todolist.push({id: countId ++, listitem: item});
}

function showItem(result){
  result = document.getElementById('search');
  result.innerHTML = todolist[i];
}