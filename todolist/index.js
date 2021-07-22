const addTask = document.querySelector(".add");
// const addTask = document.getElementsByClassName("addtask") // HTMLCollection [form.addtask]
const addButton = document.querySelector(".add-todo");
//const todoList = document.querySelector(".todos"); //parent of li
const todoList = document.getElementById("todoslist");
const list = document.getElementsByTagName("li"); // HTMLCollection(4) [li, li, li, li]
const clearDoneButton = document.querySelector(".clear button"); 


const list2 = document.querySelectorAll(".todos li"); // NodeList(4) [li, li, li, li]
const dayname = document.getElementById("dayName");
//const test = document.getElementsByTagName("content");
const todosListid = document.getElementById("todoslist");


console.log(addTask);
console.log('addTask.value',addTask.add.value);
console.log(addButton);
console.log('todoList',todoList);
console.log('li in todoList',todoList.children.item(0));


console.log('todosListid',todosListid);
console.log('li in todosListid',todosListid.children.item(0));

console.log(dayname);
console.log(list);
console.log(list2);
console.log(list.item(1)); //get specific <li></li>
console.log(list.item(0).value);
console.log(list.item(0).id);
console.log(list.item(0).className);
/*
* 如果需要讀取元素節點屬性，
* 直接使用 元素.屬性名
* 例子：元素.id 元素.name 元素.value
* 注意：class屬性不能採用這種方式，
* 讀取class屬性時需要使用 元素.className
*/

/*
  NodeList除了length属性外还有其他5个方法（method），分别是entries, forEach, item, keys, values，
    var parent = document.querySelector('.parent');
    console.log(parent.childNodes);
  DOM節點（node）不光包含HTML元素，還包含text node（字符節點）和comment（註釋），
    - HTMLCollection只包含HTML元素，
    - NodeList包含所有類型的DOM節點

  而HTMLCollection又直接繼承於Object對象，所以它和NodeList是平級的。
  HTMLCollection和NodeList一樣包含了查詢得到的html元素，length屬性和item方法，但沒有NodeList的entries, forEach, keys, values這四個方法，但是又多了一個namedItem（根據id和name篩選元素）方法.
  HTMLCollection這個接口的集合只包含HTML元素
*/






let listLenght = list.lenght;

const generateTaskTempalate = (todo) => {
  const html = `<li>
                  <input type="checkbox" id="todo_${listLenght}">
                  <label for="todo_${listLenght}">
                    <span class="check"></span>
                    ${todo}
                  </label>
                  <i class="far fa-trash-alt delete"></i>
                </li>`;
  todoList.innerHTML += html; // 不是附加內容，而且完全地重寫。
}

function addTodos(e) {
  e.preventDefault();
  const todo = addTask.add.value.trim(); // value in <input>
  if (todo.length) { // already havs tasks exit
    listLenght = listLenght + 1;
    generateTaskTempalate(todo);
    addTask.reset(); // clear <input>
  }
}

addTask.addEventListener("submit", addTodos); // press enter //e.preventDefault();-->submit
addButton.addEventListener("click", addTodos); // click

function deleteTodos(e) {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
  }
}

function clearDone() {
  console.log('clearDone');
  for(let i=0; i<todoList.childElementCount;){
    if(!todoList.children.item(i).firstElementChild.checked){
      i++
    }
    //console.log(todoList.children.item(i));
    // console.log(todoList.children.item(0).firstElementChild)
    else if(todoList.children.item(i).firstElementChild.checked){
      // todoList.children.item(i).innerHTML = ""; // outer <li></> still exit
      // todoList.removeChild(todoList.children.item(i)) // also work
      todoList.children.item(i).remove() 
    }
  }
}
todoList.addEventListener("click", deleteTodos);
clearDoneButton.addEventListener("click", clearDone);