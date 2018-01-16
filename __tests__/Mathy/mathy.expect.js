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
        //Arrange
        let mathy = Mathy();
        //Action
        mathy.add(100, 2)
            .then(res => {
                //Assert
                try {
                    assert.equal(res, 102);
                    done();
                } catch (err) {
                    done(err)
                }
            })
            .catch(done);
    });

    it ('should substract two numbers', done => {
        //Arrange
        let mathy = Mathy();
        //Action
        mathy.substract(100,50)
            .then(res=>{
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

    it ('should add numbers of array', done => {
        //Arrange
        let mathy = Mathy();
        let array = [5,5,5,5];
        //Action
        mathy.addArray(array)
            .then(res => {
                //Assert
                try{
                    assert.equal(res, 20);
                    done();
                } catch (err){
                    done(err);
                }
            })
            .catch(done);
    });
});