// Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

// Event Listeners
todoButton.addEventListener("click", addTodo);

// Functions
function addTodo(event) {
  // Prevent Form Submitting
  event.preventDefault();
  // Create a Todo Div
  const todoDiv = document.createElement("div");
  // Add class todo
  todoDiv.classList.add("todo");
  // Create a LI
  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);
  todoList.appendChild(todoDiv);
  // Clear input value
  todoInput.value = "";
}
