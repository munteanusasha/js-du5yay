
// Import stylesheets
import './style.css';

// Write Javascript code!
add.addEventListener("click",()=>{
  list.insertAdjacentHTML('afterbegin','<li class="list-item">'+item.value+'</li>');
});


let lists = document.getElementsByClassName('list-item');
search.addEventListener('click',()=>{
  // console.log('click');
  for(let i=0; i<lists.length; i++){
    // console.log(lists[i]);
    if(item.value==lists[i].text()){
      console.log(lists[i]);
    }
  }
});