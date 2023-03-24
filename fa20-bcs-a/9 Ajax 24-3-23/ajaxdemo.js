$(function () {
  // this code will be executed when DOM is ready
  $("#loadDataBtn").on("click", fetchData);
  fetchData();
});

function fetchData() {
  $("#recipes").html("Loading ...");
  console.log("API Call to fetch Data Started");
  $.ajax({
    url: "https://usman-fake-api.herokuapp.com/api/recipes",
    success: handleAjaxResponse,
  });
  console.log("API Call to fetch Data Ended");
}

function handleAjaxResponse(response) {
  console.log("Request Completed");
  // $("#recipes").html("Request Completed");
  $("#recipes").html("");
  console.log(response);
  for (var i = 0; i < response.length; i++) {
    var rec = response[i];
    $("#recipes").append(
      "<div><h1>" + rec.title + "</h1><p>" + rec.body + "</p></div>"
    );
  }
}

// handle add
$(function () {
  $("#addForm").on("submit", function (e) {
    console.log(e);
    e.preventDefault();
    $.ajax({
      url: "https://usman-fake-api.herokuapp.com/api/recipes",
      method: "post",
      data: {
        title: $("#title").val(),
        body: $("#body").val(),
      },
      success: function () {
        window.location.href = "ajax.html";
      },
    });
  });
});
