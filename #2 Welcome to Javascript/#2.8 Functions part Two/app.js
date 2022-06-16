// before function
console.log("Hello my name is chomu")
console.log("Hello my name is nico")
console.log("Hello my name is dal")

// function
function sayHelloTo(nameOfPerson, age) {
    console.log("Hello my name is " + nameOfPerson + " and I'm " + age);
}

sayHelloTo("chomu");
sayHelloTo("nico");
sayHelloTo("dal");

function plus(firstNumber, secondNumber) {
    console.log(firstNumber + secondNumber);
}

plus(); // NaN
plus(8, 60); 
console.log(firstNumber); // undefined

const player = {
    name: "chomu",
    sayHello: function(otherPersonsName) {
        console.log("Hello" + otherPersonsName + "nice to meet you");
    }
}
player.sayHello("lynn");
player.sayHello("nico");