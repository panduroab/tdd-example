module.exports = () => {
    return {
        multiply: (number1, number2) => {
            return new Promise((resolve, reject) => {
                return resolve(200);
            });
        },
        divide: (number1, number2) => new Promise((resolve, reject) => resolve(number1 / number2))
    }
};