// before array
const mon = "mon";
const tue = "tue";
const wed = "wed";
const thu = "thu";
const fri = "fri";
const sat = "sat";
const sun = "sun";
const dayOfWeek = mon + tue + wed + thu + fri + sat + sun;
console.log(dayOfWeek);

// array
const arrayOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
console.log(arrayOfWeek);
const nonsence = [1, 2, "hello", false, null, undefined, {}, [], function() {}, /^/];
console.log(nonsence);

// Get item from array
console.log(arrayOfWeek[5]); // sat
// Because almost of computer language, count from 0.
console.log(arrayOfWeek[0]); // mon

// Add one more item to array
console.log(arrayOfWeek);
arrayOfWeek.push("one more weekend");
console.log(arrayOfWeek);

const toBuy = ["potato", "tomato", "pizza"];
toBuy.push("kimbab");
console.log(toBuy[2]); // pizza
console.log(toBuy[56786]); // undefined
