console.log("Script started");
function handleAddBtnClick() {
  var newTodo = document.getElementById("newTodo");
  var todos = document.getElementById("todos");
  //   todos.innerHTML = todos.innerHTML + "<li>" + newTodo.value + "</li>";
  todos.innerHTML = todos.innerHTML + `<li>${newTodo.value}</li>`;
}

//this will not work
// var addTodoBtn = document.getElementById("addTodoBtn");
// addTodoBtn.onclick = handleAddBtnClick;

function doBindings() {
  console.log("Calling do Bindings");
  var addTodoBtn = document.getElementById("addTodoBtn");
  addTodoBtn.onclick = handleAddBtnClick;
}
//this is also not viable
// setTimeout(doBindings, 5000);

window.onload = doBindings;
console.log("script ended");
