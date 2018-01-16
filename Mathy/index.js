module.exports = () => {
    return {
        multiply: (number1, number2) => {
            return new Promise((resolve, reject) => {
                return resolve(200);
            });
        },
        addArray: (arr) => {
            return new Promise((resolve, reject) => {
                let x = 0;
                for (let i = 0; i < arr.length; i++) {
                    x += Number(arr[i]);
                }
                return resolve(x);
            });
        },
        divide: (number1, number2) => new Promise((resolve, reject) => resolve(number1 / number2))
    }
};