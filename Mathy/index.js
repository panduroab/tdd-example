module.exports = () => ({ 
    multiply  : (number1, number2) => {return new Promise((resolve, reject) => resolve(number1*number2))},
    add       : (number1, number2) => {return new Promise((resolve, reject) => resolve(number1+number2))},
    substract : (number1, number2) => {return new Promise((resolve, reject) => resolve(number1-number2))},
    divide    : (number1, number2) => {return new Promise((resolve, reject) => resolve(number1/number2))}      
});