// Very good book of Javascript
// https://eloquent-javascript.karmazzin.ru/

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