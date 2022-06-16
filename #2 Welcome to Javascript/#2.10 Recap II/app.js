// array
const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

// object
console.log(console);

const player = {
    name: "chomu",
    age: 27,
};

console.log(player.name);
player.name = "2chomu";
console.log(player.name);

console.log(player);
player.sexy = true;
console.log(player);

// function
alert("lalalal");

function plus() {
    console.log(2 + 2);
}

plus; // not work
plus(); // 4

function plus(potato, salad) {
    console.log(potato + salad);
}

plus(5, 10);
plus(4.9, 8);

function minusFive(potato) {
    console.log(potato - 5);
}

minusFive(10); // 10
minusFive(5, 6, 7, 8, 9); // 0

// method of object
const calculator = {
    add: function (a, b) {
        console.log(a + b);
    },
    minus: function (a, b) {
        console.log(a - b);
    },
    devide: function (a, b) {
        console.log(a / b);
    },
    powerof: function (a, b) {
        console.log(a ** b);
    }
};
calculator.add(1, 2); // 3
calculator.minus(1, 2); // -1
calculator.devide(1, 2); // 0.5
calculator.powerof(1, 2); // 1
