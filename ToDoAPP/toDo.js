let todoList = [];
function addTodo() {
  let inputElement = document.getElementById("todo-input");
  let dateElement = document.getElementById("todo-date");
  let todoItem = inputElement.value;
  let todoDate = dateElement.value;
  todoList.push({ item: todoItem, dueDate: todoDate });
  inputElement.value = " ";
  dateElement.value = " ";
  if (todoItem == 0) {
    alert("Please enter todo and date ");
    return;
  }

  displayItems();
}

function displayItems() {
  let displayElement = document.querySelector(".todo-container");

  let newHtml = `  `;
  for (let i = 0; i < todoList.length; i++) {
    // let item = todoList[i].item;
    //let dueDate = todoList[i].dueDate; instead of write object destructuring
    let { item, dueDate } = todoList[i];
    newHtml += `
     <span>${item}</span>
     <span>${dueDate}</span>
     <button class='btn-delete' onclick="todoList.splice(${i},1) ; displayItems();">Delete</button>
     `;
  }
  displayElement.innerHTML = newHtml;
}
