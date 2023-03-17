window.onload = function () {
  var addTodoBtn = document.getElementById("addTodoBtn");
  addTodoBtn.onclick = function () {
    var newTodo = document.getElementById("newTodo");
    var todos = document.getElementById("todos");
    //   todos.innerHTML = todos.innerHTML + "<li>" + newTodo.value + "</li>";
    todos.innerHTML = todos.innerHTML + `<li>${newTodo.value}</li>`;
  };
};
