function handleAddBtnClick() {
  let newTodo = $("#newTodo").val();
  $("#todos").append(`<li>${newTodo}</li>`);
}
$(function () {
  $("#addTodoBtn").on("click", handleAddBtnClick);

  $(document).on("click", "#todos li", function () {
    // alert("li clicked");
    $(this).remove();
  });
});

// below code will not bind new lis
// $(function () {
//   $("#addTodoBtn").on("click", handleAddBtnClick);

//   $("#todos li").on("click", function () {
//     // alert("li clicked");
//     $(this).remove();
//   });
// });
