module.exports = () => {
    return {
        multiply: (number1, number2) => {
            return new Promise((resolve, reject) => {
                return resolve(200);
            });
        }, 

        substract: (number1, number2) => {
            return new Promise((resolve, reject) => {
                return resolve(number1 - number2);
            });
        },
        divide: (number1, number2) => new Promise((resolve, reject) => resolve(number1 / number2))
    }
};