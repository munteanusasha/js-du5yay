
// Import stylesheets
import './style.css';

// Write Javascript code!
add.addEventListener("click",()=>{
  list.insertAdjacentHTML('afterbegin','<li class="list-item">'+item.value+'</li>');
});



search.addEventListener('click',()=>{
  console.clear();
  let lists = document.getElementsByClassName('list-item');
  for(let i=0; i<lists.length; i++){
    if(item.value===lists[i].textContent){
      list.append(lists[i].textContent);
      // console.log(lists[i]);
    }
  }
});