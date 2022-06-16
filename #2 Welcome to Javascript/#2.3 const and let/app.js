// constant variable
const a = 5;
const b = 2;
console.log(a + b);
console.log(a * b);
console.log(a / b);

const constMyName = "chanhaeng";
console.log("hello " + myName);
constMyName = "chanhaeng lee"; // error
console.log("hello " + myName);

// unconstant variable
let c = 5;
let d = 2;
console.log(c + d);
console.log(c * d);
console.log(c / d);

let myName = "chanhaeng";
console.log("hello " + myName);
myName = "chanhaeng lee"; // no error
console.log("your new name is " + myName);

var e = 5;
var f = 2;
console.log(e + f);
console.log(e * f);
console.log(e / f);

// Almost way, define variable with const
// Sometimes, use let.
// NEVER use var.
