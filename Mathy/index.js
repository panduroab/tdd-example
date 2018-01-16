module.exports = () => ({
    add:        (number1, number2) => new Promise((resolve, reject) => resolve(number1 + number2)),
    divide:     (number1, number2) => new Promise((resolve, reject) => resolve(number1 / number2)),
    multiply:   (number1, number2) => new Promise((resolve, reject) => resolve(number1 * number2)),
    substract:  (number1, number2) => new Promise((resolve, reject) => resolve(number1 - number2))
});