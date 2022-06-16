// returns from function
const calculator = {
    add: function (a, b) {
        return a + b;
        console.log("hello"); // never work
    },
};
console.log(calculator.add(1, 2)); // 3
// never print "hello"
