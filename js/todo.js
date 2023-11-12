const todoForm = document.querySelector(".todo-form");
const todoInput = document.querySelector(".todo-form input");
const list = document.querySelector(".list");

const TODOS = "todos";

let toDos = [];

function saveTodo(){
    localStorage.setItem(TODOS,JSON.stringify(toDos));
}

function deleteTodo (click){
    const li = click.target.parentElement;
    li.remove();
    toDos = toDos.filter((arrayTodo) => arrayTodo.id !== parseInt(li.id));
    saveTodo();
}

function paintTodo(todoTextId){
    const li = document.createElement("li");
    li.id = todoTextId.id;
    const span = document.createElement("span");
    span.innerText = todoTextId.text;
    const button = document.createElement("button");
    button.innerText = "X";
    button.addEventListener("click",deleteTodo);
    list.appendChild(li);
    li.appendChild(span);
    li.appendChild(button);
}

function enter (submit){
    submit.preventDefault();
    const todoText = todoInput.value;
    const todoTextId = {
        text: todoText,
        id: Date.now(),
    };
    todoInput.value = "";
    toDos.push(todoTextId);
    paintTodo(todoTextId);
    saveTodo();
}

todoForm.addEventListener("submit",enter);

const savedTodos = localStorage.getItem(TODOS);

if(savedTodos !== null){
    const parseTodos = JSON.parse(savedTodos);
    toDos = parseTodos;
    parseTodos.forEach(paintTodo);
}
