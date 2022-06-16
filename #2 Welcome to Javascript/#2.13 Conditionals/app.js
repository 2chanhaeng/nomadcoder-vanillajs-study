// change types
const age = prompt("What is your age?"); // pausing until get input
console.log(typeof age); // string
const ageAsNum = parseInt(prompt("What is your age?")); // convert string to number
console.log(typeof ageAsNum); // number
parseInt("15") // 15
parseInt("asd") // NaN; Not a Number
