// isNaN
console.log(isNaN("asd")); // true
console.log(isNaN("15")); // false

// conditional statement
let age = prompt("How old are you?");
if (isNaN(age)) {
    console.log("Please write a number");
} else {
    console.log("Thank you for writing your age.");
}
