const Mathy = require('../../Mathy');
const assert = require('chai').assert;

describe('Math example', () => {
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
    it('should add two numbers', done => {
        //arrange
        let mathy = Mathy();
        //action
        mathy.sum(2, 4)
            .then(res => {
                try {
                    assert.equal(res, 6);
                    done();
                } catch (err) {
                    done(err)
                }
            })
            .catch(done)
    });
    it('should div two numbers', done => {
        //arrange
        let mathy = Mathy();
        //action
        mathy.div(1, 1)
            .then(res => {
                try {
                    assert.equal(res, 1);
                    done();
                } catch (err) {
                    done(err)
                }
            })
            .catch(done);
    });
    it('should add all numbers of array', done => {
        //arrange
        let mathy = Mathy();
        let arr = [1,4,3,4];
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
});