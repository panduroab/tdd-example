const Mathy = require('../../Mathy');
const assert = require('chai').assert;

describe('Math example', () => {
    let arg1 = 10, arg2 = 12;
    it('should multiply tow numbers', done => {
        //Arrange
        let mathy = Mathy();
        //Action
        mathy.multiply(100, 2)
            .then(res => {
                //Assert
                try {
                    assert.equal(res, 200);
                    done();
                } catch (err) {
                    done(err)
                }
            })
            .catch(done);
    });
    it('Should add two numbers', done => {
        //Arrange
        let mathy = Mathy();
        //Action
        mathy.add(arg1, arg2)
            .then(res => {
                //Assert
                try {
                    assert.equal(res, arg1 + arg2);
                    done();
                } catch (err) {
                    done(err);
                }
            })
            .catch(done);
    });
    it('should add all numbers of array', done => {
        //arrange
        let mathy = Mathy();
        let arr = [1, 4, 3, 4];
        //action
        mathy.addArray(arr)
            .then(res => {
                try {
                    assert.equal(res, 12);
                    done();
                } catch (err) {
                    done(err);
                }
            })
            .catch(done);
    });

    it('should substract two numbers', done => {
        //Arrange
        let mathy = Mathy();
        //Action
        mathy.substract(100, 50)
            .then(res => {
                //Assert
                try {
                    assert.equal(res, 50);
                    done();
                } catch (err) {
                    done(err);
                }
            })
            .catch(done);
    });
    // Division -----------------------------------------------------------------------------------
    it('should divide two numbers', done => {
        let tests = [
            { num1: 100, num2: 2, expected: 50 }
        ];
        let mathy = Mathy();
        mathy.divide(tests[0].num1, tests[0].num2)
            .then(res => {
                try {
                    assert.equal(res, tests[0].expected);
                    done();
                } catch (err) {
                    done(err);
                }
            })
            .catch(done);
    });

    it("should chain math opperations", done => {
        let mathy = Mathy();
        mathy.add(1, 2)
            .then(res => mathy.multiply(res, 2))
            .then(res => mathy.divide(res, 2))
            .then(res =>{
                try {
                    assert.equal(res, 3);
                    done();
                } catch (err) {
                    done(err);
                }
            })
            .catch(done);
    });

});