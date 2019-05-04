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

const containerDiv = document.getElementsByClassName('container');
containerDiv.innerHTML= '<li>hello </li>';