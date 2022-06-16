// constant variable
const a = 5;
console.log(a); // 5
a = 10; // error
console.log(a); // 5

// changable variable
let b = 5;
console.log(b); // 5
b = 10; // no error
console.log(b); // 10

// array

const toBuy = ["potato", "tomato", "pizza"];
console.log(toBuy); // ["potato", "tomato", "pizza"]
toBuy[2] = "water";
console.log(toBuy); // ["potato", "tomato", "water"]
toBuy.push("meat");
console.log(toBuy); // ["potato", "tomato", "water", "meat"]
