const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");
const TODOS_KEY = "todos"

let toDos = []

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
    const li = event.target.parentElement;
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id))
    saveToDos()
    li.remove();
}

function paintToDo(newToDo) {
    const li = document.createElement("li");
    li.id = newToDo.id
    const button = document.createElement("button")
    button.innerText = "❌"
    const span = document.createElement("span");
    span.innerText = newToDo.text;
    button.addEventListener("click", deleteToDo)
    li.appendChild(button);
    li.appendChild(span);
    toDoList.appendChild(li)
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text: newToDo,
        id: Date.now()
    }
    toDos.push(newTodoObj);
    paintToDo(newTodoObj)
    saveToDos();
}


toDoForm.addEventListener("submit", handleToDoSubmit)

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos) {
    const parsedToDos = JSON.parse(savedToDos)
    toDos = parsedToDos
    parsedToDos.forEach(paintToDo)
}
