let employes = [
  { name: "Usman", salary: 200 },
  { name: "Noman", salary: 100 },
  { name: "Hareem", salary: 300 },
];

// let filtered = employes.filter((e) => e.salary > 200);
let filtered = employes.findIndex((e) => e.name == "1Noman");
console.log(filtered);
