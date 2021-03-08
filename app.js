//Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

//Event Listeners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
//Functions
function addTodo(event){
        // preventing the form button submitting
    event.preventDefault();
    //Todo Div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    //Create Li
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    //Check Mark Button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>'
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);
    //Check Trash Button
    const TrashButton = document.createElement('button');
    TrashButton.innerHTML = '<i class="fas fa-trash"></i>'
    TrashButton.classList.add("trash-btn");
    todoDiv.appendChild(TrashButton);
    //APPEND TO LIST
    todoList.appendChild(todoDiv);
    //Clear Todo input value
    todoInput.value="";
}
function deleteCheck(e){
    const item = e.target;
    //Delete TODO
    if(item.classList[0] === 'trash-btn'){
        const todo = item.parentElement;
        todo.classList.add("fall");
        todo.remove();
    }
    //Check Mark
    if(item.classList[0]=== "complete-btn"){
        const todo = item.parentElement;
        todo.classList.toggle("completed");

    }
}