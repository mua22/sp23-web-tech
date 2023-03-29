let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let evenNumbers = arr.filter(function (x) {
//   return x % 2 == 0;
// });
let evenNumbers = arr.filter((x) => x % 2 == 0);
// console.log(evenNumbers);

let mappedArray = arr.map((x) => x * 2);

// console.log(mappedArray);

// let f = arr.find((x) => x == 5);
let f = arr.findIndex((x) => x == 5);
let spliced = arr.splice(3, 0, 16, 19);
console.log(spliced);
console.log(arr);
