const Mathy = require('../../Mathy');
const assert = require('chai').assert;

describe('Math example', () => {
    var number1 = 100, number2 = 2;
    // Multiplication -----------------------------------------------------------------------------
    it('should multiply two numbers', done => {
        //Arrange
        let mathy = Mathy();
        //Action
        mathy.multiply(number1, number2)
            .then(res => {
                //Assert
                try {
                    assert.equal(res, number1 * number2);
                    done();
                } catch (err) {
                    done(err);
                }
            })
            .catch(done);
    });
    // Division -----------------------------------------------------------------------------------
    it('should divide two numbers', done => {
        let mathy = Mathy();
        mathy.divide(number1, number2)
            .then(res => {
                try {
                    assert.equal(res, number1 / number2);
                    done();
                } catch (err) {
                    done(err);
                }
            })
            .catch(done);
    });
    // Addition -----------------------------------------------------------------------------------
    it('should add two numbers', done => {
        let mathy = Mathy();
        mathy.add(number1, number2)
            .then(res => {
                try {
                    assert.equal(res, number1 + number2);
                    done();
                } catch (err) {
                    done(err);
                }
            })
            .catch(done);
    });
    // Substraction -------------------------------------------------------------------------------
    it('should substract two numbers', done => {
        let mathy = Mathy();
        mathy.substract(number1, number2)
            .then(res => {
                try {
                    assert.equal(res, number1 - number2);
                    done();
                } catch (err) {
                    done(err);
                }
            })
            .catch(done);
    });
});