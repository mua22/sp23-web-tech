console.log("From External JS File");

function handleTestBtnClick() {
  console.log("You clicked Me");
  var result = document.getElementById("result");
  result.innerHTML = "Btn Is Clicked";
}

function checkNameHandler() {
  var input = document.getElementById("name");
  if (input.value) {
    input.classList.remove("error");
    input.classList.add("success");
  } else {
    input.classList.remove("success");
    input.classList.add("error");
  }
}
