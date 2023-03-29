let arr = [2, 4, 8, 10, 12, 13, 17, 5];

// let filtered = arr.filter(function (element) {
//   return element < 10;
// });

let filtered = arr.filter((element) => element < 10);
let mapped = arr.map((element) => element - 2);
let hasTen = arr.findIndex((element) => element == 10);
// console.log(hasTen);
// console.log(arr);
// console.log(filtered);
// console.log(mapped);
let str = "Comsats is very very good University";

let s = str.replace(/er/g, "**");
console.log(str.split(" ").join("--"));
