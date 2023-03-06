console.log("From External File");

function btnClickHandler() {
  console.log("btn clicked");
  var test = document.getElementById("test");
  test.classList.remove("red");
  test.classList.add("green");

  var result = document.getElementById("result");
  result.innerHTML = "Whoala You have clicked";
}
