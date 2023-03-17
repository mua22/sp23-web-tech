console.log("Script started");
function handleSort() {
  console.log("Handling Sorting");
  var lis = document.getElementsByClassName("std");
  console.log(lis);
  var students = [];
  for (var index = 0; index < lis.length; index++) {
    students.push(lis[index].innerHTML);
  }

  students.sort();
  console.log(students);
  let ul = document.getElementById("students");
  ul.innerHTML = "";
  for (index = 0; index < students.length; index++) {
    ul.innerHTML = ul.innerHTML + "<li>" + students[index] + "</li>";
  }
}

console.log("Script Ended");
