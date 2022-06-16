// returns from function
const calculator = {
    add: function (a, b) {
        return a + b;
    },
    minus: function (a, b) {
        return a - b;
    },
    times: function (a, b) {
        return a * b;
    },
    devide: function (a, b) {
        return a / b;
    },
    power: function (a, b) {
        return a ** b;
    }
};
console.log(calculator.add(1, 2));
alert(calculator.add(1, 2));

const plusResult = calculator.add(2, 3);
const minusResult = calculator.minus(plusResult, 10);
const timesResult = calculator.times(10, minusResult);
const devideResult = calculator.devide(timesResult, plusResult);
const powerResult = calculator.power(devideResult, minusResult);

function calculateKrAge(ageOfForeigner) {
    return ageOfForeigner + 2;
}

console(calculateKrAge(25)); // 27
