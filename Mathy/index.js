module.exports = () => {
    return {
        multiply: (number1, number2) => {
            return new Promise((resolve, reject) => {
                return resolve(number1 * number2);
            });
        },

        add: (number1, number2) => {
            return new Promise((resolve, reject) => {
                return resolve(number1 + number2);
            });
        },

        substract: (number1, number2) => {
            return new Promise((resolve, reject) => {
                return resolve(number1 - number2);
            });
        },

        addArray: (array) => {
            return new Promise((resolve, reject) => {
                var res = 0;
                for (i=0; i<array.length; i++){
                    res += array[i];
                }
                return resolve(res);
            })

        }
    }
};