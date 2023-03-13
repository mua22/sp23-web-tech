console.log("Script started");

function doBindings() {
  console.log("Binding Started");
  var mybtn = document.getElementById("mybtn");
  mybtn.onclick = sortList;
}
window.onload = doBindings;

//never ever do this
// setTimeout(doBindings, 5000);

function sortList() {
  console.log("sorting started");
  let lis = document.getElementsByClassName("std");
  let students = [];
  for (var i = 0; i < lis.length; i++) {
    let name = lis[i].innerHTML;
    students.push(name);
  }
  students.sort();
  let ul = document.getElementById("students");

  ul.innerHTML = "";
  for (i = 0; i < students.length; i++) {
    ul.innerHTML += "<li class='std'>" + students[i] + "</li>";
  }
  console.log(students);
  console.log(lis);
}
console.log("script ended");
