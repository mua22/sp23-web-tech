$(function () {
  // this code will execute when the DOM is ready.
  // $("#loadDataBtn").on("click",loadData);
  loadData();
});

function loadData() {
  console.log("Sending Ajax Call");
  $("#statusRow td").html("Loading Data...");
  $.ajax({
    url: "https://usman-fake-api.herokuapp.com/api/recipes",
    success: processResponse,
  });
  console.log("Ajax Call Sent");
}

function processResponse(response) {
  console.log(response);
  $("#statusRow").remove();
  for (var i = 0; i < response.length; i++) {
    $("#tableBody").append(
      `<tr><td><button class="btn btn-danger">Delete</button></td><td>${response[i].title}</td><td>` +
        response[i].body +
        `</td></tr>`
    );
  }
}

//Handle Addition
$(function () {
  $("#addForm").on("submit", function (e) {
    e.preventDefault();
    $.ajax({
      url: "https://usman-fake-api.herokuapp.com/api/recipes",
      method: "post",
      data: {
        title: $("#title").val(),
        body: $("#body").val(),
      },
      success: function () {
        window.location.href = "ajaxexample.html";
      },
    });
  });
});
